import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../../Components/SideBarSA';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
const ClassProfile = () => {
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
    <Row>
      {' '}
      <Col lg={2} md={2} className="sidebarcontainer pd-l parentcontainer">
        <SideBarSA />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavbarR />
        <section className="Profile formInput" ref={componentRef}>
          <Row id="pdf-element">
            <h2>Personal Information</h2>

            <hr></hr>
            <Col md={4}>
              <div className="profilContent ">
                <b>Level:</b>
                <p>8eme annee</p>
              </div>
            </Col>

            <Col md={4}>
              <div className="profilContent">
                <b>Class:</b>
                <p>8eme annee A</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b>the time of the event:</b>
                <p>2020-09-08 17:42:17</p>
              </div>
            </Col>
            <hr></hr>
            <Col md={4}>
              <div className="profilContent">
                <b>deserved:</b>
                <p>1ere place</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b>Details:</b>
                <p>Activity sport</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b>Noticed:</b>
                <p></p>
              </div>
            </Col>
            <hr></hr>
            <Col md={4}>
              <div className="profilContent">
                <b>recorder:</b>
                <p>Ali diop</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> time to record:</b>
                <p>2020-09-08 17:42:17</p>
              </div>
            </Col>
            <hr></hr>
          </Row>
          <div className="All-btn btn-profil">
            <button onClick={downloadPDF}>Download PDF</button>
            <ReactToPrint
              trigger={() => <button className="dashboard-btn">Print </button>}
              content={() => componentRef.current}
            />{' '}
          </div>
        </section>{' '}
      </Col>
    </Row>
  );
};

export default ClassProfile;
