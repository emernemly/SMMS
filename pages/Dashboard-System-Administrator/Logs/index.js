import React, { useState, useRef, useEffect } from 'react';
import SideBarSA from '../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import Hoc from '../../../Components/HOC/Hoc';
import { useDispatch, useSelector } from 'react-redux';
import { getLogs } from '../../../Redux/Action/LogsActions';
const Logs = () => {
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
      pdf.save('Logs.pdf');
    });
  };
  const componentRef = useRef();
  useEffect(() => {
    dispatch(getLogs());
  }, []);
  const Logs = useSelector((state) => state.LogsReducer.Logs);
  return (
    <Hoc inRole={['systeme logs']}>
      <Row>
        {' '}
        <Col lg={2} md={2} className="pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <section className="tableDashboard" ref={componentRef}>
            <div className="titleDashboard">
              <h3>System Logs</h3>
              <input
                type="search"
                placeholder="search User"
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
                  <th>last user</th>
                  <th>access time</th>
                  <th>operation</th>
                </tr>{' '}
              </thead>
              <tbody>
                {Logs &&
                  Logs.filter((el) =>
                    el.user.toUpperCase().includes(search.toUpperCase())
                  ).map((log, i) => {
                    return (
                      <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                        <td>{log.user}</td>
                        <td>{log.accessTime}</td>
                        <td>{log.operation}</td>
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

export default Logs;
