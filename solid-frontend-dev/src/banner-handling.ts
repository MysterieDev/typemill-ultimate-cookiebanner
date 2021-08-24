import {
  setConsentVersionCookie,
  setConsentFunCookie,
  setConsentReqCookie,
  setConsentMarCookie,
} from "./consent-handling";
import { CookieCategory as CookieCategory } from "./listing/cookie-table";

let consent = { req: true, fun: false, mar: false };

const finishedConsentEvent = new CustomEvent("build", { detail: consent });

export const rootName = "#solidApp";
export const preventScrollClass = "cbPreventScroll";

export function closeCookiebanner(category: CookieCategory) {
  handleFinishedConsentInteraction(category);
  document.body.classList.remove(preventScrollClass);
  document.querySelector<HTMLDivElement>(rootName)!.style.display = "none";
}

export function handleFinishedConsentInteraction(category: CookieCategory) {
  setConsentVersionCookie();
  setConsentReqCookie();
  if (category === CookieCategory.functional) {
    setConsentFunCookie(true);
    consent.fun = true;
  } else {
    setConsentFunCookie(false);
  }
  if (category === CookieCategory.marketing) {
    setConsentMarCookie(true);
    consent.mar = true;
  } else {
    setConsentMarCookie(false);
  }

  window.dispatchEvent(finishedConsentEvent);
}

export function disableOtherUI() {
  document.body.classList.add(preventScrollClass);
}
