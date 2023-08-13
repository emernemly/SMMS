import React, { useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../../Components/SideBarSA';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { OwnStudents } from '../../../../Redux/Action/StudentAction';
import Hoc from '../../../../Components/HOC/Hoc';
const StudentProfile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
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
  const id = router.query.StudentPofile;
  useEffect(() => {
    dispatch(OwnStudents(id));
  }, [id]);
  const student = useSelector((state) => state.StudentReducer.OwnStudent);
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
                  <p>{student.FirstName}</p>
                </div>
              </Col>

              <Col md={4}>
                <div className="profilContent">
                  <b>Middel Name:</b>
                  <p>{student.middelName}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>Last Name:</b>
                  <p>{student.lastName}</p>
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b>Gender:</b>
                  <p>{student.Gender}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Date of Birth:</b>
                  <p>{student.Birth}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Graduation School:</b>
                  <p>{student.GraduationSchool}</p>
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b>Graduation total score:</b>
                  <p>{student.GraduationScore}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Student Number:</b>
                  <p>{student.StudentNumber}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Street:</b>
                  <p>{student.Street}</p>
                </div>
              </Col>
              <hr></hr>

              <Col md={4}>
                <div className="profilContent">
                  <b> City:</b>
                  <p>{student.City}</p>
                </div>
              </Col>

              <Col md={4}>
                <div className="profilContent">
                  <b> Zip/Postal Code:</b>
                  <p>{student.Zip}</p>
                </div>
              </Col>
              <h2>parent Information</h2>

              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b> Father Name:</b>
                  <p>{student.FatherName}</p>
                </div>
              </Col>

              <Col md={4}>
                <div className="profilContent">
                  <b> Father Phone:</b>
                  <p>{student.FatherPhone}</p>
                </div>
              </Col>
              <hr></hr>
              <h2>Class Information</h2>
              <Col md={4}>
                <div className="profilContent">
                  <b> Class:</b>
                  <p>{student.class}</p>
                </div>
              </Col>

              <Col md={4}>
                <div className="profilContent">
                  <b> Class Name:</b>
                  <p>{student.className}</p>
                </div>
              </Col>
              <hr></hr>
              <h2>Information Account </h2>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b> User Name:</b>
                  <p>{student.userName}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Password:</b>
                  <input type="password" disabled value={student.password} />
                </div>
              </Col>
            </Row>
            <div className="btn-profil">
              <button onClick={downloadPDF}>Download PDF</button>
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

export default StudentProfile;
