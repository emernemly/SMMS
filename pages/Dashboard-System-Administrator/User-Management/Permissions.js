import React, { useState, useRef, useEffect } from 'react';
import SideBarSA from '../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import PermissionModel from '../../../Components/ModelBox/PermissionModel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import Hoc from '../../../Components/HOC/Hoc';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../Redux/Action/UserActions';
import { getRoleByName } from '../../../Redux/Action/RolesAction';
const Permissions = () => {
  const [search, setsearch] = useState('');
  const dispatch = useDispatch();
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
      pdf.save('Permissions.pdf');
    });
  };
  const componentRef = useRef();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const user = useSelector((state) => state.UserRedcuer.user);

  useEffect(() => {
    user && dispatch(getRoleByName(user.Role));
  }, [user]);
  const Permissions = useSelector((state) => state.RolesReducer.checkRole);

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
                </tr>{' '}
              </thead>
              <tbody>
                {Permissions &&
                  Permissions[0].Permissions.filter((el) =>
                    el.value.toLowerCase().includes(search.toLowerCase())
                  ).map((titles, i) => {
                    return (
                      <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                        <td>{titles.value}</td>
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

export default Permissions;
