import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ClassSelect from '../../../Components/ClassMorningCheckCopmonent/ClassSelect';
import DetailsRegistration from '../../../Components/ClassMorningCheckCopmonent/DetailsRegistration';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';

const ClassMoringHistory = () => {
  return (
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
  );
};

export default ClassMoringHistory;
