import pages from "./service/route"

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/admin", pages.account.login, pages.account.register]
};
