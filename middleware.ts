import { authMiddleware } from "@clerk/nextjs";

// Define public routes
const publicRoutes = [
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  "/events/:id",
  "/api/webhook/clerk",
  "/api/webhook/stripe",
  "/api/uploadthing",
];

export default authMiddleware({
  publicRoutes: publicRoutes,
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};