import { createSignal } from "solid-js";

export function CookieTable(props) {
  let category = props.category;
  let cookies = generateListing(category);

  const [tableOpen, toggleTable] = createSignal(false);

  return cookies && cookies.length > 0 ? (
    <div>
      <p>
        <strong>{window.cookiemeta[category].headline}</strong>
      </p>
      <p>
        {window.cookiemeta[category].text}
        <br />
        <small
          style="font-weight: bold;"
          onClick={() => {
            toggleTable(!tableOpen());
          }}
        >
          ..{tableOpen() ? "weniger" : "mehr"} anzeigen
        </small>
      </p>
      {tableOpen() ? (
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>{props.cookieNameTable}</th>
              <th>{props.hostNameTable}</th>
              <th>{props.persistenceNameTable}</th>
            </tr>
          </thead>
          <tbody>
            {cookies.map((cookieDef) => (
              <tr>
                <td>{cookieDef.name}</td>
                <td>{cookieDef.host}</td>
                <td>{cookieDef.persistence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  ) : (
    ""
  );
}

function generateListing(category: CookieCategorie) {
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

interface CookieDefinition {
  name: string;
  host?: string;
  persistence?: string;
}

export enum CookieCategorie {
  required = "Req",
  functional = "Fun",
  marketing = "Mar",
}
