import { createGlobalStyle } from "styled-components";
import GlobalSass from "../sass/Global.scss";

const StyledGlobalStyle = createGlobalStyle`${GlobalSass}`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}
export default GlobalStyle;
