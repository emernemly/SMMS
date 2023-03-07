import React, { useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../../Components/RegistrationComponente/NavbarR';
import SideBarStudent from '../../../../Components/SideBarStudent';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
const LeaveRequesthistory = () => {
  const StudentLeaves = [
    {
      Id: 1,
      StudentName: 'Student1',
      class: '8eme annee',
      className: '8eme annee b',
      reason: 'sick',
      leaveDate: '23/12/2023 to 30/12/2023',
      statue: 'unapproved',
    },
    {
      Id: 1,
      StudentName: 'Student1',
      class: '8eme annee',
      className: '8eme annna b',
      reason: 'sick',
      leaveDate: '23/12/2023 to 30/12/2023',
      statue: 'unapproved',
    },
    {
      Id: 1,
      StudentName: 'Student1',
      class: '8eme annee',
      className: '8eme annna b',
      reason: 'sick',
      leaveDate: '23/12/2023 to 30/12/2023',
      statue: 'unapproved',
    },
    {
      Id: 1,
      StudentName: 'Student1',
      class: '8eme annee',
      className: '8eme annna b',
      reason: 'sick',
      leaveDate: '23/12/2023 to 30/12/2023',
      statue: 'unapproved',
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
      {' '}
      <Col lg={2} md={2} className="pd-l parentcontainer">
        <SideBarStudent />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavbarR />
        <section className="tableDashboard" ref={componentRef}>
          <div className="titleDashboard">
            <h3>Leave Request History</h3>
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

                <th>class</th>

                <th>class name</th>
                <th>reason</th>
                <th>Leave date</th>
                <th>status</th>
              </tr>{' '}
            </thead>
            <tbody>
              {StudentLeaves.filter((el) =>
                el.StudentName.toUpperCase().includes(search.toUpperCase())
              ).map((Leaverapport, i) => {
                return (
                  <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                    <td>{Leaverapport.Id}</td>
                    <td>{Leaverapport.StudentName}</td>
                    <td>{Leaverapport.class}</td>
                    <td>{Leaverapport.className}</td>
                    <td>{Leaverapport.reason}</td>
                    <td>{Leaverapport.leaveDate}</td>
                    <td>{Leaverapport.statue}</td>
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

export default LeaveRequesthistory;
