import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { doesItneedToShowBanner } from "./consent-handling";

if (doesItneedToShowBanner()) {
  render(() => <App />, document.getElementById("solidApp"));
}
