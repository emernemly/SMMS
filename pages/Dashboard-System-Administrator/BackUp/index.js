import React, { useState, useRef, useEffect } from 'react';
import SideBarSA from '../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import Hoc from '../../../Components/HOC/Hoc';
import { useDispatch, useSelector } from 'react-redux';
import {
  addClassesBackup,
  addStudentsBackup,
  addUserBackup,
  getBackUp,
} from '../../../Redux/Action/BackUpAction';
import BackUpModel from '../../../Components/ModelBox/BackUpModel';
const BackUp = () => {
  const dispatch = useDispatch();
  const backup = [
    {
      List: 'Backup Set:3120	',
      Status: 'completed ',
      time: 'at 2020-09-08 17:42:17',
      database: 'All',
      location: 'Cloud Storage',
      Size: '108.1 MB',
    },
    {
      List: 'Backup Set:2120	',
      Status: 'completed ',
      time: 'at 2020-09-08 17:42:17',
      database: 'All',
      location: 'Cloud Storage',
      Size: '108.1 MB',
    },
    {
      List: 'Backup Set:1120	',
      Status: 'completed ',
      time: 'at 2020-09-08 17:42:17',
      database: 'All',
      location: 'Cloud Storage',
      Size: '108.1 MB',
    },
    {
      List: 'Backup Set:7120	',
      Status: 'completed ',
      time: 'at 2020-09-08 17:42:17',
      database: 'All',
      location: 'Cloud Storage',
      Size: '108.1 MB',
    },
  ];
  const componentRef = useRef();
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
      pdf.save('Backup.pdf');
    });
  };
  useEffect(() => {
    dispatch(getBackUp());
  }, []);
  const BackUp = useSelector((state) => state.BackUpReducer.BackUp);
  console.log(BackUp);
  return (
    <Hoc inRole={['Backup mangement']}>
      <Row>
        {' '}
        <Col lg={2} md={2} className="pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <section className="tableDashboard" ref={componentRef}>
            <div className="titleDashboard">
              <h3>Backup</h3>
              <input
                type="search"
                placeholder="search Backup"
                onChange={(e) => setsearch(e.target.value)}
              />
              <div className="All-btn">
                <button className="dashboard-btn" onClick={downloadPDF}>
                  Download PDF
                </button>
                <BackUpModel />
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
                  <th>Backup List</th>
                  <th>Status</th>
                  <th>database</th>
                  <th>location</th>
                </tr>{' '}
              </thead>
              <tbody>
                {BackUp &&
                  BackUp.filter((el) => el.database.includes(search)).map(
                    (backup, i) => {
                      return (
                        <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                          <td>BackUp set:{backup.id}</td>

                          <td>{backup.Status}</td>
                          <td>{backup.database}</td>
                          <td>{backup.location}</td>
                        </tr>
                      );
                    }
                  )}
              </tbody>
            </table>
          </section>
        </Col>
      </Row>
    </Hoc>
  );
};

export default BackUp;
