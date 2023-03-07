import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarStudent from '../../../Components/SideBarStudent';
import AddLeaveRequest from '../../../Components/StudentComponent/AddLeaveRequest';

const LeaveRequest = () => {
  return (
    <Row>
      {' '}
      <Col lg={2} md={2} className="pd-l parentcontainer">
        <SideBarStudent />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavbarR />
        <AddLeaveRequest />
      </Col>
    </Row>
  );
};

export default LeaveRequest;
