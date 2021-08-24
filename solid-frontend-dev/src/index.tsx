import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { doesItneedToShowBanner } from "./consent-handling";
import { fireCallback } from "./banner-handling";

if (doesItneedToShowBanner()) {
  render(() => <App />, document.getElementById("solidApp"));
} else {
  fireCallback(true);
}
