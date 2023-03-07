import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarStudent from '../../../Components/SideBarStudent';
import NavbarStudent from '../../../Components/StudentComponent/NavbarStudent';
import StudentMoralProfile from '../../../Components/StudentComponent/StudentMoralProfile';

const StudentMoralProfileId = () => {
  return (
    <Row>
      {' '}
      <Col lg={2} md={2} className="pd-l parentcontainer">
        <SideBarStudent />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavbarR />
        <StudentMoralProfile />
      </Col>
    </Row>
  );
};

export default StudentMoralProfileId;
