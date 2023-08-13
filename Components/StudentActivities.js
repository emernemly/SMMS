import React, { useState, useRef, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import Link from 'next/link';

import AddActivities from './ModelBox/AddActivities';
import EditActivities from './ModelBox/EditActivities';
import SideBarSA from './SideBarSA';
import NavbarR from './RegistrationComponente/NavbarR';
import Hoc from './HOC/Hoc';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteActivities,
  getActivities,
} from '../Redux/Action/ActivitiesAction';
const StudentActivities = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities());
  }, []);
  const deleteActivitie = (id) => {
    var result = confirm('Want to delete activities');
    if (result) {
      dispatch(deleteActivities(id));
    }
  };
  const Activities = useSelector((state) => state.ActivitiesReducer.Activities);
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
    <Hoc inRole={['Student Activities']}>
      <Row>
        <Col lg={2} md={2} className="pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
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
                <AddActivities />
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
                  <th>setting</th>
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
                        <td>
                          <Link
                            href={`/StudentActivities/ActivitiesProfile/${Activitie.id}`}
                          >
                            <button className="bg-primary btn-Setting">
                              See
                            </button>
                          </Link>
                          <EditActivities Activitie={Activitie} />
                          <button
                            className="bg-danger btn-Setting"
                            onClick={() => deleteActivitie(Activitie.id)}
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

export default StudentActivities;
