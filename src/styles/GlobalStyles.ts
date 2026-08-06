import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;background:${({theme})=>theme.colors.cream};color:${({theme})=>theme.colors.ink};font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased;transition:background-color .22s ease,color .22s ease}
  body.modal-open{overflow:hidden}
  button,input,textarea,select{font:inherit}
  button{cursor:pointer}
  a{color:inherit;text-decoration:none}
  img{display:block;max-width:100%}
  h1,h2,h3,p{margin-top:0}
  button:focus-visible,a:focus-visible,input:focus-visible,textarea:focus-visible,select:focus-visible{outline:3px solid ${({theme})=>theme.colors.orange};outline-offset:3px}
  @media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation:none!important;transition:none!important}}
`;
