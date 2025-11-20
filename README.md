# Greenfield Energy Website

Professional website for Greenfield Energy - Oil & Gas Consultancy and Software Solutions company.

## Project Overview

This is a full-stack MERN application with separate frontend and backend directories:

- **Frontend**: Modern React application with React Router and Tailwind CSS
- **Backend**: Node.js/Express REST API server

## Project Structure

```
greenfield-energy/
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable components (Navbar, Footer)
│   │   ├── pages/         # Page components (Home, About, Services, Products, Contact)
│   │   ├── App.jsx        # Main app component with routing
│   │   ├── main.jsx       # Application entry point
│   │   └── index.css      # Global styles with Tailwind
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
└── backend/               # Express backend API
    ├── routes/            # API route handlers
    │   ├── contactRoutes.js
    │   ├── productRoutes.js
    │   └── serviceRoutes.js
    ├── server.js          # Main server file
    ├── package.json
    └── README.md
```

## Features

### Frontend
- Fully responsive design for all devices
- Modern UI with blue and green professional color scheme
- Smooth animations and transitions
- Five main pages: Home, About, Services, Products, Contact
- Component-based architecture
- Professional stock images from Pexels

### Backend
- RESTful API endpoints
- Contact form submission handling
- Products and services data management
- CORS enabled for frontend integration
- Environment variable configuration

## Getting Started

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on http://localhost:5173

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend will run on http://localhost:5000

## Technologies Used

### Frontend
- React 18
- React Router DOM
- Tailwind CSS
- Vite
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv

## Pages

1. **Home** - Hero section with company overview, statistics, and call-to-action
2. **About** - Company story, vision, mission, values, and partnerships
3. **Services** - Engineering consultancy, software development, and training services
4. **Products** - SandMaster, AutoWellz, AutoPro, RockMaster, and GREEN software solutions
5. **Contact** - Contact form and company information

## API Endpoints

- `GET /` - API information
- `POST /api/contact` - Submit contact form
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get specific product
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get specific service

## Build for Production

### Frontend
```bash
cd frontend
npm run build
```

### Backend
```bash
cd backend
npm start
```

## Environment Variables

Create `.env` files in both frontend and backend directories as needed.

Backend `.env`:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/greenfield-energy
```

## License

ISC
