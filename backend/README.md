# Greenfield Energy - Backend API

Backend server for Greenfield Energy website built with Node.js, Express, and MongoDB.

## Features

- RESTful API endpoints
- Contact form submission handling
- Products and services data management
- CORS enabled for frontend integration
- Environment variable configuration

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/greenfield-energy
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on http://localhost:5000

## API Endpoints

### Root
- `GET /` - API information and available endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get contact endpoint information

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get specific product by ID

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get specific service by ID

## Project Structure

```
backend/
├── routes/
│   ├── contactRoutes.js
│   ├── productRoutes.js
│   └── serviceRoutes.js
├── server.js
├── package.json
├── .env
└── README.md
```

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv
