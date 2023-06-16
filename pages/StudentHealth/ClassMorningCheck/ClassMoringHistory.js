import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ClassSelect from '../../../Components/ClassMorningCheckCopmonent/ClassSelect';
import DetailsRegistration from '../../../Components/ClassMorningCheckCopmonent/DetailsRegistration';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';
import Hoc from '../../../Components/HOC/Hoc';

const ClassMoringHistory = () => {
  return (
    <Hoc inRole={['admin', 'headTeacher', 'teacher']}>
      <Row>
        {' '}
        <Col lg={2} md={2} className="sidebarcontainer pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <ClassSelect />
          <DetailsRegistration />
        </Col>
      </Row>
    </Hoc>
  );
};

export default ClassMoringHistory;
