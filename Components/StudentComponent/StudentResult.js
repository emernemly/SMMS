import React, { useState, useRef, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addingBystudents } from '../../Redux/Action/ScoreAdding';

const StudentResult = () => {
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
    dispatch(addingBystudents());
  }, []);
  const score = useSelector((state) => state.ScoreAddingReducer.moralScore);
  return (
    <Row>
      <Col lg={12} className="dashboardContent">
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
                <th>Class</th>
                <th>Note</th>
                <th>Reviews</th> <th>points</th>
                <th>Setting</th>
              </tr>{' '}
            </thead>
            <tbody>
              {score
                .filter((el) =>
                  el.reviews.toUpperCase().includes(search.toUpperCase())
                )
                .map((Scores, i) => {
                  return (
                    <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                      <td>{Scores.UserId.StudentNumber}</td>
                      <td>{Scores.UserId.FirstName}</td>

                      <td>{Scores.UserId.class}</td>

                      <td>{Scores.note}</td>
                      <td>{Scores.reviews}</td>

                      <td>{Scores.score}</td>
                      <td>
                        <Link
                          href={`/StudentParent/MoralEducationResult/StudentMoralProfileId/${Scores.id}`}
                        >
                          <button className="bg-primary btn-Setting">
                            See
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      </Col>
    </Row>
  );
};

export default StudentResult;
