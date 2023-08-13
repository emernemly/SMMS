import React, { useState, useRef, useEffect } from 'react';
import SideBarSA from '../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import StudentModul from '../../../Components/ModelBox/StudentModul';
import Link from 'next/link';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteStudent,
  getStudents,
} from '../../../Redux/Action/StudentAction';
import Hoc from '../../../Components/HOC/Hoc';
import { getUser } from '../../../Redux/Action/UserActions';
import { getRoleByName } from '../../../Redux/Action/RolesAction';
const Student = () => {
  const dispatch = useDispatch();
  const [search, setsearch] = useState('');
  const [id, setid] = useState(null);
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
    setid(localStorage.getItem('Role'));
  }, []);
  useEffect(() => {
    id && dispatch(getRoleByName(id));
  }, [id]);
  const student = useSelector((state) => state.StudentReducer.Students);
  const Permissions = useSelector((state) => state.RolesReducer.checkRole);

  const deleteStudents = (id) => {
    var result = confirm('Want to delete Teacher?');
    if (result) {
      dispatch(deleteStudent(id));
    }
  };
  return (
    <Hoc inRole={['see All student']}>
      <Row>
        {' '}
        <Col lg={2} md={2} className="pd-l parentcontainer">
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
                <Link href="/Dashboard-System-Administrator/Registration/Students">
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
                  <th>Student number</th>

                  <th>Name</th>

                  <th>Gender</th>
                  <th>Graduation school</th>
                  <th>Graduation total Score</th>
                  {Permissions &&
                    Permissions[0].Permissions.map((el) => el.value).some(
                      (role) =>
                        role.toUpperCase() === 'setting student'.toUpperCase()
                    ) && <th>Setting</th>}
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
                        <td>{student.GraduationScore}</td>
                        {Permissions &&
                          Permissions[0].Permissions.map((el) => el.value).some(
                            (role) =>
                              role.toUpperCase() ===
                              'setting student'.toUpperCase()
                          ) && (
                            <td>
                              <Link
                                href={`/Dashboard-System-Administrator/Student/StudentProfile/${student.id}`}
                              >
                                <button className="bg-primary btn-Setting">
                                  See
                                </button>
                              </Link>
                              <StudentModul student={student} />
                              <button
                                className="bg-danger btn-Setting"
                                onClick={() => deleteStudents(student.id)}
                              >
                                Delete
                              </button>{' '}
                            </td>
                          )}
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

export default Student;
