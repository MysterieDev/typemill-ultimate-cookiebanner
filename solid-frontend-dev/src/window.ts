import { CookieDefinition } from "./types";
declare global {
  interface Window {
    cookiemeta: cookieBannerMeta;
  }
}

interface cookieBannerMeta {
  cookieBannerVersion: number;
  cookienameColumn: string;
  cookiehostColumn: string;
  cookiepersistenceColumn: string;
  headline: string;
  introduction: string;
  showmore: string;
  showless: string;
  acceptallbtn: string;
  declinenonrequiredbtn: string;
  onlyfunctionalbtn: string;
  Req: { text?: string; headline?: string; cookies: CookieDefinition[] };
  Fun: { text?: string; headline?: string; cookies: CookieDefinition[] };
  Mar: { text?: string; headline?: string; cookies: CookieDefinition[] };
}

export {};
