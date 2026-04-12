import React, { useState } from "react";

import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

import "./MyNavbar.css";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu_icon.svg";

// Router
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar expand="lg" className="bg-transparent">

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto my-2 my-lg-0 ms-lg-4" navbar>
            <NavItem>
              <Link to="/" className="nav-link active rounded">
                Home
              </Link>
            </NavItem>
            {/* <NavItem>
              <NavLink href="#courses" className=" rounded">
                Courses
              </NavLink>
            </NavItem> */}
     
   
            {/* <NavItem>
              <NavLink href="#contact" className=" rounded">
                Contact
              </NavLink>
            </NavItem> */}

          </Nav>
        </Collapse>
      </Navbar>
      <hr />
    </Container>
  );
};

export default MyNavbar;
