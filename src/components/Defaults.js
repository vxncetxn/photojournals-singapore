import { createGlobalStyle } from "styled-components";

const Defaults = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Lato:300,400&display=optional");

:root {
    --font-primary: none;
    --font-secondary: none;
    --font-nav: Lato;

    --color-primary: none;
    --color-secondary: none;
    --color-tertiary: none;
    --color-white: #fcfcfc;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

*, *::before, *::after { 
    padding: 0; margin: 0; box-sizing: inherit; font-family: inherit; 
}

body {
    position: relative;
    isolation: isolate;
    overflow-x: hidden;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: black;
    cursor: none;
}
`;

export default Defaults;
