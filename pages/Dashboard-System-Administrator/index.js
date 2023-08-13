import React, { useState } from 'react';
import SideBarSA from '../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../Components/RegistrationComponente/NavbarR';
import BarChart from '../../Components/BarChart';
import LineChart from '../../Components/LineChart';
import Image from 'next/image';
import Link from 'next/link';
import Hoc from '../../Components/HOC/Hoc';

const DashboardSA = () => {
  const log = [
    { user: 'kilo', time: '2020-09-08 17:42:17	', operation: 'modifications' },
    { user: 'ali', time: '2020-09-08 17:42:17	', operation: 'modifications' },
    {
      user: 'ibrahim',
      time: '2020-09-08 17:42:17	',
      operation: 'modifications',
    },
    { user: 'emer', time: '2020-09-08 17:42:17	', operation: 'modifications' },
  ];
  const [search, setsearch] = useState('');
  const [inRole, setinRole] = useState([
    'User Registration',

    'User Management',

    'import basic student data',

    'setting Head-teacher',

    'see All Head-teacher',

    'setting teacher',

    'see All teacher',

    'setting student',

    'see All student',

    'class schedules',

    'Students Moral Education',

    'Class Moral Education',

    'Reviews Moral Education',

    'see Molar Education history',

    'see score recorded data statistics',

    'Leave Request',

    'Student Activities',

    'Student Heterogeneity',

    'Class Morning check',

    'Backup mangement',

    'systeme logs',
  ]);
  return (
    <Hoc inRole={inRole}>
      <Row>
        {' '}
        <Col lg={2} md={2} className="pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <div className="Dashboard">
            <Row>
              {' '}
              <Col md={4}>
                {' '}
                <Link href="/Dashboard-System-Administrator/Head-Teacher">
                  <div className="cordonnee clrtow">
                    {' '}
                    <Image
                      src="/Role/class.png"
                      alt="admin"
                      width={50}
                      height={50}
                    />{' '}
                    <b>Head Teacher</b>
                  </div>
                </Link>
              </Col>
              <Col md={4}>
                {' '}
                <Link href="/Dashboard-System-Administrator/Teacher">
                  <div className="cordonnee clrthree">
                    <Image
                      src="/Role/teacher.png"
                      alt="admin"
                      width={50}
                      height={50}
                    />{' '}
                    <b>Teacher</b>
                  </div>
                </Link>
              </Col>
              <Col md={4}>
                <Link href="/Dashboard-System-Administrator/Student">
                  <div className="cordonnee clrfour">
                    {' '}
                    <Image
                      src="/Role/student.png"
                      alt="admin"
                      width={50}
                      height={50}
                    />{' '}
                    <b>Students/parent</b>
                  </div>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="lineBar">
                  {' '}
                  <LineChart />
                </div>
              </Col>

              <Col md={12}>
                <div className="lineBar espace">
                  <BarChart />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Hoc>
  );
};

export default DashboardSA;
