import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { App } from "./App";
import { createGlobalStyle } from "styled-components";

const container = document.getElementById("root")!;
const root = createRoot(container);

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul, ol {
    list-style-type: none;
  }

  a{
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:visited {
      color: inherit;
    }
    &:hover {
      opacity: 0.6;
    }
  }
`;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
