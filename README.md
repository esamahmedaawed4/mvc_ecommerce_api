# MVC E-commerce API (Boilerplate)
## What is included
- Express server with MVC structure
- Mongoose models for User, Seller, Product, Cart, Order
- Basic auth using JWT & bcryptjs
- Example controllers and routes
- Middlewares: auth and error handler
- .env.example and package.json

## Quick start
1. Extract the zip.
2. Copy `.env.example` to `.env` and fill values.
3. Install dependencies:
   ```
   npm install
   ```
4. Run in development:
   ```
   npm run dev
   ```
5. Server starts on `PORT` (default 5000).

## Notes
- This is a starter boilerplate. You still need to:
  - Implement proper validation & tests
  - Add rate limiting / production-grade logging
  - Integrate real storage for uploaded files (S3, etc.) if needed
  - Add payment provider (Stripe) if you want online payments


 env 

 PORT=5000
MONGO_URI=mongodb://localhost:27017/mvc_ecommerce
JWT_SECRET=your_jwt_secret_here
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

