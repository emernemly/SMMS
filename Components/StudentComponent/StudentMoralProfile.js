import React, { useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import { GetOwnScore } from '../../Redux/Action/ScoreAdding';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
const StudentMoralProfile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const id = router.query.StudentMoralProfileId;
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
    <Row id="pdf-element">
      {' '}
      <Col lg={12} className="dashboardContent">
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
              trigger={() => <button className="dashboard-btn">Print </button>}
              content={() => componentRef.current}
            />{' '}
          </div>
        </section>{' '}
      </Col>
    </Row>
  );
};

export default StudentMoralProfile;
