import React, { useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import SideBarSA from './SideBarSA';
import NavbarR from './RegistrationComponente/NavbarR';
import Hoc from './HOC/Hoc';
import { useDispatch, useSelector } from 'react-redux';
import { getOwnActivities } from '../Redux/Action/ActivitiesAction';
import { useRouter } from 'next/router';
const ActivitiesProfile = () => {
  const router = useRouter();
  const id = router.query.ActivitiesProfile;
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
  const dispatch = useDispatch();

  useEffect(() => {
    id && dispatch(getOwnActivities(id));
  }, [id]);
  const Activitie = useSelector(
    (state) => state.ActivitiesReducer.OwnActivitien
  );
  return (
    <Hoc inRole={['Student Activities']}>
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
                  <p>{Activitie.studentNumber}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>student:</b>
                  <p>{Activitie.student}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>class:</b>
                  <p>{Activitie.class}</p>
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b> class name :</b>
                  <p>{Activitie.className}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> activitie:</b>
                  <p>{Activitie.activitie}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> start date:</b>
                  <p>{Activitie.startDate}</p>
                </div>
              </Col>{' '}
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b> end date:</b>
                  <p>{Activitie.endDate}</p>
                </div>
              </Col>{' '}
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
