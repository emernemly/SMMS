import React, { useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import Link from 'next/link';

import AddActivities from './ModelBox/AddActivities';
import EditActivities from './ModelBox/EditActivities';
import SideBarSA from './SideBarSA';
import NavbarR from './RegistrationComponente/NavbarR';
const StudentActivities = () => {
  const Activities = [
    {
      id: 1,
      studnetName: 'student1',
      class: '8eme annee',
      className: '8eme annee b',
      activitie: 'sport',
      date: '23/12/2023 to 30/12/2023',
    },
    {
      id: 1,
      studnetName: 'student1',
      class: '8eme annee',
      className: '8eme annee b',
      activitie: 'sport',
      date: '23/12/2023 to 30/12/2023',
    },
    {
      id: 1,
      studnetName: 'student1',
      class: '8eme annee',
      className: '8eme annee b',
      activitie: 'sport',
      date: '23/12/2023 to 30/12/2023',
    },
    {
      id: 1,
      studnetName: 'student1',
      class: '8eme annee',
      className: '8eme annee b',
      activitie: 'sport',
      date: '23/12/2023 to 30/12/2023',
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
      <Col lg={2} md={2} className="pd-l parentcontainer">
        <SideBarSA />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavbarR />
        <section className="tableDashboard" ref={componentRef}>
          <div className="titleDashboard">
            <h3>Student Activities</h3>
            <input
              type="search"
              placeholder="Search Student "
              onChange={(e) => setsearch(e.target.value)}
            />
            <div className="All-btn">
              <button onClick={downloadPDF}>Download PDF</button>
              <AddActivities />
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

                <th>class</th>

                <th>class name</th>
                <th>activitie</th>
                <th> date</th>
                <th>setting</th>
              </tr>{' '}
            </thead>
            <tbody>
              {Activities.filter((el) =>
                el.studnetName.toUpperCase().includes(search.toUpperCase())
              ).map((Leaverapport, i) => {
                return (
                  <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                    <td>{Leaverapport.id}</td>
                    <td>{Leaverapport.studnetName}</td>
                    <td>{Leaverapport.class}</td>
                    <td>{Leaverapport.className}</td>
                    <td>{Leaverapport.activitie}</td>
                    <td>{Leaverapport.date}</td>
                    <td>
                      <Link href="/StudentActivities/ActivitiesProfile">
                        <button className="bg-primary btn-Setting">See</button>
                      </Link>
                      <EditActivities />
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
  );
};

export default StudentActivities;
