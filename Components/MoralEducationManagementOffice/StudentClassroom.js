import React, { useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import DeductionScore from '../ModelBox/DeductionScore';
import Cancelling from '../ModelBox/Cancelling';
import AddPoint from './AddPoint';
const StudentClassroom = () => {
  const student = [
    {
      StudentNumber: '1',
      FirstName: 'Aro',
      MiddelName: 'Aro',
      LastName: 'Aro',
      DateOfBirth: '01/07/2000',
      levelOfStudy: '8eme',
      class: '8eme',
      Street: '95 rue 409',
      City: 'tunis',
      Zip: '2009',
      UserName: 'emernemly',
      Gender: 'Male',
      GraduationSchool: 'Preparatory School',
      GraduationScore: '500',
      score: 300,
    },
    {
      StudentNumber: '2',
      FirstName: 'ali',
      MiddelName: 'ali',
      LastName: 'ali',
      DateOfBirth: '01/07/2000',
      levelOfStudy: '8eme',
      class: '8eme',
      Street: '95 rue 409',
      City: 'tunis',
      Zip: '2009',
      UserName: 'emernemly',
      Gender: 'Male',
      GraduationSchool: 'Preparatory School',
      GraduationScore: '500',
      score: 100,
    },
    {
      StudentNumber: '3',
      FirstName: 'ibrahim',
      MiddelName: 'ibrahim',
      LastName: 'ibrahim',
      DateOfBirth: '01/07/2000',
      levelOfStudy: '8eme',
      class: '8eme',
      Street: '95 rue 409',
      City: 'tunis',
      Zip: '2009',
      UserName: 'emernemly',
      Gender: 'Male',
      GraduationSchool: 'Preparatory School',
      GraduationScore: '500',
      score: 50,
    },
    {
      StudentNumber: '4',
      FirstName: 'emer',
      MiddelName: 'emer',
      LastName: 'emer',
      DateOfBirth: '01/07/2000',
      levelOfStudy: '8eme',
      class: '8eme',
      Street: '95 rue 409',
      City: 'tunis',
      Zip: '2009',
      UserName: 'emernemly',
      Gender: 'Male',
      GraduationSchool: 'Preparatory School',
      GraduationScore: '500',
      score: 150,
    },
  ];
  const [search, setsearch] = useState('');
  const downloadPDF = () => {
    const input = document.getElementById('pdf-element');
    html2canvas(input).then((canvas) => {
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
      pdf.save('Student.pdf');
    });
  };
  const componentRef = useRef();
  return (
    <Row>
      {' '}
      <Col lg={12} className="dashboardContent">
        <section className="tableDashboard" ref={componentRef}>
          <div className="titleDashboard">
            <h3>Student</h3>
            <input
              type="search"
              placeholder="search Student"
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
                <th>Student number</th>

                <th>Name</th>

                <th>Gender</th>
                <th>Graduation school</th>
                <th>Moral Education Score</th>
                <th>Setting</th>
              </tr>{' '}
            </thead>
            <tbody>
              {student
                .filter((el) =>
                  el.FirstName.toUpperCase().includes(search.toUpperCase())
                )
                .map((student, i) => {
                  return (
                    <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                      <td>{student.StudentNumber}</td>

                      <td>{student.FirstName}</td>
                      <td>{student.Gender}</td>
                      <td>{student.GraduationSchool}</td>
                      <td>{student.score}</td>
                      <td>
                        <AddPoint />
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
    </Row>
  );
};

export default StudentClassroom;
