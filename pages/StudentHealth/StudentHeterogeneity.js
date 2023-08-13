import React, { useState, useRef, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteHeterogeneity,
  getHeterogeneity,
} from '../../Redux/Action/HeterogeneityAction';
import { getUser } from '../../Redux/Action/UserActions';
const StudentHeterogeneity = () => {
  const dispatch = useDispatch();
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
  useEffect(() => {
    dispatch(getUser());
    dispatch(getHeterogeneity());
  }, []);
  const user = useSelector((state) => state.UserRedcuer.user);
  const Heterogeneity = useSelector(
    (state) => state.HeterogeneityReducer.Heterogeneity
  );
  const handelDelete = (id) => {
    const result = confirm('want to delete');
    if (result) {
      dispatch(deleteHeterogeneity(id));
    }
  };
  return (
    <Hoc inRole={['Student Heterogeneity']}>
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
                <AddHeterogeneity user={user} />
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
                {Heterogeneity.filter((el) =>
                  el.student.toUpperCase().includes(search.toUpperCase())
                ).map((Heterogeneity, i) => {
                  return (
                    <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                      <td>{Heterogeneity.studentNumber}</td>

                      <td>{Heterogeneity.class}</td>
                      <td>{Heterogeneity.className}</td>
                      <td>{Heterogeneity.student}</td>
                      <td>{Heterogeneity.Heterogeneity}</td>
                      <td>{Heterogeneity.SituationDetails}</td>
                      <td>{Heterogeneity.Recorder}</td>
                      <td>{Heterogeneity.TimeRegistration}</td>
                      <td>
                        <Link
                          href={`/StudentHealth/StudentHeterogeneityProfile/${Heterogeneity.id}`}
                        >
                          <button className="bg-primary btn-Setting">
                            See
                          </button>
                        </Link>
                        <EditHeterogeneity Heterogeneity={Heterogeneity} />
                        <button
                          className="bg-danger btn-Setting"
                          onClick={() => handelDelete(Heterogeneity.id)}
                        >
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
