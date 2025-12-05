import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  matcher: [
    "/dashboard/:path*", 
    "/restaurant/:path*", 
    "/driver/:path*", 
    "/admin/:path*",
  ],
};
