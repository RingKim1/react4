import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 더 필요한 스타일링 내용 */
  /* 예시👇
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
  } */
`;

export default GlobalStyle;
