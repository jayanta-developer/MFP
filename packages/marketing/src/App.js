import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import Pricing from "./Components/Pricing";
import Landing from "./Components/Landing";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
};
export default App;
