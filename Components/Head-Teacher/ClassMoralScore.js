import React, { useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Link from 'next/link';
import ReactToPrint from 'react-to-print';
import SideBarSA from '../SideBarSA';
import NavbarR from '../RegistrationComponente/NavbarR';
import Hoc from '../HOC/Hoc';
import { useEffect } from 'react';
import { getClasses } from '../../Redux/Action/ClassAction';
import { useDispatch, useSelector } from 'react-redux';

const ClassMoralScore = () => {
  const componentRef = useRef();
  const dispatch = useDispatch();
  const [search, setsearch] = useState('');
  const downloadPDF = () => {
    const input = document.getElementById('pdf-element');
    html2canvas(document.body, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        unit: 'px',
        format: 'a4',
        orientation: 'portrait',
        lineHeight: 1.5,
        compress: true,
        resolution: 96,
      });
      pdf.addImage(
        imgData,
        'PNG',
        0,
        0,
        pdf.internal.pageSize.width,
        pdf.internal.pageSize.height
      );
      pdf.save('Class.pdf');
    });
  };
  useEffect(() => {
    dispatch(getClasses());
  }, []);
  const classes = useSelector((state) => state.ClassesReducer.Classes);

  return (
    <Hoc inRole={['Class Moral Education']}>
      <Row>
        <Col lg={2} md={2} className="sidebarcontainer pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <section className="tableDashboard" ref={componentRef}>
            <div className="titleDashboard">
              <h3>Class</h3>
              <input
                type="search"
                placeholder="search Class"
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
                  <th>Id</th>

                  <th>Level</th>

                  <th>Class</th>
                  <th>the time of the event</th>
                  <th>deserved</th>
                  <th>Details</th>
                  <th>Noticed</th>
                  <th>recorder</th>
                  <th>time to record</th>
                  <th>Setting</th>
                </tr>{' '}
              </thead>
              <tbody>
                {classes
                  .filter((el) =>
                    el.Class.toUpperCase().includes(search.toUpperCase())
                  )
                  .reverse()
                  .map((classes, i) => {
                    return (
                      <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                        <td>{classes.id}</td>

                        <td>{classes.Level}</td>
                        <td>{classes.Class}</td>
                        <td>{classes.timeEvent}</td>
                        <td>{classes.deserved}</td>
                        <td>{classes.Details}</td>
                        <td>{classes.Noticed}</td>
                        <td>{classes.recorder}</td>
                        <td>{classes.timeRecord}</td>
                        <td>
                          <Link href={`/Head-Teacher/${classes.Class}`}>
                            <button className="bg-primary btn-Setting">
                              See
                            </button>
                          </Link>
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

export default ClassMoralScore;
