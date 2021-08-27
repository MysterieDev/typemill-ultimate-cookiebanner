import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import { CookieCategory, CookieDefinition } from "../types";

export const [listingState, setListingState] = createStore({
  Req: [],
  Fun: [],
  Mar: [],
});

export function updateCookieState(
  category: CookieCategory,
  data: CookieDefinition[]
) {
  setListingState(category, () => data);
}
