import React, { useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import DeductionScore from '../../../Components/ModelBox/DeductionScore';
import Cancelling from '../../../Components/ModelBox/Cancelling';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
const MoralEducationScores = () => {
  const student = [
    {
      StudentNumber: '1',
      Name: 'Aro',
      Gender: 'Male',
      GraduationSchool: 'Preparatory School',
      GraduationScore: '500',
    },
    {
      StudentNumber: '2',
      Name: 'ali',
      Gender: 'Male',
      GraduationSchool: 'Preparatory School',
      GraduationScore: '500',
    },
    {
      StudentNumber: '3',
      Name: 'ibrahim',
      Gender: 'Male',
      GraduationSchool: 'Preparatory School',
      GraduationScore: '500',
    },
    {
      StudentNumber: '4',
      Name: 'emer',
      Gender: 'Male',
      GraduationSchool: 'Preparatory School',
      GraduationScore: '500',
    },
  ];
  const EducationScores = [
    {
      semester: 'semester1',
      Level: '8eme annee',
      Class: '8eme annee B',
      student: 'ali',
      eventTime: '2020-09-08 17:42:17',
      PointElements: 'hygene refus de netoyer',
      Details: 'refuse',
      points: 3,
      Note: 'avertir',
      register: '',
      status: 'waiting',
    },
    {
      semester: 'semester1',
      Level: '8eme annee',
      Class: '8eme annee B',
      student: 'ali',
      eventTime: '2020-09-08 17:42:17',
      PointElements: 'hygene refus de netoyer',
      Details: 'refuse',
      points: 3,
      Note: 'avertir',
      register: '',
      status: 'approves',
    },
    {
      semester: 'semester1',
      Level: '8eme annee',
      Class: '8eme annee B',
      student: 'ali',
      eventTime: '2020-09-08 17:42:17',
      PointElements: 'hygene refus de netoyer',
      Details: 'refuse',
      points: 3,
      Note: 'avertir',
      register: '',
      status: 'approves',
    },
    {
      semester: 'semester1',
      Level: '8eme annee',
      Class: '8eme annee B',
      student: 'ali',
      eventTime: '2020-09-08 17:42:17',
      PointElements: 'hygene refus de netoyer',
      Details: 'refuse',
      points: 3,
      Note: 'avertir',
      register: '',
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
    <>
      <Row>
        {' '}
        <Col lg={2} md={2} className="pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <Col lg={12} className="dashboardContent">
            <section className="tableDashboard">
              <div className="titleDashboard">
                <h3>Student</h3>
                <input
                  type="search"
                  placeholder="search Student"
                  onChange={(e) => setsearch(e.target.value)}
                />
              </div>
              <table className="Table">
                <thead>
                  {' '}
                  <tr>
                    <th>Student number</th>

                    <th>Name</th>

                    <th>Gender</th>
                    <th>Graduation school</th>
                    <th>Graduation total Score</th>
                    <th>Setting</th>
                  </tr>{' '}
                </thead>
                <tbody>
                  {student
                    .filter((el) =>
                      el.Name.toUpperCase().includes(search.toUpperCase())
                    )
                    .map((student, i) => {
                      return (
                        <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                          <td>{student.StudentNumber}</td>

                          <td>{student.Name}</td>
                          <td>{student.Gender}</td>
                          <td>{student.GraduationSchool}</td>
                          <td>{student.GraduationScore}</td>
                          <td>
                            <DeductionScore />

                            <Cancelling />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </section>
          </Col>

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
                    <th>student</th>

                    <th>semester</th>

                    <th>Level</th>
                    <th>Class</th>
                    <th>eventTime</th>
                    <th>Details</th>
                    <th>points</th>
                    <th>status</th>
                  </tr>{' '}
                </thead>
                <tbody>
                  {EducationScores.filter((el) =>
                    el.student.toUpperCase().includes(search.toUpperCase())
                  ).map((Scores, i) => {
                    return (
                      <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                        <td>{Scores.student}</td>
                        <td>{Scores.semester}</td>
                        <td>{Scores.Level}</td>
                        <td>{Scores.Class}</td>
                        <td>{Scores.eventTime}</td>
                        <td>{Scores.Details}</td>
                        <td>{Scores.points}</td>
                        <td>{Scores.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default MoralEducationScores;
