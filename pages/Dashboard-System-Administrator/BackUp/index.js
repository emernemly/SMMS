import React, { useState, useRef } from 'react';
import SideBarSA from '../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import Hoc from '../../../Components/HOC/Hoc';
const BackUp = () => {
  const backup = [
    {
      List: 'Backup Set:3120	',
      Status: 'completed ',
      time: 'at 2020-09-08 17:42:17',
      database: 'All',
      location: 'Cloud Storage',
      Size: '108.1 MB',
    },
    {
      List: 'Backup Set:2120	',
      Status: 'completed ',
      time: 'at 2020-09-08 17:42:17',
      database: 'All',
      location: 'Cloud Storage',
      Size: '108.1 MB',
    },
    {
      List: 'Backup Set:1120	',
      Status: 'completed ',
      time: 'at 2020-09-08 17:42:17',
      database: 'All',
      location: 'Cloud Storage',
      Size: '108.1 MB',
    },
    {
      List: 'Backup Set:7120	',
      Status: 'completed ',
      time: 'at 2020-09-08 17:42:17',
      database: 'All',
      location: 'Cloud Storage',
      Size: '108.1 MB',
    },
  ];
  const componentRef = useRef();
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
      pdf.save('Backup.pdf');
    });
  };
  return (
    <Hoc inRole={['admin']}>
      <Row>
        {' '}
        <Col lg={2} md={2} className="pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <section className="tableDashboard" ref={componentRef}>
            <div className="titleDashboard">
              <h3>Backup</h3>
              <input
                type="search"
                placeholder="search Backup"
                onChange={(e) => setsearch(e.target.value)}
              />
              <div className="All-btn">
                <a className="dashboard-btn" onClick={downloadPDF}>
                  Download PDF
                </a>
                <a className="dashboard-btn">Create Backup </a>
                <a className="dashboard-btn">Restore Backup </a>
                <ReactToPrint
                  trigger={() => <a className="dashboard-btn">Print </a>}
                  content={() => componentRef.current}
                />{' '}
              </div>
            </div>
            <table className="Table" id="pdf-element">
              <thead>
                {' '}
                <tr>
                  <th>Backup List</th>
                  <th>Status</th>
                  <th>database</th>
                  <th>location</th>
                  <th>Size</th>
                </tr>{' '}
              </thead>
              <tbody>
                {backup
                  .filter((el) =>
                    el.List.toUpperCase().includes(search.toUpperCase())
                  )
                  .map((backup, i) => {
                    return (
                      <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                        <td>{backup.List}</td>

                        <td>{backup.Status}</td>
                        <td>{backup.database}</td>
                        <td>{backup.location}</td>
                        <td>{backup.Size}</td>
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

export default BackUp;
