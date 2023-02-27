import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const Profile = () => {
  const downloadPDF = () => {
    const input = document.getElementById('pdf-element');
    html2canvas(document.body, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('Profile.pdf');
    });
  };
  return (
    <Row id="pdf-element">
      {' '}
      <Col lg={2} md={2} className="sidebarcontainer pd-l parentcontainer">
        <SideBarSA />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavbarR />
        <section className="Profile formInput">
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
                <b> Email:</b>
                <p>nemlyemer@gmail.com</p>
              </div>
            </Col>
            <hr></hr>
            <Col md={4}>
              <div className="profilContent">
                <b> Phone Number:</b>
                <p>+21623974784</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Street:</b>
                <p>95 exemple rue exemple</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> City:</b>
                <p>tunis</p>
              </div>
            </Col>
            <hr></hr>
            <Col md={4}>
              <div className="profilContent">
                <b> Zip/Postal Code:</b>
                <p>2009</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Country:</b>
                <p>tunisia</p>
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
          <button onClick={downloadPDF}>Download PDF</button>
        </section>{' '}
      </Col>
    </Row>
  );
};

export default Profile;
