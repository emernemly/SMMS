import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../../Components/RegistrationComponente/NavbarR';
import SideBarStudent from '../../../../Components/SideBarStudent';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import { useDispatch, useSelector } from 'react-redux';
import { getOwnLeavesByStudent } from '../../../../Redux/Action/LeavesAction';
import NavBarStudent from '../../../../Components/NavBarStudent';
const LeaveRequesthistory = () => {
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
    dispatch(getOwnLeavesByStudent());
  }, []);

  const StudentLeaves = useSelector((state) => state.LeavesReducer.Leaves);
  return (
    <Row>
      {' '}
      <Col lg={2} md={2} className="pd-l parentcontainer">
        <SideBarStudent />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavBarStudent />
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
                <th>Leave date</th>
                <th>status</th>
              </tr>{' '}
            </thead>
            <tbody>
              {StudentLeaves.filter((el) =>
                el.status.toUpperCase().includes(search.toUpperCase())
              )
                .reverse()
                .map((Leaverapport, i) => {
                  return (
                    <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                      <td>{Leaverapport.studentNumber}</td>
                      <td>{Leaverapport.student}</td>
                      <td>{Leaverapport.class}</td>
                      <td>{Leaverapport.className}</td>
                      <td>{Leaverapport.reason}</td>
                      <td>{Leaverapport.StartDay}</td>
                      <td>{Leaverapport.status}</td>
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

export default LeaveRequesthistory;
