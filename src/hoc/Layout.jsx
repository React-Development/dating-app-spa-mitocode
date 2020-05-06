import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Routes from "./Routes";

const Layout = () => {
  return (
    <React.Fragment>
      <Navigation />

      <main className="container">
        <Routes />
      </main>
    </React.Fragment>
  );
};

export default Layout;
