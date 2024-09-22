# Basic Auth Reown Supabase

This project is a basic authentication system using Reown, Supabase, and NextAuth.

## Getting Started

Follow these steps to set up and run the project:

1. Clone the repository:

   ```
   git clone [repository-url]
   cd basicauthreownsupabase
   ```

2. Set up the environment variables:

   - Copy the `.env.example` file and rename it to `.env`:
     ```
     cp .env.example .env
     ```
   - Open the `.env` file and fill in the two required variables:
     ```
     NEXT_PUBLIC_PROJECT_ID=your_value_here
     NEXTAUTH_SECRET=your_value_here
     ```

3. Install dependencies:

   ```
   npm install
   ```

4. Run the development server:

   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` (or the port specified in your console).

You should now be able to connect and sign in to the application.
