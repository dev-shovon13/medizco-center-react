import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo.png'
import userAvatar from '../../images/avatar.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" className="border-bottom">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/home">
                            <img
                                src={logo}
                                width="130"
                                height="40"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/services">Services</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/team">Doctors</Nav.Link>
                            <NavDropdown title="More" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/about">About us</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/review">Patient Review</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={NavLink} to="/blogs">Blogs</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {
                                user.displayName || user.email ?
                                    <div className="d-flex align-items-center justify-content-center">
                                        {user.photoURL ?
                                            <img src={user.photoURL} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />
                                            :
                                            <img src={userAvatar} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />}
                                        <span className="fw-bold text-dark">{user.displayName}</span>
                                        <Button className="btn btn-danger ms-2 btn-sm" onClick={logOut}>Logout</Button>
                                    </div>
                                    :
                                    <div className="d-flex justify-content-center">
                                        <NavLink to="/login">
                                            <Button variant="outline-primary" className="me-3 mb-2 mb-lg-0"><FontAwesomeIcon icon={faFingerprint} className="me-2" />Login</Button>
                                        </NavLink>
                                        <NavLink to="/signup">
                                            <Button variant="primary"><FontAwesomeIcon icon={faSignInAlt} className="me-2" />Signup</Button>
                                        </NavLink>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;