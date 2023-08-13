import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarStudent from '../../../Components/SideBarStudent';
import StudentResult from '../../../Components/StudentComponent/StudentResult';
import NavBarStudent from '../../../Components/NavBarStudent';

const MoralEducationResult = () => {
  return (
    <Row>
      {' '}
      <Col lg={2} md={2} className="pd-l parentcontainer">
        <SideBarStudent />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavBarStudent />
        <StudentResult />
      </Col>
    </Row>
  );
};

export default MoralEducationResult;
