
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navs = (props) => { 

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);  

    return (
        <div className='navbar'>
          <Navbar color="faded" dark>
            <NavbarBrand href="/" className="mr-auto">Post Covid Worlwide Concert Tracker</NavbarBrand>
              <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                  <Nav navbar>
                    <NavItem>
                    <NavLink href="/AboutMe">About Me</NavLink>
                    </NavItem>
                    <NavItem>
                  <NavLink href="https://www.ticketmaster.com/">Ticket Master</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
    )
}
export default Navs