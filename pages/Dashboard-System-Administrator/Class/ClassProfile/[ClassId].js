import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../../Components/SideBarSA';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getOwnClass } from '../../../../Redux/Action/ClassAction';
import { useDispatch, useSelector } from 'react-redux';
import Hoc from '../../../../Components/HOC/Hoc';
const ClassProfile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const id = router.query.ClassId;
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
  useEffect(() => {
    id && dispatch(getOwnClass(id));
  }, [id]);
  const Ownclass = useSelector((state) => state.ClassesReducer.OwnClass);
  console.log(id);
  return (
    <Hoc inRole={['admin', 'headTeacher']}>
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
                  <p>{Ownclass.Level}</p>
                </div>
              </Col>

              <Col md={4}>
                <div className="profilContent">
                  <b>Class:</b>
                  <p>{Ownclass.Class}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>the time of the event:</b>
                  <p>{Ownclass.timeEvent}</p>
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b>deserved:</b>
                  <p>{Ownclass.deserved}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>Details:</b>
                  <p>{Ownclass.Details}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>Noticed:</b>
                  <p>{Ownclass.Noticed}</p>
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b>recorder:</b>
                  <p>{Ownclass.recorder}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> time to record:</b>
                  <p>{Ownclass.timeRecord}</p>
                </div>
              </Col>
              <hr></hr>
            </Row>
            <div className="All-btn btn-profil">
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

export default ClassProfile;
