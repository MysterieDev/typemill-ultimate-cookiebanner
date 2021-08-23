import Cookies from "js-cookie";

const consentVersion = "0.1";
const consentCookie = "cbSet";
const consentDurationInDays = 365;
export function setConsentCookie() {
  return Cookies.set(consentCookie, consentVersion, consentDurationInDays);
}
export function doesItneedToShowBanner() {
  return Cookies.get(consentCookie) === consentVersion ? false : true;
}
