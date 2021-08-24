import { Component, onMount } from "solid-js";
import "./assets/css/styles.css";
import "./assets/css/custom-styles.css";
import { CookieTable, CookieCategory } from "./listing/cookie-table";
import { closeCookiebanner, disableOtherUI } from "./banner-handling";

const App: Component = () => {
  onMount(() => {
    disableOtherUI();
  });

  return (
    <div id="backgroundContainer">
      <div className="container cookieContainer content">
        <h2 textContent={window.cookiemeta.headline}></h2>
        <CookieTable
          category={CookieCategory.required}
          cookieNameTable={window.cookiemeta.cookienameColumn}
          hostNameTable={window.cookiemeta.cookiehostColumn}
          persistenceNameTable={window.cookiemeta.cookiepersistenceColumn}
        />
        <CookieTable
          category={CookieCategory.functional}
          cookieNameTable={window.cookiemeta.cookienameColumn}
          hostNameTable={window.cookiemeta.cookiehostColumn}
          persistenceNameTable={window.cookiemeta.cookiepersistenceColumn}
        />
        <CookieTable
          category={CookieCategory.marketing}
          cookieNameTable={window.cookiemeta.cookienameColumn}
          hostNameTable={window.cookiemeta.cookiehostColumn}
          persistenceNameTable={window.cookiemeta.cookiepersistenceColumn}
        />
        <div className="columns is-mobile">
          <div className="column">
            <button
              className="button is-secondary"
              onClick={() => closeCookiebanner(CookieCategory.required)}
            >
              {window.cookiemeta.declinenonrequiredbtn}
            </button>
          </div>
          <div className="column">
            <button
              className="button is-primary"
              onClick={() => closeCookiebanner(CookieCategory.functional)}
            >
              {window.cookiemeta.acceptallbtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
