import React, { useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import SideBarSA from '../../../Components/SideBarSA';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getOwnHeterogeneity } from '../../../Redux/Action/HeterogeneityAction';
import Hoc from '../../../Components/HOC/Hoc';
const StudentHeterogeneityProfile = () => {
  const dispatch = useDispatch();
  const Router = useRouter();
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
  const id = Router.query.StudentHeterogeneityProfile;
  useEffect(() => {
    dispatch(getOwnHeterogeneity(id));
  }, [id]);
  const OwnHeterogeneity = useSelector(
    (state) => state.HeterogeneityReducer.OwnHeterogeneity
  );
  return (
    <Hoc inRole={['Student Heterogeneity']}>
      <Row id="pdf-element">
        {' '}
        <Col lg={2} md={2} className="sidebarcontainer pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <section className="Profile formInput" ref={componentRef}>
            <Row>
              <h2>Student Heterogeneity Information</h2>

              <hr></hr>
              <Col md={4}>
                <div className="profilContent ">
                  <b>student number :</b>
                  <p>{OwnHeterogeneity.studentNumber}</p>
                </div>
              </Col>

              <Col md={4}>
                <div className="profilContent">
                  <b>student:</b>
                  <p>{OwnHeterogeneity.student}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>class:</b>
                  <p>{OwnHeterogeneity.class}</p>
                </div>
              </Col>
              <hr></hr>

              <Col md={4}>
                <div className="profilContent">
                  <b> class name :</b>
                  <p>{OwnHeterogeneity.className}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Heterogeneity:</b>
                  <p>{OwnHeterogeneity.Heterogeneity}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Situation Details:</b>
                  <p>{OwnHeterogeneity.SituationDetails}</p>
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b> Recorder:</b>
                  <p>ali diop </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Time Registration :</b>
                  <p>{OwnHeterogeneity.TimeRegistration}</p>
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

export default StudentHeterogeneityProfile;
