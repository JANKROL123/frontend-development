import React from "react";
import { useRoutes } from "react-router-dom";
import Add from "./componenets/Add";
import Div from "./componenets/Div";
import Mul from "./componenets/Mul";
import Sub from "./componenets/Sub";
import Calc from "./componenets/Calc";
function App() {
  const element = useRoutes([
    {path: "/", element: <Calc />},
    {path: "add", element: <Add />},
    {path: "div", element: <Div />},
    {path: "mul", element: <Mul />},
    {path: "sub", element: <Sub />}
  ]);
  return element;
}

export default App;
