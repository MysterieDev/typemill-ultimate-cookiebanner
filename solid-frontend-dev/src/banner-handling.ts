import {
  setConsentVersionCookie,
  setConsentFunCookie,
  setConsentReqCookie,
  setConsentMarCookie,
  getConsentCookies,
  hasRemoveConsentParam,
} from "./consent-handling";
import { CookieCategory } from "./types";

let consent = { req: true, fun: false, mar: false };
const getConsent = ()=> consent
const finishedConsentEvent = (didSeeCookiebannerUI: boolean) => new CustomEvent("bannerconsent", {
  detail: {...getConsent(), newConsent: didSeeCookiebannerUI},
});
export const removedConsentEvent = new CustomEvent("trackingoptout");

const setConsent = (details)=> {consent = details};

export const rootName = "#cbApp";
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
    consent.fun = true;
    consent.mar = true;
  } else {
    setConsentMarCookie(false);
  }

  fireCallback(false);
}

export function fireCallback(cbAlreadySeen: boolean) {
  if (cbAlreadySeen) {
    setConsent(getConsentCookies());
  }
  window.dispatchEvent(finishedConsentEvent(!cbAlreadySeen));
}

export function disableOtherUI() {
  document.body.classList.add(preventScrollClass);
}
