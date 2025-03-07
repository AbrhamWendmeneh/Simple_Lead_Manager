# Lead Management System

A simple Lead Management System with a Next.js frontend and Node.js/Express backend.

## Features

- Add new leads with name, email, and status
- View all leads in a table format
- MongoDB database for data storage
- RESTful API for lead management
- TypeScript support
- Tailwind CSS for styling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

## Project Structure

```
lead-management-system/
├── backend/                # Express.js backend
│   ├── src/               # Source code directory
│   ├── index.js           # Main server file
│   ├── .env              # Environment variables
│   └── package.json      # Backend dependencies
├── frontend/              # Next.js frontend
│   ├── src/              # Source code directory
│   │   └── components/   # React components
│   ├── pages/            # Next.js pages
│   ├── styles/           # CSS styles
│   ├── public/           # Static files
│   ├── .env.local        # Environment variables
│   └── package.json      # Frontend dependencies
└── config/               # Configuration files
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with your MongoDB connection string:

   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```
   The server will run on http://localhost:3000

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the frontend directory:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. Start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend will run on http://localhost:3001

5. Open your browser and navigate to http://localhost:3001

## Technology Stack

- **Frontend**:

  - Next.js with TypeScript
  - Tailwind CSS for styling
  - ESLint for code linting
  - PostCSS for CSS processing

- **Backend**:
  - Express.js
  - MongoDB with Mongoose
  - Node.js environment

## API Endpoints

- `GET /api/leads` - Fetch all leads
- `POST /api/leads` - Create a new lead
- `PUT /api/leads/:id` - Update a lead
- `DELETE /api/leads/:id` - Delete a lead

## Lead Schema

```typescript
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
