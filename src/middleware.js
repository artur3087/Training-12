import { authMiddleware} from "@clerk/nextjs";

export default authMiddleware({ // START OF authMiddleware //

    publicRoutes: ["/", "/Posts"] // maybe /Posts/(.*) ??? //

}); // END OF authMiddleware //

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  };