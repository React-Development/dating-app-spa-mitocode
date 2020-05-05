import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Navigation = () => {
  return (
    <React.Fragment>
      <Navbar
        className="navbar navbar-expand-md navbar-dark bg-primary"
        light
        expand="md"
      >
        <NavbarBrand>FindYourMatch.com</NavbarBrand>
        <NavbarToggler></NavbarToggler>
        <Collapse navbar>{"toolbarMenu"}</Collapse>
        {"userInfoArea"}
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
