import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StudentMoralEducation from '../../../Components/MoralEducationManagementOffice/StudentMoralEducation';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';
import Hoc from '../../../Components/HOC/Hoc';

const ScoreRecordedDataStatistics = () => {
  return (
    <Hoc inRole={['see score recorded data statistics']}>
      <Row>
        {' '}
        <Col lg={2} md={2} className="pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <StudentMoralEducation />
        </Col>
      </Row>
    </Hoc>
  );
};

export default ScoreRecordedDataStatistics;
