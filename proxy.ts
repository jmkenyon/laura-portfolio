import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";

  let lang = "en";

  if (host.endsWith(".com.br")) lang = "pt-BR";
  if (host.endsWith(".co.uk")) lang = "en";

  const response = NextResponse.next();
  response.cookies.set("lang", lang);

  return response;
}