# Lead Management System

A simple Lead Management System with a Next.js frontend and Node.js/Express backend.

## Features

- Add new leads with name, email, and status
- View all leads in a table format
- MongoDB database for data storage
- RESTful API for lead management

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

## Project Structure

```
lead-management-system/
├── backend/             # Express.js backend
│   ├── index.js         # Main server file
│   └── package.json     # Backend dependencies
└── frontend/            # Next.js frontend
    ├── pages/           # Next.js pages
    │   ├── api/         # API routes
    │   └── index.js     # Main page
    └── package.json     # Frontend dependencies
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Make sure MongoDB is running locally on port 27017 or update the connection string in `index.js` to point to your MongoDB instance.

4. Start the backend server:
   ```
   npm run dev
   ```
   The server will run on http://localhost:3000

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the frontend development server:

   ```
   npm run dev
   ```

   The frontend will run on http://localhost:3001

4. Open your browser and navigate to http://localhost:3001

## API Endpoints

- `GET /api/leads` - Fetch all leads
- `POST /api/leads` - Create a new lead

## Lead Schema

```javascript
{
  name: String,       // required
  email: String,      // required, unique
  status: String,     // enum: ["New", "Engaged", "Proposal Sent", "Closed-Won", "Closed-Lost"]
  createdAt: Date     // automatically set to current date
}
```

## Deployment (Optional)

### Frontend Deployment

The frontend can be deployed to Vercel:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy your Next.js application

### Backend Deployment

The backend can be deployed to platforms like Railway, Render, or Heroku:

1. Create an account on your preferred platform
2. Connect your GitHub repository
3. Configure the environment variables (MongoDB connection string)
4. Deploy the backend

## License

MIT
