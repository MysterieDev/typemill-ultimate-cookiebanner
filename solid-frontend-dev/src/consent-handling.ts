import Cookies from "js-cookie";

const consentVersion = window.cookiemeta.cookieBannerVersion
  ? window.cookiemeta.cookieBannerVersion.toString()
  : "0";
const consentVersionCookie = "cbSet";
const consentReqCookie = "cbReq";
const consentFunCookie = "cbFun";
const consentMarCookie = "cbMar";
const consentDurationInDays = 365;
export function setConsentVersionCookie() {
  return Cookies.set(consentVersionCookie, consentVersion, {
    expires: consentDurationInDays,
  });
}

export function setConsentReqCookie() {
  return Cookies.set(consentReqCookie, "1", {
    expires: consentDurationInDays,
  });
}
export function setConsentFunCookie(allowed: boolean) {
  return Cookies.set(consentMarCookie, allowed ? "1" : "0", {
    expires: consentDurationInDays,
  });
}

export function setConsentMarCookie(allowed: boolean) {
  return Cookies.set(consentFunCookie, allowed ? "1" : "0", {
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
