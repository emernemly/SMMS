import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarStudent from '../../../Components/SideBarStudent';
import AddLeaveRequest from '../../../Components/StudentComponent/AddLeaveRequest';
import NavBarStudent from '../../../Components/NavBarStudent';

const LeaveRequest = () => {
  return (
    <Row>
      {' '}
      <Col lg={2} md={2} className="pd-l parentcontainer">
        <SideBarStudent />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavBarStudent />
        <AddLeaveRequest />
      </Col>
    </Row>
  );
};

export default LeaveRequest;
