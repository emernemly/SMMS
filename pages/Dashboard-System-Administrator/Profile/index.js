import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../Redux/Action/UserActions';
const Profile = () => {
  const dispatch = useDispatch();
  const downloadPDF = () => {
    const input = document.getElementById('pdf-element');
    html2canvas(document.body, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('Profile.pdf');
    });
  };
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const user = useSelector((state) => state.UserRedcuer.user);
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

                <p>{user && user.FirstName}</p>
              </div>
            </Col>

            <Col md={4}>
              <div className="profilContent">
                <b>Middel Name:</b>
                <p>{user && user.MiddelName}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b>Last Name:</b>
                <p>{user && user.LastName}</p>
              </div>
            </Col>
            <hr></hr>
            <Col md={4}>
              <div className="profilContent">
                <b>Gender:</b>
                <p>{user && user.Gender}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Date of Birth:</b>
                <p>{user && user.Birth}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Email:</b>
                <p>{user && user.Email}</p>
              </div>
            </Col>
            <hr></hr>
            <Col md={4}>
              <div className="profilContent">
                <b> Phone Number:</b>
                <p>{user && user.PhoneNumber}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Street:</b>
                <p>{user && user.Street}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> City:</b>
                <p>{user && user.City}</p>
              </div>
            </Col>
            <hr></hr>
            <Col md={4}>
              <div className="profilContent">
                <b> Zip/Postal Code:</b>
                <p>{user && user.Zip}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Country:</b>
                <p>{user && user.Country}</p>
              </div>
            </Col>

            <h2>Information Account </h2>
            <hr></hr>
            <Col md={4}>
              <div className="profilContent">
                <b> User Name:</b>
                <p>{user && user.userName}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="profilContent">
                <b> Password:</b>
                <input type="password" disabled value={user && user.password} />
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
