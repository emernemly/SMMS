import React, { useState, useRef } from 'react';
import SideBarSA from '../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import HeadTeacherModul from '../../../Components/ModelBox/HeadTeacherModul';
import Link from 'next/link';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';

const HeadTeacher = () => {
  const headTeacher = [
    {
      Id: '1',
      FirstName: 'Noster',
      MiddelName: 'Noster',
      LastName: '',
      Gender: '',
      DateOfBirth: '',
      EducationalInstitution: '',
      City: '',
      Zip: '',
      UserName: '',
      Password: '',
      Subject: 'English',
      ClassName: '7eme annee',
      class: '7eme annee B',
    },
    {
      Id: '2',
      FirstName: 'rafa',
      MiddelName: 'Noster',
      LastName: '',
      Gender: '',
      DateOfBirth: '',
      EducationalInstitution: '',
      City: '',
      Zip: '',
      UserName: '',
      Password: '',
      Subject: 'English',
      ClassName: '7eme annee',
      class: '7eme annee B',
    },
    {
      Id: '3',
      FirstName: 'ali',
      MiddelName: 'Noster',
      LastName: '',
      Gender: '',
      DateOfBirth: '',
      EducationalInstitution: '',
      City: '',
      Zip: '',
      UserName: '',
      Password: '',
      Subject: 'English',
      ClassName: '7eme annee',
      class: '7eme annee B',
    },
    {
      Id: '4',
      FirstName: 'ibrahim',
      MiddelName: 'Noster',
      LastName: '',
      Gender: '',
      DateOfBirth: '',
      EducationalInstitution: '',
      City: '',
      Zip: '',
      UserName: '',
      Password: '',
      Subject: 'English',
      ClassName: '7eme annee',
      class: '7eme annee B',
    },
  ];
  const [search, setsearch] = useState('');
  const componentRef = useRef();
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
      pdf.save('HeadTeacher.pdf');
    });
  };
  return (
    <Row>
      {' '}
      <Col lg={2} md={2} className="pd-l parentcontainer">
        <SideBarSA />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavbarR />
        <section className="tableDashboard" ref={componentRef}>
          <div className="titleDashboard">
            <h3>Head Teacher</h3>
            <input
              type="search"
              placeholder="search head teacher"
              onChange={(e) => setsearch(e.target.value)}
            />

            <div className="All-btn">
              <button onClick={downloadPDF}>Download PDF</button>

              <Link href="/Dashboard-System-Administrator/Registration/Head-Teacher">
                <button className="dashboard-btn">Add </button>
              </Link>
              <ReactToPrint
                trigger={() => (
                  <button className="dashboard-btn">Print </button>
                )}
                content={() => componentRef.current}
              />
            </div>
          </div>
          <table className="Table " id="pdf-element">
            <thead>
              {' '}
              <tr>
                <th>Id</th>

                <th>FirstName</th>

                <th>Subject Teacher</th>
                <th>Class Name</th>
                <th>Class</th>
                <th>Setting</th>
              </tr>{' '}
            </thead>
            <tbody>
              {headTeacher
                .filter((el) =>
                  el.FirstName.toLowerCase().includes(search.toLowerCase())
                )
                .map((ownheadTeacher, i) => {
                  return (
                    <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                      <td>{ownheadTeacher.Id}</td>

                      <td>{ownheadTeacher.FirstName}</td>
                      <td>{ownheadTeacher.Subject}</td>
                      <td>{ownheadTeacher.ClassName}</td>
                      <td>{ownheadTeacher.class}</td>
                      <td>
                        <Link href="/Dashboard-System-Administrator/Head-Teacher/ProfileHeadTeacher">
                          <button className="bg-primary btn-Setting">
                            See
                          </button>
                        </Link>
                        <HeadTeacherModul />
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

export default HeadTeacher;
