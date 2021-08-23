import { setConsentCookie } from "./consent-handling";

export const rootName = "#solidApp";
export const preventScrollClass = "cbPreventScroll";

export function closeCookiebanner() {
  handleFinishedConsentInteraction();
  document.body.classList.remove(preventScrollClass);
  document.querySelector<HTMLDivElement>(rootName)!.style.display = "none";
}

export function handleFinishedConsentInteraction() {
  setConsentCookie();
}

export function disableOtherUI() {
  document.body.classList.add(preventScrollClass);
}
