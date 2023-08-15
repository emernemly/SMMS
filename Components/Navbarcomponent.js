import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/Action/UserActions';
const Navbarcomponent = () => {
  const dispatch = useDispatch();
  const [path, setpath] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setpath(router.pathname);
  }, [router.pathname]);

  return (
    <Navbar bg="light" expand="lg" className="Navbarcomponent">
      <Container>
        {' '}
        <Link href="/">
          <h3>SMMS</h3>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {' '}
            <Link
              href="/Login-System-Adminstrator"
              className={`navbar__button ${
                path ? path === '/Login-System-Adminstrator' && 'activeNav' : ''
              }`}
            >
              System Administrator
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarcomponent;
