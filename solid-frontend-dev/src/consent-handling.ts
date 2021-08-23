import Cookies from "js-cookie";

const consentVersion = window.cookiemeta.cookieBannerVersion
  ? window.cookiemeta.cookieBannerVersion.toString()
  : "0";
const consentCookie = "cbSet";
const consentDurationInDays = 365;
export function setConsentCookie() {
  return Cookies.set(consentCookie, consentVersion, {
    expires: consentDurationInDays,
  });
}
export function doesItneedToShowBanner() {
  if (Cookies.get(consentCookie) === consentVersion) {
    return false;
  } else {
    return true;
  }
}
