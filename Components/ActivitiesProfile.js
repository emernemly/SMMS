import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import SideBarSA from './SideBarSA';
import NavbarR from './RegistrationComponente/NavbarR';
import Hoc from './HOC/Hoc';
const ActivitiesProfile = () => {
  const downloadPDF = () => {
    const input = document.getElementById('pdf-element');
    html2canvas(document.body, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(
        imgData,
        'PNG',
        0,
        0,
        pdf.internal.pageSize.width,
        pdf.internal.pageSize.height
      );
      pdf.save('Profile.pdf');
    });
  };
  const componentRef = useRef();
  return (
    <Hoc inRole={['admin', 'headTeacher', 'teacher']}>
      <Row id="pdf-element">
        {' '}
        <Col lg={2} md={2} className="sidebarcontainer pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <section className="Profile formInput" ref={componentRef}>
            <Row>
              <h2>Activitie Information</h2>

              <hr></hr>
              <Col md={4}>
                <div className="profilContent ">
                  <b>student number :</b>
                  <p>1</p>
                </div>
              </Col>

              <Col md={4}>
                <div className="profilContent">
                  <b>student:</b>
                  <p>Student1</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>Last Name:</b>
                  <p>emer</p>
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b>class:</b>
                  <p>8eme annee </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> class name :</b>
                  <p>8eme annee b </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> activitie:</b>
                  <p>sport</p>
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b> date:</b>
                  <p>23/12/2023 to 30/12/2023 </p>
                </div>
              </Col>
            </Row>
            <div className="All-btn btn-profil">
              <button className="" onClick={downloadPDF}>
                Download PDF
              </button>
              <ReactToPrint
                trigger={() => (
                  <button className="dashboard-btn">Print </button>
                )}
                content={() => componentRef.current}
              />{' '}
            </div>
          </section>{' '}
        </Col>
      </Row>
    </Hoc>
  );
};

export default ActivitiesProfile;
