import {
  setConsentVersionCookie,
  setConsentFunCookie,
  setConsentReqCookie,
  setConsentMarCookie,
  getConsentCookies,
} from "./consent-handling";
import { CookieCategory } from "./types";

let consent = { req: true, fun: false, mar: false };

const finishedConsentEvent = new CustomEvent("bannerconsent", {
  detail: consent,
});

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
    setConsentFunCookie(true);
    setConsentMarCookie(true);
    consent.mar = true;
  } else {
    setConsentMarCookie(false);
  }

  fireCallback(false);
}

export function fireCallback(checkCookies: boolean) {
  if (checkCookies) {
    consent = getConsentCookies();
  }
  window.dispatchEvent(finishedConsentEvent);
}

export function disableOtherUI() {
  document.body.classList.add(preventScrollClass);
}
