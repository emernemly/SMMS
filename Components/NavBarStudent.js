import React, { useEffect, useRef, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { FiLogIn } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { BsList } from 'react-icons/bs';
import { RiShieldUserLine } from 'react-icons/ri';

import { GrTableAdd } from 'react-icons/gr';

import { AiOutlineDashboard } from 'react-icons/ai';

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getStudent, logoutStudent } from '../Redux/Action/StudentAction';
const NavBarStudent = () => {
  const [show, setShow] = useState(false);
  const [drop, setdrop] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [open, setopen] = useState(false);
  const [path, setpath] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const searchRef = useRef();
  useEffect(() => {
    dispatch(getStudent());
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
  const handelLogout = () => dispatch(logoutStudent(router));
  const user = useSelector((state) => state.StudentReducer.OwnStudent);
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
            <FaUserCircle /> <p> {user && user.userName}</p>
            <MdKeyboardArrowDown />
          </div>
          <div
            className={`compte-contant ${drop && 'dropNav'}`}
            ref={searchRef}
          >
            <Link href="/StudentParent/StudentParentProfile">
              {' '}
              <RiContactsFill /> <p>Profile</p>
            </Link>
            {/*      <Link href="/Dashboard-System-Administrator/Setting-Admin">
              {' '}
              <AiFillSetting /> <p>Setting</p>
            </Link> */}
            <a onClick={handelLogout}>
              {' '}
              <FiLogIn />
              Log Out
            </a>
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
              <div className="sidebarAll">
                {' '}
                <div className="userName">
                  <h3>SMMS</h3>
                </div>
                <aside className="sidebar">
                  <ul>
                    <Link href="/StudentParent/MoralEducationResult">
                      <li
                        className={
                          path
                            ? path === '/StudentParent/MoralEducationResult' &&
                              `activeSideBare`
                            : ''
                        }
                      >
                        <AiOutlineDashboard />
                        Moral Education
                      </li>{' '}
                    </Link>
                    {/*         <Link href="/StudentParent/AttendanceReport">
            <li
              className={
                path
                  ? path === '/StudentParent/AttendanceReport' &&
                    `activeSideBare`
                  : ''
              }
            >
              <MdOutlineAppRegistration />
              Attendance Report
            </li>
          </Link> */}
                    <Link href="/StudentParent/LeaveRequest">
                      <li
                        className={
                          path
                            ? path === '/StudentParent/LeaveRequest' &&
                              `activeSideBare`
                            : ''
                        }
                      >
                        <RiShieldUserLine /> Leave Request
                      </li>
                    </Link>
                    <Link href="/StudentParent/LeaveRequest/LeaveRequesthistory">
                      <li
                        className={
                          path
                            ? path ===
                                '/StudentParent/LeaveRequest/LeaveRequesthistory' &&
                              `activeSideBare`
                            : ''
                        }
                      >
                        <RiShieldUserLine /> Leave Request History
                      </li>
                    </Link>

                    {/*           <Link href="/StudentParent/ClasseTableStudent">
            <li
              className={
                path
                  ? path === '/StudentParent/ClasseTableStudent' &&
                    `activeSideBare`
                  : ''
              }
            >
              <SiGoogleclassroom /> Classes Time Table
            </li>{' '}
          </Link> */}
                    <Link href="/StudentActivities">
                      <li
                        className={
                          path
                            ? path === '/StudentActivities' && `activeSideBare`
                            : ''
                        }
                      >
                        <GrTableAdd /> Student Activities
                      </li>{' '}
                    </Link>
                  </ul>
                </aside>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </div>
    </div>
  );
};

export default NavBarStudent;
