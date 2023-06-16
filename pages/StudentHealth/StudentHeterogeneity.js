import React, { useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import Link from 'next/link';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import SideBarSA from '../../Components/SideBarSA';
import NavbarR from '../../Components/RegistrationComponente/NavbarR';
import AddHeterogeneity from '../../Components/ModelBox/AddHeterogeneity';
import EditHeterogeneity from '../../Components/ModelBox/EditHeterogeneity';
import Hoc from '../../Components/HOC/Hoc';
const StudentHeterogeneity = () => {
  const student = [
    {
      StudentNumber: '1',
      class: '8eme annee',
      className: '8eme annee b',

      studentName: 'student1',
      Heterogeneity: 'Bonne sante',
      SituationDetails: '',
      Recorder: 'ali diop',
      TimeRegistration: '23/12/2022 12:00',
    },
    {
      StudentNumber: '1',
      class: '8eme annee',
      className: '8eme annee b',

      studentName: 'student1',
      Heterogeneity: 'Bonne sante',
      SituationDetails: 'healthy and dynamic',
      Recorder: 'ali diop',
      TimeRegistration: '23/12/2022 12:00',
    },
    {
      StudentNumber: '1',
      class: '8eme annee',
      className: '8eme annee b',

      studentName: 'student1',
      Heterogeneity: 'Bonne sante',
      SituationDetails: '',
      Recorder: 'ali diop',
      TimeRegistration: '23/12/2022 12:00',
    },
    {
      StudentNumber: '1',
      class: '8eme annee',
      className: '8eme annee b',

      studentName: 'student1',
      Heterogeneity: 'Bonne sante',
      SituationDetails: '',
      Recorder: 'ali diop',
      TimeRegistration: '23/12/2022 12:00',
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
      pdf.save('Student.pdf');
    });
  };
  const componentRef = useRef();
  return (
    <Hoc inRole={['admin', 'headTeacher', 'teacher']}>
      <Row>
        {' '}
        <Col lg={2} md={2} className="pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <section className="tableDashboard" ref={componentRef}>
            <div className="titleDashboard">
              <h3>Student Heterogeneity</h3>
              <input
                type="search"
                placeholder="search Student"
                onChange={(e) => setsearch(e.target.value)}
              />
              <div className="All-btn">
                <button onClick={downloadPDF}>Download PDF</button>
                <AddHeterogeneity />
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

                  <th>class</th>

                  <th>class Name</th>
                  <th> student Name</th>
                  <th> Heterogeneity</th>
                  <th>Situation Details</th>
                  <th>Recorder</th>
                  <th>Time Registration</th>
                  <th>Setting</th>
                </tr>{' '}
              </thead>
              <tbody>
                {student
                  .filter((el) =>
                    el.studentName.toUpperCase().includes(search.toUpperCase())
                  )
                  .map((student, i) => {
                    return (
                      <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                        <td>{student.StudentNumber}</td>

                        <td>{student.class}</td>
                        <td>{student.className}</td>
                        <td>{student.studentName}</td>
                        <td>{student.Heterogeneity}</td>
                        <td>{student.SituationDetails}</td>
                        <td>{student.Recorder}</td>
                        <td>{student.TimeRegistration}</td>
                        <td>
                          <Link href="//StudentHealth/StudentHeterogeneityProfile">
                            <button className="bg-primary btn-Setting">
                              See
                            </button>
                          </Link>
                          <EditHeterogeneity />
                          <button className="bg-danger btn-Setting">
                            Delete
                          </button>{' '}
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

export default StudentHeterogeneity;
