import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhooks',
    '/question/:id',
    '/tags',
    '/tags/:id',
    '/profile/:id',
    '/community',
    '/jobs'
  ],
  ignoredRoutes: [
    '/api/webhooks', '/api/chatgpt'
  ]
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
 