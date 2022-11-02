import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session/edge";
import { sessionOptions } from "@lib/session"

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  const session = await getIronSession(req, res, sessionOptions);

  const { user } = session;
  if (user === undefined) console.log("No session user");
  else console.log("Session", user.fullname);


  // const shouldAuth = (req.nextUrl.pathname.startsWith("/dashboard")
  // || req.nextUrl.pathname.startsWith("/clients")
  // || req.nextUrl.pathname.startsWith("/settings")
  // || req.nextUrl.pathname.startsWith("/billing"))

  // if (user === undefined && (shouldAuth)) {
  //   return NextResponse.redirect(new URL('/login', req.url))
  // }

  if (user == undefined && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  if (user == undefined && req.nextUrl.pathname.startsWith("/clients")) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  if (user == undefined && req.nextUrl.pathname.startsWith("/settings")) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  if (user == undefined && req.nextUrl.pathname.startsWith("/billing")) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (user && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return res;
};

// Can be omitted
// export const config = {
//   // matcher: ["/login", "/dashboard"],
//   matcher: ['/login', '/dashboard', '/clients', '/settings', '/billing'],
// };