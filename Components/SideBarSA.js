import React, { useEffect, useState } from 'react';
import {
  MdOutlineAppRegistration,
  MdOutlineSystemUpdateAlt,
} from 'react-icons/md';
import { RiShieldUserLine } from 'react-icons/ri';
import { GiTeacher } from 'react-icons/gi';
import { FiUsers, FiActivity, FiUser } from 'react-icons/fi';
import { MdKeyboardArrowDown, MdOutlinePeopleAlt } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { SiGoogleclassroom, SiGoogleanalytics } from 'react-icons/si';
import { RxActivityLog } from 'react-icons/rx';
import { CgFileAdd } from 'react-icons/cg';
import { TbDatabaseExport } from 'react-icons/tb';
import { AiOutlineDashboard, AiOutlineLogout } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/Action/UserActions';
import { getRoleByName } from '../Redux/Action/RolesAction';

const SideBarSA = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const [path, setpath] = useState(null);
  const [MoralDrop, setMoralDrop] = useState(false);
  const [healthDrop, sethealthDrop] = useState(false);
  useEffect(() => {
    setpath(router.pathname);
    console.log(router.pathname);
  }, [router.pathname]);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const user = useSelector((state) => state.UserRedcuer.user);
  useEffect(() => {
    user && dispatch(getRoleByName(user.Role));
  }, [user]);
  const Permissions = useSelector((state) => state.RolesReducer.checkRole);

  return (
    <div className="sidebarAll">
      {' '}
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
          {Permissions &&
            Permissions[0].Permissions.map((el) => el.value).some(
              (role) => role.toUpperCase() === 'User Registration'.toUpperCase()
            ) && (
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
            )}
          {Permissions &&
            Permissions[0].Permissions.map((el) => el.value).some(
              (role) => role.toUpperCase() === 'User Management'.toUpperCase()
            ) && (
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
                        path ===
                        '/Dashboard-System-Administrator/User-Management/Permissions'
                          ? `activeSideBare mr`
                          : 'mr'
                      }
                    >
                      Permissions
                    </li>{' '}
                  </Link>{' '}
                  <Link href="/Dashboard-System-Administrator/User-Management/Role">
                    <li
                      className={
                        path ===
                        '/Dashboard-System-Administrator/User-Management/Role'
                          ? `activeSideBare mr`
                          : 'mr'
                      }
                    >
                      Role
                    </li>{' '}
                  </Link>{' '}
                </ul>
              </div>
            )}
          {Permissions &&
            Permissions[0].Permissions.map((el) => el.value).some(
              (role) =>
                role.toUpperCase() === 'see All Head-teacher'.toUpperCase()
            ) && (
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
            )}
          {Permissions &&
            Permissions[0].Permissions.map((el) => el.value).some(
              (role) => role.toUpperCase() === 'see All teacher'.toUpperCase()
            ) && (
              <Link href="/Dashboard-System-Administrator/Teacher">
                <li
                  className={
                    path
                      ? path === '/Dashboard-System-Administrator/Teacher' &&
                        `activeSideBare`
                      : ''
                  }
                >
                  <GiTeacher /> Teacher
                </li>
              </Link>
            )}
          {Permissions &&
            Permissions[0].Permissions.map((el) => el.value).some(
              (role) => role.toUpperCase() === 'see All student'.toUpperCase()
            ) && (
              <Link href="/Dashboard-System-Administrator/Student">
                <li
                  className={
                    path
                      ? path === '/Dashboard-System-Administrator/Student' &&
                        `activeSideBare`
                      : ''
                  }
                >
                  <FiUsers /> <p>Students</p>
                </li>
              </Link>
            )}
          {Permissions &&
            Permissions[0].Permissions.map((el) => el.value).some(
              (role) => role.toUpperCase() === 'class schedules'.toUpperCase()
            ) && (
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
            )}
          {/*  <Link href="/Dashboard-System-Administrator/Class/ClassesTimeTable">
            <li
              className={
                path
                  ? path ===
                      '/Dashboard-System-Administrator/Class/ClassesTimeTable' &&
                    `activeSideBare`
                  : ''
              }
            >
              <GrTableAdd /> Classes Time Table
            </li>{' '}
          </Link> */}
          <div className="dropdown">
            <a>
              {' '}
              <li onClick={() => setMoralDrop(!MoralDrop)}>
                <FiActivity /> Moral Education Scores <MdKeyboardArrowDown />{' '}
              </li>{' '}
            </a>

            <ul className={`drop ${MoralDrop && 'dropOpne'}`}>
              {' '}
              {Permissions &&
                Permissions[0].Permissions.map((el) => el.value).some(
                  (role) =>
                    role.toUpperCase() ===
                    'Students Moral Education'.toUpperCase()
                ) && (
                  <Link href="/Moral-Education-Management-Office">
                    <li
                      className={
                        path === '/Moral-Education-Management-Office'
                          ? `mr activeSideBare`
                          : 'mr'
                      }
                    >
                      Students Moral Education
                    </li>{' '}
                  </Link>
                )}
              {Permissions &&
                Permissions[0].Permissions.map((el) => el.value).some(
                  (role) =>
                    role.toUpperCase() === 'Class Moral Education'.toUpperCase()
                ) && (
                  <Link href="/Head-Teacher">
                    <li
                      className={
                        path === '/Head-Teacher' ? `activeSideBare mr` : 'mr'
                      }
                    >
                      Class Moral Education
                    </li>{' '}
                  </Link>
                )}
              {Permissions &&
                Permissions[0].Permissions.map((el) => el.value).some(
                  (role) =>
                    role.toUpperCase() ===
                    'Reviews Moral Education'.toUpperCase()
                ) && (
                  <Link href="/Head-Teacher/Reviews">
                    <li
                      className={
                        path === '/Head-Teacher/Reviews'
                          ? `activeSideBare mr`
                          : 'mr'
                      }
                    >
                      Reviews
                    </li>{' '}
                  </Link>
                )}
              {Permissions &&
                Permissions[0].Permissions.map((el) => el.value).some(
                  (role) =>
                    role.toUpperCase() ===
                    'see Molar Education history'.toUpperCase()
                ) && (
                  <Link href="/Dashboard-System-Administrator/Moral-Education-Scores">
                    <li
                      className={
                        path ===
                        '/Dashboard-System-Administrator/Moral-Education-Scores'
                          ? `activeSideBare mr`
                          : 'mr'
                      }
                    >
                      Moral Score History
                    </li>{' '}
                  </Link>
                )}
              {Permissions &&
                Permissions[0].Permissions.map((el) => el.value).some(
                  (role) =>
                    role.toUpperCase() ===
                    'see score recorded data statistics'.toUpperCase()
                ) && (
                  <Link href="/Dashboard-System-Administrator/Score-Recorded-Data-Statistics">
                    <li
                      className={
                        path ===
                        '/Dashboard-System-Administrator/Score-Recorded-Data-Statistics'
                          ? `activeSideBare mr`
                          : 'mr'
                      }
                    >
                      Score Recorded Data Statistics
                    </li>{' '}
                  </Link>
                )}
            </ul>
          </div>
          {Permissions &&
            Permissions[0].Permissions.map((el) => el.value).some(
              (role) => role.toUpperCase() === 'Leave Request'.toUpperCase()
            ) && (
              <Link href="/StudentLeaves">
                <li
                  className={
                    path ? path === '/StudentLeaves' && `activeSideBare` : ''
                  }
                >
                  <AiOutlineLogout /> Students Leaves
                </li>{' '}
              </Link>
            )}
          {/*           <Link href="/StudentAttendanceReport">
            <li
              clkassName={
                path
                  ? path === '/StudentAttendanceReport' && `activeSideBare`
                  : ''
              }
            >
              <MdOutlinePeopleAlt /> Attendance Report
            </li>{' '}
          </Link> */}
          {Permissions &&
            Permissions[0].Permissions.map((el) => el.value).some(
              (role) =>
                role.toUpperCase() === 'Student Activities'.toUpperCase()
            ) && (
              <Link href="/StudentActivities">
                <li
                  className={
                    path
                      ? path === '/StudentActivities' && `activeSideBare`
                      : ''
                  }
                >
                  <RxActivityLog /> Students Activities
                </li>{' '}
              </Link>
            )}
          <div className="dropdown">
            {Permissions &&
              Permissions[0].Permissions.map((el) => el.value).some(
                (role) =>
                  role.toUpperCase() === 'Student Activities'.toUpperCase()
              ) && (
                <a>
                  <li onClick={() => sethealthDrop(!healthDrop)}>
                    <CgFileAdd /> Students health <MdKeyboardArrowDown />{' '}
                  </li>{' '}
                </a>
              )}

            <ul className={`drop ${healthDrop && 'dropOpne'}`}>
              {' '}
              {Permissions &&
                Permissions[0].Permissions.map((el) => el.value).some(
                  (role) =>
                    role.toUpperCase() === 'Student Heterogeneity'.toUpperCase()
                ) && (
                  <Link href="/StudentHealth/StudentHeterogeneity">
                    <li
                      className={
                        path === '/StudentHealth/StudentHeterogeneity'
                          ? `activeSideBare mr`
                          : 'mr'
                      }
                    >
                      Students Heterogeneity
                    </li>{' '}
                  </Link>
                )}
              {Permissions &&
                Permissions[0].Permissions.map((el) => el.value).some(
                  (role) =>
                    role.toUpperCase() === 'Class Morning check'.toUpperCase()
                ) && (
                  <Link href="/StudentHealth/ClassMorningCheck">
                    <li
                      className={
                        path === '/StudentHealth/ClassMorningCheck'
                          ? `activeSideBare mr`
                          : 'mr'
                      }
                    >
                      Class morning check details
                    </li>{' '}
                  </Link>
                )}{' '}
              {/* {user &&
                ['admin', 'headTeacher', 'teacher'].some(
                  (role) => role === user.Role
                ) && (
                  <Link href="/StudentHealth/ClassMorningCheck/ClassMoringHistory">
                    <li
                      className={
                        path ===
                        '/StudentHealth/ClassMorningCheck/ClassMoringHistory'
                          ? `activeSideBare mr`
                          : 'mr'
                      }
                    >
                      Class morning check details history
                    </li>{' '}
                  </Link>
                )} */}
            </ul>
          </div>
          {Permissions &&
            Permissions[0].Permissions.map((el) => el.value).some(
              (role) => role.toUpperCase() === 'Backup mangement'.toUpperCase()
            ) && (
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
              </Link>
            )}
          {Permissions &&
            Permissions[0].Permissions.map((el) => el.value).some(
              (role) => role.toUpperCase() === 'systeme logs'.toUpperCase()
            ) && (
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
            )}
          {/* {user && ['admin'].some((role) => role === user.Role) && (
            <Link href="/Dashboard-System-Administrator/Traffic-website">
              <li>
                <SiGoogleanalytics /> Trafic Website
              </li>{' '}
            </Link>
          )} */}
        </ul>
      </aside>
    </div>
  );
};

export default SideBarSA;
