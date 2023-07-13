import React, { useState, useRef, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import DeductionScore from '../ModelBox/DeductionScore';
import Cancelling from '../ModelBox/Cancelling';
import AddPoint from './AddPoint';
import SideBarSA from '../SideBarSA';
import NavbarR from '../RegistrationComponente/NavbarR';
import { useDispatch, useSelector } from 'react-redux';
import { getStudents } from '../../Redux/Action/StudentAction';
import Hoc from '../HOC/Hoc';
const StudentClassroom = () => {
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
    dispatch(getStudents());
  }, []);
  const student = useSelector((state) => state.StudentReducer.Students);
  return (
    <Hoc inRole={['admin', 'headTeacher']}>
      <Row>
        {' '}
        <Col lg={2} md={2} className="sidebarcontainer pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <section className="tableDashboard" ref={componentRef}>
            <div className="titleDashboard">
              <h3>Student</h3>
              <input
                type="search"
                placeholder="search Student"
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
                  <th>Student number</th>

                  <th>Name</th>

                  <th>Gender</th>
                  <th>Graduation school</th>
                  <th>Moral Education Score</th>
                  <th>Setting</th>
                </tr>{' '}
              </thead>
              <tbody>
                {student
                  .filter((el) =>
                    el.FirstName.toUpperCase().includes(search.toUpperCase())
                  )
                  .reverse()
                  .map((student, i) => {
                    return (
                      <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                        <td>{student.StudentNumber}</td>

                        <td>{student.FirstName}</td>
                        <td>{student.Gender}</td>
                        <td>{student.GraduationSchool}</td>
                        <td>{student.score}</td>
                        <td>
                          <AddPoint />
                          <DeductionScore student={student} />
                          <Cancelling student={student} />
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

export default StudentClassroom;
