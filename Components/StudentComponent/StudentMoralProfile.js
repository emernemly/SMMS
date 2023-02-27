import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
const StudentMoralProfile = () => {
  const downloadPDF = () => {
    const input = document.getElementById('pdf-element');
    html2canvas(input).then((canvas) => {
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
    <Row id="pdf-element">
      {' '}
      <Col lg={12} className="dashboardContent">
        <section className="Profile formInput" ref={componentRef}>
          <Row>
            <h2>Personal Information</h2>

            <hr></hr>
            <Col md={4}>
              <div className="profilContent ">
                <b>Student Number:</b>
                <p>2</p>
              </div>
            </Col>

            <Col md={4}>
              <div className="profilContent">
                <b>Student:</b>
                <p>emer</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b>semester:</b>
                <p>semester1</p>
              </div>
            </Col>
            <hr></hr>
            <Col md={4}>
              <div className="profilContent">
                <b>Level:</b>
                <p>8eme annee </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Class:</b>
                <p>8eme annee B </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> EventTime:</b>
                <p>2020-09-08 17:42:17 </p>
              </div>
            </Col>
            <hr></hr>
            <Col md={4}>
              <div className="profilContent">
                <b> Status:</b>
                <p>deduction</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Points:</b>
                <p>3</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Class:</b>
                <p>7eme annee B</p>
              </div>
            </Col>

            <hr></hr>
          </Row>
          <div className="All-btn btn-profil">
            <button className="" onClick={downloadPDF}>
              Download PDF
            </button>
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

export default StudentMoralProfile;
