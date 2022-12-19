import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Main from "./models/Main";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Main />}></Route>
      </Switch>
    </>
  );
};

export default Routes;
