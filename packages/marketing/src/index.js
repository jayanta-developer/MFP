import React from "react";
import ReactDOM from "react-dom/client";

const mount = (el) => {
  const root = ReactDOM.createRoot(el);
  root.render(<h1>Marketing Page</h1>);
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
