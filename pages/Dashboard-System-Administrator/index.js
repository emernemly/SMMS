import React, { useState } from 'react';
import SideBarSA from '../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../Components/RegistrationComponente/NavbarR';
import BarChart from '../../Components/BarChart';
import LineChart from '../../Components/LineChart';
import Donat from '../../Components/Donat';
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
  const [inRole, setinRole] = useState(['admin', 'headTeacher', 'teacher']);
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
              <Col md={3}>
                {' '}
                <Link href="/Dashboard-System-Administrator">
                  <div className="cordonnee clrown">
                    {' '}
                    <Image
                      src="/Role/admin.png"
                      alt="admin"
                      width={50}
                      height={50}
                    />{' '}
                    <b>Administrator</b>
                  </div>
                </Link>
              </Col>
              <Col md={3}>
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
              <Col md={3}>
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
              <Col md={3}>
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
              <Col md={6}>
                <div className="lineBar">
                  {' '}
                  <LineChart />
                </div>
              </Col>
              <Col md={6}>
                {' '}
                <div className="tableLogDashboard">
                  <div className="titleDashboard">
                    <h3>System Logs</h3>
                    <input
                      type="search"
                      placeholder="search Backup"
                      onChange={(e) => setsearch(e.target.value)}
                    />
                  </div>
                  <table className="Table">
                    <thead>
                      {' '}
                      <tr>
                        <th>last user</th>
                        <th>access time</th>
                        <th>operation</th>
                      </tr>{' '}
                    </thead>
                    <tbody>
                      {log
                        .filter((el) =>
                          el.user.toUpperCase().includes(search.toUpperCase())
                        )
                        .map((log, i) => {
                          return (
                            <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                              <td>{log.user}</td>
                              <td>{log.time}</td>
                              <td>{log.operation}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </Col>{' '}
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
