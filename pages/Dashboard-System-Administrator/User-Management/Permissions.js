import React, { useState, useRef } from 'react';
import SideBarSA from '../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import PermissionModel from '../../../Components/ModelBox/PermissionModel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
const Permissions = () => {
  const [search, setsearch] = useState('');
  const Permissions = [
    { title: 'import users' },
    { title: 'set permissions' },
    { title: 'import basic student data' },
    { title: 'import teacher' },
    { title: 'class schedules' },
    { title: 'manage the overall moral education system' },
    { title: 'defining roles ' },
    { title: 'managing the system information' },
    { title: 'database management' },
    { title: 'log management' },
    { title: 'maintaining the security' },
  ];
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
      pdf.save('Permissions.pdf');
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
            <h3>Permissions</h3>
            <input
              type="search"
              placeholder="search Permissions"
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
                <th>Title</th>

                <th>Setting</th>
              </tr>{' '}
            </thead>
            <tbody>
              {Permissions.filter((el) =>
                el.title.toLowerCase().includes(search.toLowerCase())
              ).map((titles, i) => {
                return (
                  <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                    <td>{titles.title}</td>
                    <td>
                      <PermissionModel titles={titles} />{' '}
                      <button className="bg-danger btn-Setting">Delete</button>{' '}
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

export default Permissions;
