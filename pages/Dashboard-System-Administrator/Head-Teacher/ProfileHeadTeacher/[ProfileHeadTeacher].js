import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../../Components/SideBarSA';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import Hoc from '../../../../Components/HOC/Hoc';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ownheadTeacher } from '../../../../Redux/Action/HeadTeacherAction';
const ProfileHeadTeacher = () => {
  const router = useRouter();
  const _id = router.query.ProfileHeadTeacher;
  const dispatch = useDispatch();
  useEffect(() => {
    _id && dispatch(ownheadTeacher(_id));
  }, []);
  const OwnheadTeacher = useSelector(
    (state) => state.HeadTeacherReducer.UserHeadTeacher
  );
  console.log(OwnheadTeacher);
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
    <Hoc inRole={['setting student']}>
      <Row id="pdf-element">
        {' '}
        <Col lg={2} md={2} className="sidebarcontainer pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <section className="Profile formInput" ref={componentRef}>
            <Row>
              <h2>Personal Information</h2>

              <hr></hr>
              <Col md={4}>
                <div className="profilContent ">
                  <b>First Name:</b>
                  <p>{OwnheadTeacher.FirstName}</p>
                </div>
              </Col>

              <Col md={4}>
                <div className="profilContent">
                  <b>Middel Name:</b>
                  <p>{OwnheadTeacher.MiddelName}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>Last Name:</b>
                  <p>{OwnheadTeacher.LastName}</p>
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b>Gender:</b>
                  <p>{OwnheadTeacher.Gender}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Date of Birth:</b>
                  <p>{OwnheadTeacher.Birth}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Educational Institution:</b>
                  <p>{OwnheadTeacher.Educational}</p>
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b> Subject Teacher:</b>
                  <p>{OwnheadTeacher.Subject}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Class Name:</b>
                  <p>{OwnheadTeacher.className}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Class:</b>
                  <p>{OwnheadTeacher.Class}</p>
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b> City:</b>
                  <p>{OwnheadTeacher.City}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Zip:</b>
                  <p>{OwnheadTeacher.Zip}</p>
                </div>
              </Col>
              <hr></hr>
              <h2>Information Account </h2>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b> User Name:</b>
                  <p>{OwnheadTeacher.userName}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Password:</b>
                  <input
                    type="password"
                    disabled
                    value={`${OwnheadTeacher.password}`}
                  />
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

export default ProfileHeadTeacher;
