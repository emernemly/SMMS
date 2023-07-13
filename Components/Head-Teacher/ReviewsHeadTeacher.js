import React, { useState, useRef, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import Approve from './Approve';
import Refused from './Refused';
import SideBarSA from '../SideBarSA';
import NavbarR from '../RegistrationComponente/NavbarR';
import Hoc from '../HOC/Hoc';
import { useDispatch, useSelector } from 'react-redux';
import { getDeductionScores } from '../../Redux/Action/DeductionScores';
const ReviewsHeadTeacher = () => {
  const dispatch = useDispatch();
  const [search, setsearch] = useState('');
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
      pdf.save('EducationScores.pdf');
    });
  };
  const componentRef = useRef();
  useEffect(() => {
    dispatch(getDeductionScores());
  }, []);
  const EducationScores = useSelector((state) => state.ScoreReducer.score);
  return (
    <Hoc inRole={['admin', 'headTeacher']}>
      <Row>
        <Col lg={2} md={2} className="sidebarcontainer pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <section className="tableDashboard" ref={componentRef}>
            <div className="titleDashboard">
              <h3>Moral Education Scores</h3>
              <input
                type="search"
                placeholder="Search Student "
                onChange={(e) => setsearch(e.target.value)}
              />
              <div className="All-btn">
                <button onClick={downloadPDF}>Download PDF</button>
                <ReactToPrint
                  trigger={() => (
                    <button className="dashboard-btn">Print </button>
                  )}
                  content={() => componentRef.current}
                />{' '}
              </div>
            </div>
            <table className="Table" id="pdf-element">
              <thead>
                {' '}
                <tr>
                  <th>student number</th>
                  <th>student</th>
                  <th>semester</th>
                  <th>Level</th>
                  <th>Class</th>
                  <th>eventTime</th>
                  <th>Details</th>
                  <th>Note</th>
                  <th>status</th>

                  <th>points</th>
                  <th>Reviews</th>
                </tr>{' '}
              </thead>
              <tbody>
                {EducationScores.filter((el) =>
                  el.Student.toUpperCase().includes(search.toUpperCase())
                )
                  .reverse()
                  .map((Scores, i) => {
                    return (
                      <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                        <td>{Scores.studentNumber}</td>
                        <td>{Scores.Student}</td>
                        <td>{Scores.semester}</td>
                        <td>{Scores.ClassLevel}</td>
                        <td>{Scores.Class}</td>
                        <td>{Scores.EventTime}</td>
                        <td>{Scores.Details}</td>
                        <td>{Scores.Notetn}</td>
                        <td>{Scores.status}</td>

                        <td>{Scores.points}</td>
                        <td>
                          <Approve />
                          <Refused />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </section>
        </Col>
      </Row>
    </Hoc>
  );
};

export default ReviewsHeadTeacher;
