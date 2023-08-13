import React, { useState, useRef, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import Link from 'next/link';
import SideBarSA from './SideBarSA';
import NavbarR from './RegistrationComponente/NavbarR';
import Hoc from './HOC/Hoc';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateLeaves, getLeaves } from '../Redux/Action/LeavesAction';

const StudentLeaves = () => {
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
      pdf.save('EducationScores.pdf');
    });
  };
  const componentRef = useRef();
  useEffect(() => {
    dispatch(getLeaves());
  }, []);
  const handelapproved = (id, data) => {
    const result = confirm('are you sure to approved  leave request');
    result && dispatch(UpdateLeaves(id, { ...data, status: 'approved' }));
  };
  const unapproved = (id, data) => {
    const result = confirm('are you sure to unapproved  leave request');
    result && dispatch(UpdateLeaves(id, { ...data, status: 'unapproved' }));
  };
  const StudentLeaves = useSelector((state) => state.LeavesReducer.Leaves);
  return (
    <Hoc inRole={['Leave Request']}>
      <Row>
        <Col lg={2} md={2} className="pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <section className="tableDashboard" ref={componentRef}>
            <div className="titleDashboard">
              <h3>Leave Request</h3>
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
                  <th>Start Day</th>
                  <th>End Day</th>
                  <th>status</th>
                  <th>setting</th>
                </tr>{' '}
              </thead>
              <tbody>
                {StudentLeaves.filter((el) => el.status === 'waiting')
                  .filter((el) =>
                    el.student.toUpperCase().includes(search.toUpperCase())
                  )
                  .map((Leaverapport, i) => {
                    return (
                      <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                        <td>{Leaverapport.id}</td>
                        <td>{Leaverapport.student}</td>
                        <td>{Leaverapport.class}</td>
                        <td>{Leaverapport.className}</td>
                        <td>{Leaverapport.reason}</td>
                        <td>{Leaverapport.StartDay}</td>
                        <td>{Leaverapport.EndDay}</td>
                        <td>{Leaverapport.status}</td>
                        <td>
                          <Link
                            href={`/StudentLeaves/StudentLeavesProfile/${Leaverapport.id}`}
                          >
                            <button className="bg-primary btn-Setting">
                              See
                            </button>
                          </Link>{' '}
                          <button
                            className="bg-success btn-Setting"
                            onClick={() =>
                              handelapproved(Leaverapport.id, Leaverapport)
                            }
                          >
                            approved
                          </button>
                          <button
                            className="bg-danger btn-Setting"
                            onClick={() =>
                              unapproved(Leaverapport.id, Leaverapport)
                            }
                          >
                            unapproved
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </section>
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
                  <th>Start Day</th>
                  <th>End Day</th>
                  <th>status</th>
                </tr>{' '}
              </thead>
              <tbody>
                {StudentLeaves.filter((el) => el.status !== 'waiting')
                  .filter((el) =>
                    el.student.toUpperCase().includes(search.toUpperCase())
                  )
                  .map((Leaverapport, i) => {
                    return (
                      <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                        <td>{Leaverapport.id}</td>
                        <td>{Leaverapport.student}</td>
                        <td>{Leaverapport.class}</td>
                        <td>{Leaverapport.className}</td>
                        <td>{Leaverapport.reason}</td>
                        <td>{Leaverapport.StartDay}</td>
                        <td>{Leaverapport.EndDay}</td>
                        <td>{Leaverapport.status}</td>
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

export default StudentLeaves;
