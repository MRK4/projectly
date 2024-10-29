import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isLoggedIn: boolean = false;

export function middleware(req: NextRequest) {
  let cookie = req.cookies.get("sid");

  // Si l'utilisateur n'est pas authentifié, redirige vers la page de connexion
  if (!cookie && req.nextUrl.pathname.startsWith("/dashboard")) {
    const loginUrl = new URL("/", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
