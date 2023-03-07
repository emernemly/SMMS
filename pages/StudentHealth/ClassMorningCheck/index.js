import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DetailsRegistration from '../../../Components/ClassMorningCheckCopmonent/DetailsRegistration';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';

const index = () => {
  return (
    <Row>
      {' '}
      <Col lg={2} md={2} className="sidebarcontainer pd-l parentcontainer">
        <SideBarSA />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavbarR />
        <DetailsRegistration />
      </Col>
    </Row>
  );
};

export default index;
