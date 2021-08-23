import { onMount } from "solid-js";

export function CookieTable(props) {
  onMount(() => {
    generateListing();
  });
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
        {generateListing().map((cookieDef) => (
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

function generateListing() {
  const cookies: CookieDefinition[] = [];
  const requiredCookiesTemplate =
    // Get Table Template
    document.querySelector<HTMLTemplateElement>("#cookieDefReq").content
      .firstElementChild;
  const requiredCookies = requiredCookiesTemplate.querySelector("tbody");
  // Each Table Row represents a Cookie Definition
  const requiredCookiesDefinition = requiredCookies.querySelectorAll("tr");
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
