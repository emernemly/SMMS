import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { AiFillSetting } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
const NavbarHeadTeacher = () => {
  const [path, setpath] = useState(null);
  const [drop, setdrop] = useState(false);
  const searchRef = useRef();
  const router = useRouter();
  useEffect(() => {
    const closeSearch = (e) => {
      if (!searchRef.current.contains(e.target)) {
        setdrop(false);
      }
    };
    document.addEventListener('mousedown', closeSearch);
    return () => {
      document.removeEventListener('mousedown', closeSearch);
    };
  }, []);
  useEffect(() => {
    setpath(router.pathname);
    console.log(path);
  }, [router.pathname]);
  return (
    <Navbar bg="light" expand="lg" className="Navbarcomponent">
      <Container>
        {' '}
        <Link href="http://localhost:3000/Head-Teacher">
          <h3>SMMS</h3>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {' '}
            <Link
              href="/Head-Teacher"
              className={`navbar__button ${
                path ? path === '/Head-Teacher' && 'activeNav' : ''
              }`}
            >
              Moral Education
            </Link>{' '}
            <Link
              href="/Head-Teacher/Reviews"
              className={`navbar__button ${
                path ? path === '/Head-Teacher/Reviews' && 'activeNav' : ''
              }`}
            >
              Reviews
            </Link>
            <div className="icons-nav dropdownNav">
              <div
                className="compte"
                onClick={() => {
                  setdrop(!drop);
                }}
              >
                <p> User Name</p>
                <MdKeyboardArrowDown />
              </div>
              <div
                className={`compte-contant ${drop && 'dropNav'}`}
                ref={searchRef}
              >
                <Link href="/Head-Teacher/Head-Teacher-Profile">
                  {' '}
                  <RiContactsFill /> <p>Profile</p>
                </Link>
                <Link href="/">
                  <FiLogIn />
                  <p>Log Out</p>
                </Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeadTeacher;
