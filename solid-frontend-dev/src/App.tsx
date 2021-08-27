import { Component, onMount, Show } from "solid-js";
import "./assets/css/styles.css";
import "./assets/css/custom-styles.css";
import { CookieTable } from "./listing/cookie-table";
import { closeCookiebanner, disableOtherUI } from "./banner-handling";
import { listingState } from "./listing/state";
import { CookieCategory } from "./types";

const App: Component = () => {
  onMount(() => {
    disableOtherUI();
  });

  function acceptAllBtn() {
    return (
      <button
        className="button  btn-accept-all"
        onClick={() => closeCookiebanner(CookieCategory.marketing)}
      >
        {window.cookiemeta.acceptallbtn}
      </button>
    );
  }
  return (
    <div id="backgroundContainer">
      <div className="container cookieContainer content">
        <h2 textContent={window.cookiemeta.headline}></h2>
        <p innerHTML={window.cookiemeta.introduction}></p>
        <CookieTable category={CookieCategory.required} />
        <CookieTable category={CookieCategory.functional} />
        <CookieTable category={CookieCategory.marketing} />
        <div className="columns mt-2">
          <div className="column">
            <button
              className="button is-small is-secondary"
              onClick={() => closeCookiebanner(CookieCategory.required)}
            >
              {window.cookiemeta.declinenonrequiredbtn}
            </button>
          </div>
          <Show when={listingState.Fun.length === 0}>
            <div className="column">{acceptAllBtn()}</div>
          </Show>
        </div>
        <Show when={listingState.Fun.length > 0}>
          <div className="columns">
            <div className="column">
              <button
                className="button is-small is-secondary"
                onClick={() => closeCookiebanner(CookieCategory.functional)}
              >
                {window.cookiemeta.onlyfunctionalbtn}
              </button>
            </div>
            <div className="column">{acceptAllBtn()}</div>
          </div>
        </Show>
      </div>
    </div>
  );
};

export default App;
