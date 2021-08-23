declare global {
  interface Window {
    cookiemeta: Record<string, cookieBannerMeta>;
  }
}

interface cookieBannerMeta {
  cookieBannerVersion: number;
  cookienameColumn: string;
  cookiehostColumn: string;
  cookiepersistenceColumn: string;
  Req: { text?: string; headline?: string };
  Fun: { text?: string; headline?: string };
  Mar: { text?: string; headline?: string };
}

export {};
