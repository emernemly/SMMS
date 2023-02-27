import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
const MoralEducationManagementOfficeProfile = () => {
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
    <Row id="pdf-element">
      {' '}
      <Col lg={12} className="dashboardContent">
        <section className="Profile formInput" ref={componentRef}>
          <Row>
            <h2>Personal Information</h2>

            <hr></hr>
            <Col md={4}>
              <div className="profilContent ">
                <b>First Name:</b>
                <p>emer</p>
              </div>
            </Col>

            <Col md={4}>
              <div className="profilContent">
                <b>Middel Name:</b>
                <p>emer</p>
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
                <b>Gender:</b>
                <p>Male</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Date of Birth:</b>
                <p>09/02/2023</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Educational Institution:</b>
                <p>school</p>
              </div>
            </Col>
            <hr></hr>
            <Col md={4}>
              <div className="profilContent">
                <b> Subject Teacher:</b>
                <p>English</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Class Name:</b>
                <p>7eme annee</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Class:</b>
                <p>7eme annee B</p>
              </div>
            </Col>
            <hr></hr>
            <Col md={4}>
              <div className="profilContent">
                <b> City:</b>
                <p>tunis</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Zip:</b>
                <p>2009</p>
              </div>
            </Col>
            <hr></hr>
            <h2>Information Account </h2>
            <hr></hr>
            <Col md={4}>
              <div className="profilContent">
                <b> User Name:</b>
                <p>Emer Nemly</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Password:</b>
                <input type="password" disabled value="emernemly" />
              </div>
            </Col>
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

export default MoralEducationManagementOfficeProfile;
