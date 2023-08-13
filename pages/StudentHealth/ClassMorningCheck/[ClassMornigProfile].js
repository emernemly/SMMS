import React, { useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getOwnClassMorningCheck } from '../../../Redux/Action/ClassMorningCheckAction';
import SideBarSA from '../../../Components/SideBarSA';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import Hoc from '../../../Components/HOC/Hoc';
const ClassMornigProfile = () => {
  const router = useRouter();
  const id = router.query.ClassMornigProfile;
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
    console.log(id);
    id && dispatch(getOwnClassMorningCheck(id));
  }, [id]);
  const OwnClassMorningCheck = useSelector(
    (state) => state.ClassMorninfCheckReducer.OwnClassMorningCheck
  );
  return (
    <Hoc inRole={['Class Morning check']}>
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
                  <b> Id :</b>
                  <p>{OwnClassMorningCheck.id}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>semester:</b>
                  <p>{OwnClassMorningCheck.semester}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>class:</b>
                  <p>{OwnClassMorningCheck.Class}</p>
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b> class name :</b>
                  <p>{OwnClassMorningCheck.className}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> student:</b>
                  <p>{OwnClassMorningCheck.student}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> age:</b>
                  <p>{OwnClassMorningCheck.age}</p>
                </div>
              </Col>{' '}
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b> Temperature:</b>
                  <p>{OwnClassMorningCheck.Temperature}</p>
                </div>
              </Col>{' '}
              <Col md={4}>
                <div className="profilContent">
                  <b> principal :</b>
                  <p>{OwnClassMorningCheck.principal}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> consultation:</b>
                  <p>{OwnClassMorningCheck.consultation}</p>
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b> Adresse:</b>
                  <p>{OwnClassMorningCheck.Adresse}</p>
                </div>
              </Col>{' '}
              <Col md={4}>
                <div className="profilContent">
                  <b> telephone:</b>
                  <p>{OwnClassMorningCheck.telephone}</p>
                </div>
              </Col>{' '}
              <Col md={4}>
                <div className="profilContent">
                  <b> recorder:</b>
                  <p>{OwnClassMorningCheck.recorder}</p>
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

export default ClassMornigProfile;
