import {
  setConsentVersionCookie,
  setConsentFunCookie,
  setConsentReqCookie,
} from "./consent-handling";
import { CookieCategory as CookieCategory } from "./listing/cookie-table";

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
  } else {
    setConsentFunCookie(false);
  }
}

export function disableOtherUI() {
  document.body.classList.add(preventScrollClass);
}
