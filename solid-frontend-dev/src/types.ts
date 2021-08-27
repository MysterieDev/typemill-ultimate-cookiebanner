export interface CookieDefinition {
  name: string;
  host?: string;
  persistence?: string;
}

export enum CookieCategory {
  required = "Req",
  functional = "Fun",
  marketing = "Mar",
}
