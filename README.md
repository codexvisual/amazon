# Amazon Storefront Project

A clean, modern Amazon-inspired e-commerce storefront built with a Node.js + Express backend and MySQL database, paired with a responsive storefront UI.

## Overview

This project is designed to simulate a real-world online shopping experience with:
- a premium storefront homepage
- product listing sections
- category and search support
- user registration/login endpoints
- order creation flow
- MySQL-powered data layer

It follows a practical full-stack architecture suitable for learning, portfolio presentation, and enhancement into a larger production-ready commerce platform.

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MySQL
- Environment configuration: dotenv
- API communication: REST endpoints
- Development tools: nodemon

## Project Structure

```bash
amazon-storefront/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── src/
│   ├── config/
│   │   └── db.js
│   ├── routes/
│   │   ├── products.js
│   │   ├── users.js
│   │   └── orders.js
│   └── server.js
├── db/
│   ├── schema.sql
│   └── seed.sql
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```

## Features

### Frontend
- Amazon-inspired homepage layout
- Top navigation and category strip
- Hero banner and promo cards
- Product listing cards with pricing and ratings
- Search by product name
- Cart counter interaction
- Responsive design for desktop and mobile

### Backend
- Product fetch API
- Product detail API
- User registration API
- User login API
- Order creation API
- Health check endpoint

### Database
- Categories table
- Products table
- Users table
- Orders table
- Order items table
- Seeded demo data

## Database Schema

### categories
- id
- name
- slug
- created_at

### products
- id
- category_id
- name
- description
- short_description
- price
- compare_price
- stock
- image_url
- badge
- rating
- review_count
- is_featured
- is_popular
- created_at
- updated_at

### users
- id
- full_name
- email
- password_hash
- phone
- created_at

### orders
- id
- user_id
- status
- total_amount
- shipping_address
- created_at

### order_items
- id
- order_id
- product_id
- quantity
- unit_price

## API Endpoints

### Products
- GET /api/products
- GET /api/products/:id

### Users
- POST /api/users/register
- POST /api/users/login

### Orders
- POST /api/orders

### Health
- GET /api/health

## Setup Instructions

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create MySQL database and import schema:

```bash
mysql -u root -p
CREATE DATABASE amazon_store;
EXIT;

mysql -u root -p amazon_store < db/schema.sql
mysql -u root -p amazon_store < db/seed.sql
```

4. Copy environment file:

```bash
cp .env.example .env
```

5. Update database credentials in `.env` if needed:

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=amazon_store
PORT=5000
```

6. Start the app:

```bash
npm start
```

7. Open the project in the browser:

```text
http://localhost:5000
```

## Example Product Data

The project includes seeded product entries such as:
- Sony WH-1000XM5 Headphones
- Apple iPad 10.9"
- Philips Smart Air Fryer
- IFB Microwave
- Noise Smartwatch
- Office Chair

## Development Plan

### Phase 1: Basic storefront
- landing page layout
- product cards
- search feature
- responsive design

### Phase 2: Backend and database
- Express API setup
- MySQL schema design
- REST routes
- seeded sample products

### Phase 3: Commerce features
- product detail pages
- user authentication
- cart management
- checkout flow
- order history

### Phase 4: Production readiness
- JWT authentication
- admin dashboard
- product CRUD
- image upload support
- payment integration
- order tracking
- Deployable Docker setup

## Notes

This project is inspired by Amazon’s design and shopping model but is not a direct clone of Amazon’s proprietary codebase or branding. It is a clean, original storefront implementation for learning and portfolio use.

## Future Enhancements

- React frontend migration
- Tailwind CSS styling
- Admin panel for products/orders
- Secure password hashing (bcrypt)
- JWT-based authentication
- Product category filtering
- Checkout and payment integration
- Deployment to Vercel / Render / Railway / DigitalOcean

## License

MIT
