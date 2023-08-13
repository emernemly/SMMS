import React, { useState, useRef, useEffect } from 'react';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Link from 'next/link';
import ReactToPrint from 'react-to-print';
import ClassAddModel from '../ModelBox/ClassAddModel';
import ClassesModel from '../ModelBox/ClassesModel';
import AddDetailsRegistration from '../ModelBox/AddDetailsRegistration';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteOwnClassMorningCheck,
  getClassMorningCheck,
} from '../../Redux/Action/ClassMorningCheckAction';
import EditeClassMornigCheck from '../ModelBox/EditeClassMornigCheck';
import Hoc from '../HOC/Hoc';
const DetailsRegistration = () => {
  const router = useRouter();
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
    dispatch(getClassMorningCheck());
  }, []);
  const deleteClassMornig = (id) => {
    const result = confirm('want to delete');
    result && dispatch(deleteOwnClassMorningCheck(id));
  };
  const ClassesCheck = useSelector(
    (state) => state.ClassMorninfCheckReducer.ClassMorninCheck
  );
  return (
    <Hoc inRole={['Class Morning check']}>
      <section className="tableDashboard" ref={componentRef}>
        <div className="titleDashboard">
          <h3>Class / Class Name</h3>
          <input
            type="search"
            placeholder="search Class"
            onChange={(e) => setsearch(e.target.value)}
          />
          <div className="All-btn">
            <button onClick={downloadPDF}>Download PDF</button>
            {router.pathname !==
              '/StudentHealth/ClassMorningCheck/ClassMoringHistory' && (
              <AddDetailsRegistration />
            )}
            <ReactToPrint
              trigger={() => <button className="dashboard-btn">Print </button>}
              content={() => componentRef.current}
            />{' '}
          </div>
        </div>
        <table className="Table" id="pdf-element">
          <thead>
            {' '}
            <tr>
              <th>Id</th>

              <th>semester</th>

              <th>Class</th>
              <th>Class Name</th>
              <th>Student</th>
              <th>age</th>
              <th>Temperature</th>
              <th>principal</th>
              <th>consultation</th>
              <th>Adresse</th>
              <th>telephone</th>
              <th>recorder</th>
              <th>Setting</th>
            </tr>{' '}
          </thead>
          <tbody>
            {ClassesCheck.filter((el) =>
              el.Class.toUpperCase().includes(search.toUpperCase())
            )
              .reverse()
              .map((classes, i) => {
                return (
                  <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                    <td>{classes.id}</td>
                    <td>{classes.semester}</td>
                    <td>{classes.Class}</td>
                    <td>{classes.className}</td>
                    <td>{classes.student}</td>
                    <td>{classes.age}</td>
                    <td>{classes.Temperature}</td>
                    <td>{classes.principal}</td>
                    <td>{classes.consultation}</td>
                    <td>{classes.Adresse}</td>
                    <td>{classes.telephone}</td>
                    <td>{classes.recorder}</td>{' '}
                    <td>
                      <Link
                        href={`/StudentHealth/ClassMorningCheck/${classes.id}`}
                      >
                        <button className="bg-primary btn-Setting">See</button>
                      </Link>
                      <EditeClassMornigCheck classes={classes} />
                      <button
                        className="bg-danger btn-Setting"
                        onClick={() => deleteClassMornig(classes.id)}
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
    </Hoc>
  );
};

export default DetailsRegistration;
