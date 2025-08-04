import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const mount = (el) => {
  const root = ReactDOM.createRoot(el);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

//for development
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing_root");

  if (devRoot) {
    mount(devRoot);
  }
}

//for producatioin
export { mount };
