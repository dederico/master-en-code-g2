import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import logo from './svg/logo.svg'

import { Link } from 'react-router-dom'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>

            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" margin-left="35%"> <Link to="/"><img src={logo} alt="perros" width="80px" margin-left="40%" /> </Link></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/products">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/cart">Cart</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/profile">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login">Login / Register</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default Header;

