import React, { useState, useRef, useEffect } from 'react';
import SideBarSA from '../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import Link from 'next/link';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTeacher, getTeacher } from '../../../Redux/Action/TeacherAction';

const Teacher = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeacher());
  }, []);

  const Teachers = useSelector((state) => state.TeacherReducer.Teacher);
  console.log(Teachers);
  const [search, setsearch] = useState('');
  const componentRef = useRef();
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
      pdf.save('Teacher.pdf');
    });
  };
  const deleteTeachers = (id) => {
    var result = confirm('Want to delete Teacher?');
    if (result) {
      dispatch(deleteTeacher(id));
    }
  };
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
            <h3>Teacher</h3>
            <input
              type="search"
              placeholder="search Teacher"
              onChange={(e) => setsearch(e.target.value)}
            />
            <div className="All-btn">
              <button onClick={downloadPDF}>Download PDF</button>

              <Link href="/Dashboard-System-Administrator/Registration/Teacher">
                <button className="dashboard-btn">Add </button>
              </Link>
              <ReactToPrint
                trigger={() => (
                  <button className="dashboard-btn">Print </button>
                )}
                content={() => componentRef.current}
              />
            </div>
          </div>
          <table className="Table" id="pdf-element">
            <thead>
              {' '}
              <tr>
                <th>Id</th>

                <th>Name</th>

                <th>Subject Teacher</th>
                <th>Class Name</th>
                <th>Class</th>
                <th>Setting</th>
              </tr>{' '}
            </thead>
            <tbody>
              {Teachers.filter((el) =>
                el.FirstName.toUpperCase().includes(search.toUpperCase())
              ).map((ownTeacher, i) => {
                return (
                  <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                    <td>{ownTeacher.id}</td>

                    <td>{ownTeacher.FirstName}</td>
                    <td>{ownTeacher.Subject}</td>
                    <td>{ownTeacher.className}</td>
                    <td>{ownTeacher.Class}</td>
                    <td>
                      <Link
                        href={`/Dashboard-System-Administrator/Teacher/ProfileTeacher/${ownTeacher.id}`}
                      >
                        <button className="bg-primary btn-Setting">See</button>
                      </Link>
                      {/* <HeadTeacherModul /> */}
                      <button
                        className="bg-danger btn-Setting"
                        onClick={() => deleteTeachers(ownTeacher.id)}
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
  );
};

export default Teacher;
