import React, { useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import Link from 'next/link';
import NavbarStudent from '../../../Components/StudentComponent/NavbarStudent';
import SideBarStudent from '../../../Components/SideBarStudent';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
const AttendanceReport = () => {
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
      pdf.save('Profile.pdf');
    });
  };
  const componentRef = useRef();
  const AttendanceReport = [
    { Month: 'juli 2020', TotalAttendance: 1, TotalPresent: 1, TotalAbsent: 0 },
    { Month: 'juli 2020', TotalAttendance: 1, TotalPresent: 1, TotalAbsent: 0 },
    { Month: 'juli 2020', TotalAttendance: 1, TotalPresent: 1, TotalAbsent: 0 },
    { Month: 'juli 2020', TotalAttendance: 1, TotalPresent: 1, TotalAbsent: 0 },
  ];
  return (
    <Row>
      {' '}
      <Col lg={2} md={2} className="pd-l parentcontainer">
        <SideBarStudent />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavbarR />
        <section className="tableDashboard" ref={componentRef}>
          <div className="titleDashboard">
            <h3>Attendance Report</h3>
            <input
              type="search"
              placeholder="Search Month "
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
                <th>Month</th>
                <th>Total Attendance</th>

                <th>Total Present</th>

                <th>Total Absent</th>
              </tr>{' '}
            </thead>
            <tbody>
              {AttendanceReport.filter((el) =>
                el.Month.toUpperCase().includes(search.toUpperCase())
              ).map((Scores, i) => {
                return (
                  <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                    <td>{Scores.Month}</td>
                    <td>{Scores.TotalAttendance}</td>
                    <td>{Scores.TotalPresent}</td>
                    <td>{Scores.TotalAbsent}</td>
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

export default AttendanceReport;
