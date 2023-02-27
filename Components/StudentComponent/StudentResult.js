import React, { useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import Link from 'next/link';

const StudentResult = () => {
  const EducationScores = [
    {
      semester: 'semester1',
      Level: '8eme annee',
      Class: '8eme annee B',
      student: 'ali',
      studentNumber: 2,

      eventTime: '2020-09-08 17:42:17',
      PointElements: 'hygene refus de netoyer',
      Details: 'refuse',
      points: 3,
      Note: 'avertir',
      register: '',
      status: 'waiting',
      statusRev: 'deduction',
    },
    {
      semester: 'semester1',
      Level: '8eme annee',
      Class: '8eme annee B',
      student: 'ali',
      studentNumber: 15,
      eventTime: '2020-09-08 17:42:17',
      PointElements: 'hygene refus de netoyer',
      Details: 'refuse',
      points: 3,
      Note: 'avertir',
      register: '',
      status: 'approves',
      statusRev: 'Cancelling',
    },
    {
      semester: 'semester1',
      Level: '8eme annee',
      Class: '8eme annee B',
      student: 'ali',
      studentNumber: 20,
      eventTime: '2020-09-08 17:42:17',
      PointElements: 'hygene refus de netoyer',
      Details: 'refuse',
      points: 3,
      Note: 'avertir',
      register: '',
      status: 'approves',
      statusRev: 'deduction',
    },
    {
      semester: 'semester1',
      Level: '8eme annee',
      Class: '8eme annee B',
      student: 'ali',
      studentNumber: 7,
      eventTime: '2020-09-08 17:42:17',
      PointElements: 'hygene refus de netoyer',
      Details: 'refuse',
      points: 3,
      Note: 'avertir',
      register: '',
      statusRev: 'Cancelling',
      status: 'rejects',
    },
  ];
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

                <th>semester</th>

                <th>Level</th>
                <th>Class</th>
                <th>eventTime</th>
                <th>status</th>
                <th>points</th>

                <th>Reviews</th>
              </tr>{' '}
            </thead>
            <tbody>
              {EducationScores.filter((el) =>
                el.student.toUpperCase().includes(search.toUpperCase())
              ).map((Scores, i) => {
                return (
                  <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                    <td>{Scores.studentNumber}</td>
                    <td>{Scores.student}</td>
                    <td>{Scores.semester}</td>
                    <td>{Scores.Level}</td>
                    <td>{Scores.Class}</td>
                    <td>{Scores.eventTime}</td>

                    <td>{Scores.statusRev}</td>
                    <td>{Scores.points}</td>
                    <td>
                      <Link href="/StudentParent/MoralEducationResult/StudentMoralProfileId">
                        <button className="bg-primary btn-Setting">See</button>
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
