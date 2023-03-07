import React, { useRef } from 'react';
import SideBarSA from '../../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../../Components/RegistrationComponente/NavbarR';
import Link from 'next/link';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
const Role = () => {
  const Permissions = [
    { title: 'import users', role: 'admin' },
    { title: 'set permissions', role: 'admin' },
    { title: 'import basic student data', role: 'admin' },
    { title: 'import teacher', role: 'admin' },
    { title: 'class schedules', role: 'admin' },
    { title: 'manage the overall moral education system', role: 'admin' },
    { title: 'defining roles ', role: 'admin' },
    { title: 'managing the system information', role: 'admin' },
    { title: 'database management', role: 'admin' },
    { title: 'log management', role: 'admin' },
    { title: 'maintaining the security', role: 'admin' },

    { title: 'import users', role: 'HeadTeacher' },
    { title: 'set permissions', role: 'HeadTeacher' },
    { title: 'import basic student data', role: 'HeadTeacher' },
    { title: 'import teacher', role: 'HeadTeacher' },
    { title: 'class schedules', role: 'HeadTeacher' },
    { title: 'manage the overall moral education system', role: 'HeadTeacher' },

    { title: 'import users', role: 'Teacher' },
    { title: 'set permissions', role: 'Teacher' },
    { title: 'import basic student data', role: 'Teacher' },
    { title: 'import teacher', role: 'Teacher' },

    { title: 'import users', role: 'Student' },
    { title: 'set permissions', role: 'Student' },
    { title: 'import basic student data', role: 'Student' },
  ];
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
      pdf.save('Role.pdf');
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
            <h3>Role</h3>
            <input type="search" placeholder="search Title" />
            <div className="All-btn">
              <button onClick={downloadPDF}>Download PDF</button>
              <Link href="/Dashboard-System-Administrator/User-Management/Role/AddRole">
                <button className="dashboard-btn">Add </button>
              </Link>
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
                <th>Permissions</th>
                <th>Setting</th>
              </tr>{' '}
            </thead>
            <tbody>
              {/* Permissions.map((titles, i) => {
                return (
                 <tr className={i % 2 === 0 && `bg-ver`}>
                    <td>{titles.title}</td>
                    <td>
                      <button className="bg-primary btn-Setting">Voir</button>{' '}
                      <button className="bg-success btn-Setting">
                        modifier
                      </button>{' '}
                      <button className="bg-danger btn-Setting">
                        supprimer
                      </button>{' '}
                    </td>
                  </tr> 
              
                );
              })  */}{' '}
              <tr className="bg-ver">
                <td>Admin</td>

                <td className="Permissions">
                  {Permissions.filter((el) => el.role === 'admin').map(
                    (OwnPermissions, i) => (
                      <span className="OwnPermissions" key={i}>
                        {OwnPermissions.title}
                      </span>
                    )
                  )}
                </td>
                <td>
                  <Link href="/Dashboard-System-Administrator/User-Management/Role/RoleProfile">
                    <button className="bg-primary btn-Setting">See</button>
                  </Link>{' '}
                  <Link href="/Dashboard-System-Administrator/User-Management/Role/Edit-Role">
                    <button className="bg-success btn-Setting">Edit</button>
                  </Link>
                  <button className="bg-danger btn-Setting">Delete</button>{' '}
                </td>
              </tr>
              <tr>
                <td>Head Teacher</td>

                <td className="Permissions">
                  {Permissions.filter((el) => el.role === 'HeadTeacher').map(
                    (OwnPermissions, i) => (
                      <span className="OwnPermissions" key={i}>
                        {OwnPermissions.title}
                      </span>
                    )
                  )}
                </td>
                <td>
                  <button className="bg-primary btn-Setting">See</button>{' '}
                  <Link href="/Dashboard-System-Administrator/User-Management/Role/Edit-Role">
                    <button className="bg-success btn-Setting">Edit</button>
                  </Link>
                  <button className="bg-danger btn-Setting">Delete</button>{' '}
                </td>
              </tr>
              <tr>
                <td>Teacher</td>

                <td className="Permissions">
                  {' '}
                  {Permissions.filter((el) => el.role === 'Teacher').map(
                    (OwnPermissions, i) => (
                      <span className="OwnPermissions" key={i}>
                        {OwnPermissions.title}
                      </span>
                    )
                  )}
                </td>
                <td>
                  <button className="bg-primary btn-Setting">See</button>{' '}
                  <Link href="/Dashboard-System-Administrator/User-Management/Role/Edit-Role">
                    <button className="bg-success btn-Setting">Edit</button>
                  </Link>
                  <button className="bg-danger btn-Setting">Delete</button>{' '}
                </td>
              </tr>
              <tr>
                <td>Student/parent</td>

                <td className="Permissions">
                  {' '}
                  {Permissions.filter((el) => el.role === 'Student').map(
                    (OwnPermissions, i) => (
                      <span className="OwnPermissions" key={i}>
                        {OwnPermissions.title}
                      </span>
                    )
                  )}
                </td>
                <td>
                  <button className="bg-primary btn-Setting">See</button>{' '}
                  <Link href="/Dashboard-System-Administrator/User-Management/Role/Edit-Role">
                    <button className="bg-success btn-Setting">Edit</button>
                  </Link>
                  <button className="bg-danger btn-Setting">Delete</button>{' '}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </Col>
    </Row>
  );
};

export default Role;
