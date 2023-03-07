import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StudentsAttendanceReport from '../../Components/AttendanceReportComponent/StudentAttendanceReport';
import StudentSelect from '../../Components/AttendanceReportComponent/StudentSelect';

import NavbarR from '../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../Components/SideBarSA';

const StudentAttendanceReport = () => {
  return (
    <Row>
      {' '}
      <Col lg={2} md={2} className="sidebarcontainer pd-l parentcontainer">
        <SideBarSA />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavbarR />
        <StudentSelect />
        <StudentsAttendanceReport />
      </Col>
    </Row>
  );
};

export default StudentAttendanceReport;
