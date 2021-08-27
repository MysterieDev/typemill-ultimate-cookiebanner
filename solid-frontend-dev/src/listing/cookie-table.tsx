import { createSignal, Show } from "solid-js";
import { CookieCategory, CookieDefinition } from "../types";
import { listingState, updateCookieState } from "./state";

export function CookieTable(props) {
  let category: CookieCategory = props.category;
  let cookies = generateListing(category);
  updateCookieState(category, cookies);
  // mount them onto the window meta object
  window.cookiemeta[category].cookies = listingState[category];
  let showCookiesLabel: string = window.cookiemeta.showmore;
  let hideCookiesLabel: string = window.cookiemeta.showless;
  const [tableOpen, toggleTable] = createSignal(false);

  return (
    <Show when={cookies && cookies.length > 0}>
      <h4>{window.cookiemeta[category].headline}</h4>
      <p
        className="marginBtns"
        onClick={() => {
          toggleTable(!tableOpen());
        }}
      >
        {window.cookiemeta[category] ? window.cookiemeta[category].text : ""}
        <br />
        <small style="font-weight: bold;">
          ..{tableOpen() ? hideCookiesLabel : showCookiesLabel}
        </small>
      </p>

      <Show when={tableOpen()}>
        <Listing
          cookies={cookies}
          category={category}
          cookieNameTable={window.cookiemeta.cookienameColumn}
          hostNameTable={window.cookiemeta.cookiehostColumn}
          persistenceNameTable={window.cookiemeta.cookiepersistenceColumn}
        ></Listing>
      </Show>
    </Show>
  );
}

function generateListing(category: CookieCategory) {
  const cookies: CookieDefinition[] = [];
  const requiredCookiesTemplate =
    // Get Table Template
    document.querySelector<HTMLTemplateElement>("#cookieDef" + category).content
      .firstElementChild;
  if (!requiredCookiesTemplate) {
    return [];
  }
  const requiredCookiesBody = requiredCookiesTemplate.querySelector("tbody");
  // Each Table Row represents a Cookie Definition
  if (!requiredCookiesBody) {
    return [];
  }
  const requiredCookiesDefinition = requiredCookiesBody.querySelectorAll("tr");
  if (!requiredCookiesDefinition) {
    return [];
  }
  requiredCookiesDefinition.forEach((def) => {
    const cookieDef: CookieDefinition = {
      name: "",
      host: undefined,
      persistence: undefined,
    };
    //Each TD Represents one Cookie Category
    const td = def.querySelectorAll("td");
    let cookieDefCategory = 0;
    td.forEach(() => {
      switch (cookieDefCategory) {
        case 0:
          cookieDef.name = td[cookieDefCategory].innerHTML;
          cookieDefCategory++;
          break;
        case 1:
          cookieDef.host = td[cookieDefCategory].innerHTML;
          cookieDefCategory++;
          break;
        case 2:
          const num = Number(td[cookieDefCategory].innerHTML);
          num === 0
            ? (cookieDef.persistence = "SESSION")
            : (cookieDef.persistence = num.toString());
          cookieDefCategory = 0;
          cookies.push(cookieDef);
          break;
      }
    });
  });
  return cookies;
}

function Listing(props) {
  return (
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>{props.cookieNameTable}</th>
          <th>{props.hostNameTable}</th>
          <th>{props.persistenceNameTable}</th>
        </tr>
      </thead>
      <tbody>
        {listingState[props.category].map((cookieDef) => (
          <tr>
            <td>{cookieDef.name}</td>
            <td>{cookieDef.host}</td>
            <td>{cookieDef.persistence}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
