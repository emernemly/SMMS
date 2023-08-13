import React, { useEffect, useRef } from 'react';
import SideBarSA from '../../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../../Components/RegistrationComponente/NavbarR';
import Link from 'next/link';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import Hoc from '../../../../Components/HOC/Hoc';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteRole, getRoles } from '../../../../Redux/Action/RolesAction';
const Role = () => {
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoles());
  }, []);
  const Permission = useSelector((state) => state.RolesReducer.Role);
  const handelDelete = (id) => {
    let result = confirm('sure you want to delete');
    console.log(result);
    result && dispatch(DeleteRole(id));
  };
  return (
    <Hoc inRole={['User Management']}>
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
                {Permission.map((Roles) => (
                  <tr className="bg-ver" key={Roles.id}>
                    {console.log(Roles.Permissions)}
                    <td>{Roles.Role}</td>

                    <td className="Permissions">
                      {Permission &&
                        Roles.Permissions.map((OwnPermissions, i) => (
                          <span className="OwnPermissions" key={i}>
                            {OwnPermissions.value}
                          </span>
                        ))}
                    </td>
                    <td>
                      <Link
                        href={`/Dashboard-System-Administrator/User-Management/Role/${Roles.id}`}
                      >
                        <button className="bg-primary btn-Setting">See</button>
                      </Link>{' '}
                      <Link
                        href={`/Dashboard-System-Administrator/User-Management/Role/RoleEdite/${Roles.id}`}
                      >
                        <button className="bg-success btn-Setting">Edit</button>
                      </Link>
                      <button
                        className="bg-danger btn-Setting"
                        onClick={() => handelDelete(Roles.id)}
                      >
                        Delete
                      </button>{' '}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </Col>
      </Row>
    </Hoc>
  );
};

export default Role;
