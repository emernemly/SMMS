import React, { useState, useRef } from 'react';
import SideBarSA from '../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
const Logs = () => {
  const log = [
    { user: 'kilo', time: '2020-09-08 17:42:17	', operation: 'modifications' },
    { user: 'ali', time: '2020-09-08 17:42:17	', operation: 'modifications' },
    {
      user: 'ibrahim',
      time: '2020-09-08 17:42:17	',
      operation: 'modifications',
    },
    { user: 'emer', time: '2020-09-08 17:42:17	', operation: 'modifications' },
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
      pdf.save('Logs.pdf');
    });
  };
  const componentRef = useRef();
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
            <h3>System Logs</h3>
            <input
              type="search"
              placeholder="search User"
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
                <th>last user</th>
                <th>access time</th>
                <th>operation</th>
              </tr>{' '}
            </thead>
            <tbody>
              {log
                .filter((el) =>
                  el.user.toUpperCase().includes(search.toUpperCase())
                )
                .map((log, i) => {
                  return (
                    <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                      <td>{log.user}</td>
                      <td>{log.time}</td>
                      <td>{log.operation}</td>
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

export default Logs;
