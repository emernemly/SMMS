import React, { useEffect, useState } from 'react';
import {
  MdOutlineAppRegistration,
  MdOutlineSystemUpdateAlt,
} from 'react-icons/md';
import { RiShieldUserLine } from 'react-icons/ri';
import { GiTeacher } from 'react-icons/gi';
import { FiUsers, FiActivity } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
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
import { useRouter } from 'next/router';

const SideBarSA = () => {
  const router = useRouter();
  const [open, setopen] = useState(false);
  const [path, setpath] = useState(null);
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
          <Link href="/Dashboard-System-Administrator/Moral-Education-Scores">
            {' '}
            <li>
              <FiActivity /> Moral Education Scores
            </li>{' '}
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
