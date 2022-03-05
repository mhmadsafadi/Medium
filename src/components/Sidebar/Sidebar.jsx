import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-lg-column flex-row flex-nowrap align-items-center sticky-top">
      <Navbar.Brand href="#" className="p-2">
        <i className="bi bi-medium" />
      </Navbar.Brand>

      <Nav className="m-auto flex-lg-column flex-row text-center align-items-center" as="ul">
        <Nav.Item as="li">
          <Nav.Link>
            <i className="bi bi-house-door" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>
            <i className="bi bi-bell" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>
            <i className="bi bi-bookmarks" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>
            <i className="bi bi-file-text" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>
            <i className="bi bi-pencil-square" />
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Dropdown>
        <Dropdown.Toggle drop="none" className="p-2">
          <i className="bi-person-circle" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="shadow">
          <Dropdown.Header>M. Al Safadi</Dropdown.Header>
          <Dropdown.Item as="button">Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as="button">Log out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Sidebar;
