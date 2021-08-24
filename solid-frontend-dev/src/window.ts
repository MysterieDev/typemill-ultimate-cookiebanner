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
  showmore: string;
  showless: string;
  acceptallbtn: string;
  declinenonrequiredbtn: string;
  saveselectionbtn: string;
  Req: { text?: string; headline?: string };
  Fun: { text?: string; headline?: string };
  Mar: { text?: string; headline?: string };
}

export {};
