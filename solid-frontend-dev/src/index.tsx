import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import {
  doesItneedToShowBanner,
  hasRemoveConsentParam,
} from "./consent-handling";
import { fireCallback, removedConsentEvent } from "./banner-handling";
import { CookieTable } from "./listing/cookie-table";
import { CookieCategory } from "./types";

if (doesItneedToShowBanner()) {
  render(() => <App />, document.getElementById("cbApp"));
} else if (hasRemoveConsentParam()) {
  window.dispatchEvent(removedConsentEvent);
} else {
  fireCallback(true);
}
const reqTable = document.getElementById("cbReqTable");
if (reqTable) {
  reqTable.outerHTML = '<div id="cbReqTable"></div>';
  const app = document.createElement("DIV");
  reqTable.appendChild(app);
  render(
    () => (
      <CookieTable
        category={CookieCategory.required}
        cookieNameTable={window.cookiemeta.cookienameColumn}
        hostNameTable={window.cookiemeta.cookiehostColumn}
        persistenceNameTable={window.cookiemeta.cookiepersistenceColumn}
      />
    ),
    document.getElementById("cbReqTable")
  );
}

const funTable = document.getElementById("cbFunTable");
if (funTable) {
  funTable.outerHTML = '<div id="cbFunTable"></div>';
  render(
    () => (
      <CookieTable
        category={CookieCategory.functional}
        cookieNameTable={window.cookiemeta.cookienameColumn}
        hostNameTable={window.cookiemeta.cookiehostColumn}
        persistenceNameTable={window.cookiemeta.cookiepersistenceColumn}
      />
    ),
    document.getElementById("cbFunTable")
  );
}

const marTable = document.getElementById("cbMarTable");
if (marTable) {
  marTable.outerHTML = '<div id="cbMarTable"></div>';
  render(
    () => (
      <CookieTable
        category={CookieCategory.marketing}
        cookieNameTable={window.cookiemeta.cookienameColumn}
        hostNameTable={window.cookiemeta.cookiehostColumn}
        persistenceNameTable={window.cookiemeta.cookiepersistenceColumn}
      />
    ),
    document.getElementById("cbMarTable")
  );
}
