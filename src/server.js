const express = require('express');
const pool = require('../config/db');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, shippingAddress, items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'At least one product is required in the order'
      });
    }

    const connection = await pool.getConnection();

    try {
      await connection.beginTransaction();

      const totalAmount = items.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0);

      const [orderResult] = await connection.execute(
        'INSERT INTO orders (user_id, total_amount, shipping_address) VALUES (?, ?, ?)',
        [userId || null, totalAmount, shippingAddress || 'N/A']
      );

      const orderId = orderResult.insertId;

      for (const item of items) {
        await connection.execute(
          'INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES (?, ?, ?, ?)',
          [orderId, item.productId, item.quantity || 1, item.price]
        );
      }

      await connection.commit();

      res.status(201).json({
        success: true,
        message: 'Order placed successfully',
        orderId
      });
    } catch (transactionError) {
      await connection.rollback();
      throw transactionError;
    } finally {
      connection.release();
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Unable to place order',
      error: error.message
    });
  }
});

module.exports = router;
