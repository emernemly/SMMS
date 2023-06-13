import React, { useState, useRef, useEffect } from 'react';
import SideBarSA from '../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import HeadTeacherModul from '../../../Components/ModelBox/HeadTeacherModul';
import Link from 'next/link';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import Hoc from '../../../Components/HOC/Hoc';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteHeadTeacher,
  getHeadteacher,
} from '../../../Redux/Action/HeadTeacherAction';

const HeadTeacher = () => {
  const [search, setsearch] = useState('');
  const componentRef = useRef();
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
      pdf.save('HeadTeacher.pdf');
    });
  };

  useEffect(() => {
    dispatch(getHeadteacher());
  }, []);
  const headTeacher = useSelector(
    (state) => state.HeadTeacherReducer.HeadTeacher
  );
  const deleteHead = (id) => {
    var result = confirm('Want to delete?');
    if (result) {
      dispatch(deleteHeadTeacher(id));
    }
  };
  return (
    <Hoc inRole={['admin']}>
      <Row>
        {' '}
        <Col lg={2} md={2} className="pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <section className="tableDashboard" ref={componentRef}>
            <div className="titleDashboard">
              <h3>Head Teacher</h3>
              <input
                type="search"
                placeholder="search head teacher"
                onChange={(e) => setsearch(e.target.value)}
              />

              <div className="All-btn">
                <button onClick={downloadPDF}>Download PDF</button>

                <Link href="/Dashboard-System-Administrator/Registration/Head-Teacher">
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
            <table className="Table " id="pdf-element">
              <thead>
                {' '}
                <tr>
                  <th>Id</th>

                  <th>FirstName</th>

                  <th>Subject Teacher</th>
                  <th>Class Name</th>
                  <th>Class</th>
                  <th>Setting</th>
                </tr>{' '}
              </thead>
              <tbody>
                {headTeacher
                  .filter((el) =>
                    el.FirstName.toLowerCase().includes(search.toLowerCase())
                  )

                  .map((ownheadTeacher, i) => {
                    return (
                      <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                        <td>{ownheadTeacher.id}</td>

                        <td>{ownheadTeacher.FirstName}</td>
                        <td>{ownheadTeacher.Subject}</td>
                        <td>{ownheadTeacher.className}</td>
                        <td>{ownheadTeacher.Class}</td>
                        <td>
                          <Link
                            href={`/Dashboard-System-Administrator/Head-Teacher/ProfileHeadTeacher/${ownheadTeacher.id}`}
                          >
                            <button className="bg-primary btn-Setting">
                              See
                            </button>
                          </Link>
                          <HeadTeacherModul ownheadTeacher={ownheadTeacher} />
                          <button
                            className="bg-danger btn-Setting"
                            onClick={() => deleteHead(ownheadTeacher.id)}
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

export default HeadTeacher;
