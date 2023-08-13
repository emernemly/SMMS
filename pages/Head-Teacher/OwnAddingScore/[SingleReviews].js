import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBarSA from '../../../Components/SideBarSA';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import Hoc from '../../../Components/HOC/Hoc';
import { GetOwnScore } from '../../../Redux/Action/ScoreAdding';
const SingleReviews = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const id = router.query.SingleReviews;
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
    id && dispatch(GetOwnScore(id));
  }, [id]);
  const Ownclass = useSelector((state) => state.ScoreAddingReducer.OwnScore);

  return (
    <Hoc inRole={['Reviews Moral Education']}>
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
                  <b>student number:</b>
                  {Ownclass.UserId && <p>{Ownclass.UserId.studentNumber}</p>}
                </div>
              </Col>

              <Col md={4}>
                <div className="profilContent">
                  <b>student:</b>
                  {Ownclass.UserId && <p>{Ownclass.UserId.FirstName}</p>}
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>Class:</b>
                  {Ownclass.UserId && <p>{Ownclass.UserId.class}</p>}
                </div>
              </Col>
              <hr></hr>
              <Col md={4}>
                <div className="profilContent">
                  <b>Note:</b>
                  <p>{Ownclass.note}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="profilContent">
                  <b>points:</b>
                  <p>{Ownclass.score}</p>
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

export default SingleReviews;
