import React from "react";
import { Switch, Route, BrowserRouter, Router } from "react-router-dom";

//components
import Pricing from "./Components/Pricing";
import Landing from "./Components/Landing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/landing" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
