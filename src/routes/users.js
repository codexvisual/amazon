const express = require('express');
const pool = require('../config/db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT p.*, c.name AS category_name
      FROM products p
      INNER JOIN categories c ON c.id = p.category_id
      ORDER BY p.created_at DESC
    `);

    res.json({
      success: true,
      data: rows,
      count: rows.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Unable to fetch products',
      error: error.message
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `
        SELECT p.*, c.name AS category_name
        FROM products p
        INNER JOIN categories c ON c.id = p.category_id
        WHERE p.id = ?
      `,
      [req.params.id]
    );

    if (!rows.length) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      data: rows[0]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Unable to fetch product',
      error: error.message
    });
  }
});

module.exports = router;
