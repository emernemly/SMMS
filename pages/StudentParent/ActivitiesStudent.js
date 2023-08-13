import React, { useState, useRef, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';

import { useDispatch, useSelector } from 'react-redux';
import SideBarStudent from '../../Components/SideBarStudent';
import NavBarStudent from '../../Components/NavBarStudent';
import { getActivitiesByStudent } from '../../Redux/Action/ActivitiesAction';

const ActivitiesStudent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivitiesByStudent());
  }, []);

  const Activities = useSelector((state) => state.ActivitiesReducer.Activities);
  console.log(Activities);
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
  return (
    <Row>
      <Col lg={2} md={2} className="pd-l parentcontainer">
        <SideBarStudent />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavBarStudent />
        <section className="tableDashboard" ref={componentRef}>
          <div className="titleDashboard">
            <h3>Student Activities</h3>
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
                <th>activitie</th>
                <th> Start Date</th>
                <th>end Date</th>
              </tr>{' '}
            </thead>
            <tbody>
              {Activities.filter((el) =>
                el.student.toUpperCase().includes(search.toUpperCase())
              )
                .reverse()
                .map((Activitie, i) => {
                  return (
                    <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                      <td>{Activitie.studentNumber}</td>
                      <td>{Activitie.student}</td>
                      <td>{Activitie.class}</td>
                      <td>{Activitie.className}</td>
                      <td>{Activitie.activitie}</td>
                      <td>{Activitie.startDate}</td>
                      <td>{Activitie.endDate}</td>
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

export default ActivitiesStudent;
