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

import { NavLink as NavLinkRouter } from "react-router-dom";

const Navigation = () => {
  let toolbarMenu = null;
  toolbarMenu = (
    <Nav navbar>
      <NavItem>
        <NavLink tag={NavLinkRouter} exact to="/members">
          Matches
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={NavLinkRouter} exact to="/lists">
          Lists
        </NavLink>
      </NavItem>
    </Nav>
  );

  return (
    <React.Fragment>
      <Navbar
        className="navbar navbar-expand-md navbar-dark bg-primary"
        light
        expand="md"
      >
        <NavbarBrand tag={NavLinkRouter} exact to="/">
          FindYourMatch.com
        </NavbarBrand>
        <NavbarToggler></NavbarToggler>
        <Collapse navbar>{toolbarMenu}</Collapse>
        {"userInfoArea"}
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
