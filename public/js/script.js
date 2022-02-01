import { renderSingleScreenings } from "./modules/renderSingleScreenings.js";

if (window.location.pathname.match(/\/movies\/[0-9]+/gm)) {
  const movieId = window.location.pathname.split("/");
  renderSingleScreenings(movieId[2]);
}
