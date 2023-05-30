import React, { useEffect, useRef, useState } from 'react';
import { Badge, Offcanvas } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { FiLogIn } from 'react-icons/fi';
import { AiFillSetting } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { BsList } from 'react-icons/bs';
import {
  MdOutlineAppRegistration,
  MdOutlineSystemUpdateAlt,
} from 'react-icons/md';
import { RiShieldUserLine } from 'react-icons/ri';
import { GiTeacher } from 'react-icons/gi';
import { FiUsers, FiActivity } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import {
  SiGoogleclassroom,
  SiGoogleanalytics,
  SiOpenaccess,
} from 'react-icons/si';
import { CgToolbox } from 'react-icons/cg';
import { TbDatabaseExport } from 'react-icons/tb';
import { AiOutlineDashboard } from 'react-icons/ai';
import Link from 'next/link';
const NavbarR = () => {
  const [show, setShow] = useState(false);
  const [drop, setdrop] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [open, setopen] = useState(false);
  const [path, setpath] = useState(null);
  const router = useRouter();

  const searchRef = useRef();
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
    console.log(router.pathname);
  }, [router.pathname]);

  return (
    <div className="Navbarcomponent navbarDashboard">
      <div className="responsive">
        {' '}
        <BsList onClick={handleShow} />
      </div>
      <div className="nav-rigthSide">
        {' '}
        {/*   <div className="icons-nav dropdownNav">
          <IoMdNotifications />
          <Badge pill bg="danger">
            0
          </Badge>
        </div>{' '} */}
        {/*  */}
        <div className="icons-nav dropdownNav">
          <div
            className="compte"
            onClick={() => {
              setdrop(!drop);
            }}
          >
            <FaUserCircle /> <p> User Name</p>
            <MdKeyboardArrowDown />
          </div>
          <div
            className={`compte-contant ${drop && 'dropNav'}`}
            ref={searchRef}
          >
            <Link href="/Dashboard-System-Administrator/Profile">
              {' '}
              <RiContactsFill /> <p>Profile</p>
            </Link>
            <Link href="/Dashboard-System-Administrator/Setting-Admin">
              {' '}
              <AiFillSetting /> <p>Setting</p>
            </Link>
            <Link href="/">
              {' '}
              <FiLogIn />
              <p>Log Out</p>
            </Link>
          </div>
        </div>
        <>
          <Offcanvas
            style={{ backgroundColor: '#1c2c4e' }}
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title style={{ color: 'white' }}>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="userName">
                <h3>
                  <b>SMMS</b>
                </h3>
              </div>
              <aside className="sidebar">
                <ul>
                  <Link href="/Dashboard-System-Administrator">
                    <li
                      className={
                        path
                          ? path === '/Dashboard-System-Administrator' &&
                            `activeSideBare`
                          : ''
                      }
                    >
                      <AiOutlineDashboard />
                      Dashboard
                    </li>{' '}
                  </Link>
                  <Link href="/Dashboard-System-Administrator/Registration">
                    <li
                      className={
                        path
                          ? path ===
                              '/Dashboard-System-Administrator/Registration' &&
                            `activeSideBare`
                          : ''
                      }
                    >
                      <MdOutlineAppRegistration />
                      Registration
                    </li>
                  </Link>
                  <Link href="/Dashboard-System-Administrator/Head-Teacher">
                    <li
                      className={
                        path
                          ? path ===
                              '/Dashboard-System-Administrator/Head-Teacher' &&
                            `activeSideBare`
                          : ''
                      }
                    >
                      <RiShieldUserLine /> Head Teacher
                    </li>
                  </Link>
                  <Link href="/Dashboard-System-Administrator/Teacher">
                    <li
                      className={
                        path
                          ? path ===
                              '/Dashboard-System-Administrator/Teacher' &&
                            `activeSideBare`
                          : ''
                      }
                    >
                      <GiTeacher /> Teacher
                    </li>
                  </Link>
                  <Link href="/Dashboard-System-Administrator/Student">
                    <li
                      className={
                        path
                          ? path ===
                              '/Dashboard-System-Administrator/Student' &&
                            `activeSideBare`
                          : ''
                      }
                    >
                      <FiUsers /> <p>Students</p>
                    </li>
                  </Link>
                  <Link href="/Dashboard-System-Administrator/Class">
                    <li
                      className={
                        path
                          ? path === '/Dashboard-System-Administrator/Class' &&
                            `activeSideBare`
                          : ''
                      }
                    >
                      <SiGoogleclassroom /> classes
                    </li>{' '}
                  </Link>
                  <div className="dropdown">
                    <a>
                      {' '}
                      <li onClick={() => setopen(!open)}>
                        <HiOutlineUserGroup /> User Management{' '}
                        <MdKeyboardArrowDown />{' '}
                      </li>{' '}
                    </a>

                    <ul className={`drop ${open && 'dropOpne'}`}>
                      {' '}
                      <Link href="/Dashboard-System-Administrator/User-Management/Permissions">
                        <li
                          className={
                            path
                              ? path ===
                                  '/Dashboard-System-Administrator/User-Management/Permissions' &&
                                `activeSideBare`
                              : ''
                          }
                        >
                          <SiOpenaccess /> Permissions
                        </li>{' '}
                      </Link>{' '}
                      <Link href="/Dashboard-System-Administrator/User-Management/Role">
                        <li
                          className={
                            path
                              ? path ===
                                  '/Dashboard-System-Administrator/User-Management/Role' &&
                                `activeSideBare`
                              : ''
                          }
                        >
                          <CgToolbox /> Role
                        </li>{' '}
                      </Link>{' '}
                    </ul>
                  </div>
                  <Link href="/Dashboard-System-Administrator/BackUp">
                    <li
                      className={
                        path
                          ? path === '/Dashboard-System-Administrator/BackUp' &&
                            `activeSideBare`
                          : ''
                      }
                    >
                      <TbDatabaseExport /> Backup and Manage
                    </li>{' '}
                  </Link>{' '}
                  <Link href="/Dashboard-System-Administrator/Logs">
                    <li
                      className={
                        path
                          ? path === '/Dashboard-System-Administrator/Logs' &&
                            `activeSideBare`
                          : ''
                      }
                    >
                      <MdOutlineSystemUpdateAlt />
                      System Logs and User Activity
                    </li>{' '}
                  </Link>
                  <Link href="/Dashboard-System-Administrator/Moral-Education-Scores">
                    {' '}
                    <li>
                      <FiActivity /> Moral Education Scores
                    </li>{' '}
                  </Link>
                  <Link href="/Dashboard-System-Administrator/Traffic-website">
                    <li>
                      <SiGoogleanalytics /> Trafic Website
                    </li>{' '}
                  </Link>
                </ul>
              </aside>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </div>
    </div>
  );
};

export default NavbarR;
