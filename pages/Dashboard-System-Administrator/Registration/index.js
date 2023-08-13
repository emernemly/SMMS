import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import Image from 'next/image';
import Link from 'next/link';
import SideBarSA from '../../../Components/SideBarSA';
import Hoc from '../../../Components/HOC/Hoc';
const Registration = () => {
  return (
    <Hoc inRole={['User Registration']}>
      <Row>
        {' '}
        <Col lg={2} md={2} className="pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <section>
            <Row className="Role container">
              <Col md={4}>
                <Link href="/Dashboard-System-Administrator/Registration/FormUser">
                  <div className="RegistrationSection">
                    <div className="role-img">
                      {' '}
                      <h2>Administrator</h2>
                      <Image
                        src="/Role/admin.png"
                        alt="admin"
                        width={50}
                        height={50}
                      />
                    </div>
                    <p> Number:10</p>
                  </div>
                </Link>
              </Col>
              <Col md={4}>
                <Link href="/Dashboard-System-Administrator/Registration/Head-Teacher">
                  <div className="RegistrationSection">
                    {' '}
                    <div className="role-img">
                      <h2>Head Teacher</h2>
                      <Image
                        src="/Role/class.png"
                        alt="admin"
                        width={50}
                        height={50}
                      />
                    </div>
                    <p> Number:10</p>
                  </div>
                </Link>
              </Col>
              <Col md={4}>
                <Link href="/Dashboard-System-Administrator/Registration/Teacher">
                  <div className="RegistrationSection">
                    {' '}
                    <div className="role-img">
                      {' '}
                      <h2>Teacher</h2>
                      <Image
                        src="/Role/teacher.png"
                        alt="admin"
                        width={50}
                        height={50}
                      />
                    </div>
                    <p> Number:10</p>
                  </div>
                </Link>
              </Col>
              <Col md={4}>
                <Link href="/Dashboard-System-Administrator/Registration/Students">
                  <div className="RegistrationSection">
                    {' '}
                    <div className="role-img">
                      <h2>Students</h2>
                      <Image
                        src="/Role/student.png"
                        alt="admin"
                        width={50}
                        height={50}
                      />
                    </div>
                    <p> Number:10</p>
                  </div>
                </Link>
              </Col>
              <Col md={4}>
                <Link href="/Dashboard-System-Administrator/Registration/Parent">
                  <div className="RegistrationSection">
                    {' '}
                    <div className="role-img">
                      <h2>Parents</h2>
                      <Image
                        src="/Role/parents.png"
                        alt="admin"
                        width={50}
                        height={50}
                      />
                    </div>
                    <p> Number:10</p>
                  </div>
                </Link>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </Hoc>
  );
};

export default Registration;
