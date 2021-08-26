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
  return Cookies.set(consentReqCookie, "TRUE", {
    expires: consentDurationInDays,
  });
}
export function setConsentFunCookie(allowed: boolean) {
  return Cookies.set(consentMarCookie, allowed ? "TRUE" : "FALSE", {
    expires: consentDurationInDays,
  });
}

export function setConsentMarCookie(allowed: boolean) {
  return Cookies.set(consentFunCookie, allowed ? "TRUE" : "FALSE", {
    expires: consentDurationInDays,
  });
}

export function doesItneedToShowBanner() {
  if (hasNoCookieParam()) {
    return false;
  }
  if (Cookies.get(consentVersionCookie) === consentVersion) {
    if (
      Cookies.get(consentReqCookie) &&
      Cookies.get(consentFunCookie) &&
      Cookies.get(consentMarCookie)
    ) {
      return false;
    }
    cleanCookies();
    return true;
  } else {
    cleanCookies();
    return true;
  }
}

function hasNoCookieParam() {
  return !!new URL(window.location.href).searchParams.get("nocb");
}

function cleanCookies() {
  Cookies.remove(consentReqCookie);
  Cookies.remove(consentFunCookie);
  Cookies.remove(consentMarCookie);
}

export function getConsentCookies() {
  return {
    req: true,
    fun: Cookies.get(consentFunCookie) === "TRUE" ? true : false,
    mar: Cookies.get(consentMarCookie) === "TRUE" ? true : false,
  };
}
