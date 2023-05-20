import { NextResponse } from "next/server";
import allUrl from './settings/allUrl.json'
export default function middleware(req) {
  // console.log('-------------------> ',req.nextUrl.pathname.startsWith('/dashboard'))
  // console.log('-------------------> ',req.nextUrl.pathname.startsWith('/ffff'))
  const token = req.cookies.get("AToken");
  const url = req.nextUrl.clone()


  // if (req.nextUrl.pathname.startsWith('/test') && !token) {
  //   return NextResponse.redirect(allUrl.UnAuthorizationRedirectUr);
  // }
  return NextResponse.next();
}

export const config = {
  matcher: ['/test/:path*'],
}