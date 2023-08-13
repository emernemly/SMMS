import React, { useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import StudentMoralEducation from '../../../Components/MoralEducationManagementOffice/StudentMoralEducation';
import Hoc from '../../../Components/HOC/Hoc';
const MoralEducationScores = () => {
  return (
    <Hoc inRole={['see Molar Education history']}>
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

export default MoralEducationScores;
