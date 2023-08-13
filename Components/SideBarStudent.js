import React, { useEffect, useState } from 'react';
import {
  MdOutlineAppRegistration,
  MdOutlineSystemUpdateAlt,
} from 'react-icons/md';
import { RiShieldUserLine } from 'react-icons/ri';

import { GrTableAdd } from 'react-icons/gr';

import { AiOutlineDashboard } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
const SideBarStudent = () => {
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
                  ? path === '/StudentParent/LeaveRequest' && `activeSideBare`
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
          <Link href="/StudentParent/ActivitiesStudent">
            <li
              className={
                path ? path === '/StudentActivities' && `activeSideBare` : ''
              }
            >
              <GrTableAdd /> Student Activities
            </li>{' '}
          </Link>
        </ul>
      </aside>
    </div>
  );
};

export default SideBarStudent;
