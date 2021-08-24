import Cookies from "js-cookie";

const consentVersion = window.cookiemeta.cookieBannerVersion
  ? window.cookiemeta.cookieBannerVersion.toString()
  : "0";
const consentVersionCookie = "cbSet";
const consentReqCookie = "cbReq";
const consentFunCookie = "cbFun";
const consentDurationInDays = 365;
export function setConsentVersionCookie() {
  return Cookies.set(consentVersionCookie, consentVersion, {
    expires: consentDurationInDays,
  });
}

export function setConsentReqCookie() {
  return Cookies.set(consentReqCookie, "TRUE", {
    expires: consentDurationInDays,
  });
}
export function setConsentFunCookie(allowed: boolean) {
  return Cookies.set(consentFunCookie, allowed ? "TRUE" : "FALSE", {
    expires: consentDurationInDays,
  });
}

export function doesItneedToShowBanner() {
  if (Cookies.get(consentVersionCookie) === consentVersion) {
    return false;
  } else {
    return true;
  }
}
