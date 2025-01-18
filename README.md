# AI Chat Personality Application Frontend

## Description
The frontend for the AI Chat Personality Application is built using React, Tailwind CSS, and Vite. It provides an intuitive interface for users to interact with the AI chat application, manage their profiles, and view their chat history. The design ensures a seamless user experience, leveraging modern technologies for speed, scalability, and responsiveness.

## Key Features
- User-friendly interface for onboarding and chatting
- Responsive design using Tailwind CSS
- High-performance development environment with Vite
- Integration with Flask backend for real-time chat functionality
- Secure API communication using Firebase

## Technologies Used
- **React**: For building the user interface
- **Tailwind CSS**: For styling the application
- **Vite**: For a fast and efficient development environment

## Installation

### Prerequisites:
- Node.js (v16 or later)
- NPM (v8 or later) or Yarn

### Steps to Install and Run:
1. Clone the repository:
   ```bash
   git clone https://github.com/neel-jotaniya/UrbanBranch_Frontend.git
   cd UrbanBranch_Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```


3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the application in your browser:
   Navigate to `http://localhost:5173`.


## Available Scripts
- `npm run dev`: Starts the development server
- `npm run build`: Builds the application for production
- `npm run preview`: Previews the production build

## Deployment
1. Build the application:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Deploy the `dist` folder to your preferred hosting platform (e.g., Firebase Hosting, Netlify, Vercel).

## API Endpoints
The frontend communicates with the backend through the following endpoints:

### Chat
- `POST /chat`: Send and receive chat messages

### Onboarding
- `POST /onboarding`: Submit user details and personality questionnaire



