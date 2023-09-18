import { withAuth } from 'next-auth/middleware';

// Custom middleware for authentication
const authMiddleware = withAuth({
  // Customize your authentication logic here
  callbacks: {
    authorized({ req, token }) {
      // You can add custom logic here to control access
      // For example, restricting access to certain routes based on user roles or tokens

      // `/admin` requires admin role
      if (req.nextUrl.pathname === '/admin') {
        return token?.userRole === 'admin';
      }
      // `/me` only requires the user to be logged in
      return !!token;
    },
  },
});

export default authMiddleware;
