import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbarcomponent = () => {
  const [path, setpath] = useState(null);
  const router = useRouter();
  console.log(router.pathname);
  useEffect(() => {
    setpath(router.pathname);
    console.log(path);
  }, [router.pathname]);
  return (
    <Navbar bg="light" expand="lg" className="Navbarcomponent">
      <Container>
        {' '}
        <Link href="http://localhost:3000">
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
            </Link>{' '}
            <Link
              href="/Login-Head-Teacher"
              className={`navbar__button ${
                path ? path === '/Login-Head-Teacher' && 'activeNav' : ''
              }`}
            >
              Head Teacher
            </Link>
            <Link
              href="/Login-Teacher"
              className={`navbar__button ${
                path ? path === '/Login-Teacher' && 'activeNav' : ''
              }`}
            >
              Teacher
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarcomponent;
