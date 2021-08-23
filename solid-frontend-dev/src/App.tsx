import { Component, onMount } from "solid-js";
import "./assets/css/styles.css";
import "./assets/css/custom-styles.css";
import { CookieTable } from "./listing/cookie-table";
import { closeCookiebanner, disableOtherUI } from "./banner-handling";

const App: Component = () => {
  onMount(() => {
    disableOtherUI();
  });

  return (
    <div id="backgroundContainer">
      <div className="container cookieContainer content">
        <h2>Wir respektieren Ihre Privatsphäre!</h2>
        <p>
          <strong>Erforderliche Cookies</strong>
        </p>
        <p>
          Erfoderliche Cookies, sind Speicherelemente, die für den Betrieb
          dieser Seite unerlässlich sind.
        </p>
        <small>
          <a href="">..weniger anzeigen</a>
        </small>
        <CookieTable
          cookieNameTable="Cookie"
          hostNameTable="Host"
          persistenceNameTable="Speicherdauer"
        />
        <p>
          <strong>Funktionale Cookies</strong>
        </p>
        <p>
          Funktionale Cookies erfassen statistische Werte, die uns helfen,
          unsere Prozesse zu erfassen.
        </p>
        <small>
          <a href="">..mehr anzeigen</a>
        </small>
        <div className="columns is-mobile">
          <div className="column">
            <button className="button is-secondary" onClick={closeCookiebanner}>
              Ablehnen
            </button>
          </div>
          <div className="column">
            <button className="button is-primary" onClick={closeCookiebanner}>
              Annehmen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
