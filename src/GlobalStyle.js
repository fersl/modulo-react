import { createGlobalStyle } from "styled-components";

export const GlobaLStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 18px;
    }

    body {
        background-color: #e3e3e3;
    }
`