import React, { useEffect, useState } from 'react';
import {
  MdOutlineAppRegistration,
  MdOutlineSystemUpdateAlt,
} from 'react-icons/md';
import { RiShieldUserLine } from 'react-icons/ri';
import { GiTeacher } from 'react-icons/gi';
import { GrTableAdd } from 'react-icons/gr';
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

const SideBarSA = () => {
  const router = useRouter();
  const [open, setopen] = useState(false);
  const [path, setpath] = useState(null);
  const [MoralDrop, setMoralDrop] = useState(false);
  const [healthDrop, sethealthDrop] = useState(false);
  useEffect(() => {
    setpath(router.pathname);
    console.log(router.pathname);
  }, [router.pathname]);
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
          <Link href="/Dashboard-System-Administrator/Registration">
            <li
              className={
                path
                  ? path === '/Dashboard-System-Administrator/Registration' &&
                    `activeSideBare`
                  : ''
              }
            >
              <MdOutlineAppRegistration />
              Registration
            </li>
          </Link>
          <div className="dropdown">
            <a>
              {' '}
              <li onClick={() => setopen(!open)}>
                <HiOutlineUserGroup /> User Management <MdKeyboardArrowDown />{' '}
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
          <Link href="/Dashboard-System-Administrator/Head-Teacher">
            <li
              className={
                path
                  ? path === '/Dashboard-System-Administrator/Head-Teacher' &&
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
                  ? path === '/Dashboard-System-Administrator/Teacher' &&
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
                  ? path === '/Dashboard-System-Administrator/Student' &&
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
          <Link href="/Dashboard-System-Administrator/Class/ClassesTimeTable">
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
          </Link>
          <div className="dropdown">
            <a>
              {' '}
              <li onClick={() => setMoralDrop(!MoralDrop)}>
                <FiActivity /> Moral Education Scores <MdKeyboardArrowDown />{' '}
              </li>{' '}
            </a>

            <ul className={`drop ${MoralDrop && 'dropOpne'}`}>
              {' '}
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
              </Link>{' '}
              <Link href="/Head-Teacher">
                <li
                  className={
                    path === '/Head-Teacher' ? `activeSideBare mr` : 'mr'
                  }
                >
                  Class Moral Education
                </li>{' '}
              </Link>{' '}
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
              </Link>{' '}
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
              </Link>{' '}
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
              </Link>{' '}
            </ul>
          </div>
          <Link href="/StudentLeaves">
            <li
              className={
                path ? path === '/StudentLeaves' && `activeSideBare` : ''
              }
            >
              <AiOutlineLogout /> Students Leaves
            </li>{' '}
          </Link>
          <Link href="/StudentAttendanceReport">
            <li
              className={
                path
                  ? path === '/StudentAttendanceReport' && `activeSideBare`
                  : ''
              }
            >
              <MdOutlinePeopleAlt /> Attendance Report
            </li>{' '}
          </Link>
          <Link href="/StudentActivities">
            <li
              className={
                path ? path === '/StudentActivities' && `activeSideBare` : ''
              }
            >
              <RxActivityLog /> Students Activities
            </li>{' '}
          </Link>
          <div className="dropdown">
            <a>
              {' '}
              <li onClick={() => sethealthDrop(!healthDrop)}>
                <CgFileAdd /> Students health <MdKeyboardArrowDown />{' '}
              </li>{' '}
            </a>

            <ul className={`drop ${healthDrop && 'dropOpne'}`}>
              {' '}
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
              </Link>{' '}
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
              </Link>{' '}
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
          <Link href="/Dashboard-System-Administrator/Traffic-website">
            <li>
              <SiGoogleanalytics /> Trafic Website
            </li>{' '}
          </Link>
        </ul>
      </aside>
    </div>
  );
};

export default SideBarSA;
