# Lead Management System Frontend

This is the frontend application for the Lead Management System, built with Next.js, TypeScript, and Tailwind CSS.

## Project Structure

```
frontend/
├── src/
│   ├── components/     # React components
│   └── styles/        # CSS styles
├── pages/             # Next.js pages
├── public/            # Static files
├── styles/           # Global styles
├── .env.local        # Environment variables
└── package.json      # Dependencies
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env.local` file with:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Features

- Modern UI with Tailwind CSS
- Type-safe development with TypeScript
- Responsive design
- Real-time form validation
- API integration with backend
- Clean and modular component architecture

## Development

The application uses:

- [Next.js](https://nextjs.org/) for the framework
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [ESLint](https://eslint.org/) for code linting

## Deployment

The application can be deployed to Vercel:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy
