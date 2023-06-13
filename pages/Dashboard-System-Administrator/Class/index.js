import React, { useState, useRef, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ClassAddModel from '../../../Components/ModelBox/ClassAddModel';
import ClassesModel from '../../../Components/ModelBox/ClassesModel';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Link from 'next/link';
import ReactToPrint from 'react-to-print';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteClass, getClasses } from '../../../Redux/Action/ClassAction';

const Class = () => {
  const componentRef = useRef();
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
      pdf.save('Class.pdf');
    });
  };

  useEffect(() => {
    dispatch(getClasses());
  }, []);
  const classes = useSelector((state) => state.ClassesReducer.Classes);
  const DeleteClasses = (id) => {
    const result = confirm('Want to delete?');
    if (result) {
      dispatch(DeleteClass(id));
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
            <h3>Class</h3>
            <input
              type="search"
              placeholder="search Class"
              onChange={(e) => setsearch(e.target.value)}
            />
            <div className="All-btn">
              <button onClick={downloadPDF}>Download PDF</button>
              <ClassAddModel />
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
                .map((classes, i) => {
                  return (
                    <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                      <td>{classes.Id}</td>

                      <td>{classes.Level}</td>
                      <td>{classes.Class}</td>
                      <td>{classes.timeEvent}</td>
                      <td>{classes.deserved}</td>
                      <td>{classes.Details}</td>
                      <td>{classes.Noticed}</td>
                      <td>{classes.recorder}</td>
                      <td>{classes.timeRecord}</td>
                      <td>
                        <Link
                          href={`/Dashboard-System-Administrator/Class/ClassProfile/${classes.id}`}
                        >
                          <button className="bg-primary btn-Setting">
                            See
                          </button>
                        </Link>
                        <ClassesModel classes={classes} />
                        <button
                          className="bg-danger btn-Setting"
                          onClick={() => DeleteClasses(classes.id)}
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

export default Class;
