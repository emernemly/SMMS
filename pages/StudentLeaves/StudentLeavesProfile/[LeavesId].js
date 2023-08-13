import React, { useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import SideBarSA from '../../../Components/SideBarSA';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import Hoc from '../../../Components/HOC/Hoc';
import { getOwnLeaves } from '../../../Redux/Action/LeavesAction';
const LeavesId = () => {
  const router = useRouter();
  const id = router.query.LeavesId;
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
    id && dispatch(getOwnLeaves(id));
  }, [id]);
  const OwnLeaves = useSelector((state) => state.LeavesReducer.OwnLeaves);
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
              <h2>Leave Request Information</h2>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent ">
                  <b>student number :</b>
                  <p>{OwnLeaves.studentNumber}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>student:</b>
                  <p>{OwnLeaves.student}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>class:</b>
                  <p>{OwnLeaves.class}</p>
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b> class name :</b>
                  <p>{OwnLeaves.className}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> reason:</b>
                  <p>{OwnLeaves.reason}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b> Leave date :</b>
                  <p>{OwnLeaves.LeaveDate}</p>
                </div>
              </Col>{' '}
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b> status:</b>
                  <p>{OwnLeaves.status}</p>
                </div>
              </Col>{' '}
              <hr></hr>
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

export default LeavesId;
