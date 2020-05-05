import React from "react";
import Navigation from "../components/Navigation/Navigation";

const Layout = () => {
  return (
    <React.Fragment>
      <Navigation />

      <main className="container">
        <div>Componentes Hijos</div>
      </main>
    </React.Fragment>
  );
};

export default Layout;
