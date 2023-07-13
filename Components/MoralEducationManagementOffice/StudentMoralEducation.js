import React, { useEffect, useRef, useState } from 'react';
import { Col } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getDeductionScores } from '../../Redux/Action/DeductionScores';
const StudentMoralEducation = () => {
  const dispatch = useDispatch();
  const router = useRouter();
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
              trigger={() => <button className="dashboard-btn">Print </button>}
              content={() => componentRef.current}
            />{' '}
          </div>
        </div>
        <table className="Table" id="pdf-element">
          <thead>
            {' '}
            <tr>
              <th>student</th>

              <th>semester</th>

              <th>Level</th>
              <th>Class</th>
              <th>eventTime</th>
              <th>Details</th>
              <th>points</th>
              {router.pathname !==
                '/Dashboard-System-Administrator/Score-Recorded-Data-Statistics' && (
                <th>status</th>
              )}
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
                    <td>{Scores.Student}</td>
                    <td>{Scores.semester}</td>
                    <td>{Scores.ClassLevel}</td>
                    <td>{Scores.Class}</td>
                    <td>{Scores.EventTime}</td>
                    <td>{Scores.Details}</td>
                    <td>{Scores.points}</td>
                    {router.pathname !==
                      '/Dashboard-System-Administrator/Score-Recorded-Data-Statistics' && (
                      <td>{Scores.reviews}</td>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </Col>
  );
};

export default StudentMoralEducation;
