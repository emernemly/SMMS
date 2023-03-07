import React, { useState, useRef, useEffect } from 'react';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Link from 'next/link';
import ReactToPrint from 'react-to-print';
import ClassAddModel from '../ModelBox/ClassAddModel';
import ClassesModel from '../ModelBox/ClassesModel';
import AddDetailsRegistration from '../ModelBox/AddDetailsRegistration';
import { useRouter } from 'next/router';
const DetailsRegistration = () => {
  const router = useRouter();
  const componentRef = useRef();
  const classes = [];
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

  return (
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
                  <td>{classes.time}</td>
                  <td>{classes.deserved}</td>
                  <td>{classes.Details}</td>
                  <td>{classes.Noticed}</td>
                  <td>{classes.recorder}</td>
                  <td>{classes.record}</td>
                  <td>
                    <Link href="/Dashboard-System-Administrator/Class/ClassProfile">
                      <button className="bg-primary btn-Setting">See</button>
                    </Link>
                    <ClassesModel />
                    <button className="bg-danger btn-Setting">
                      Delete
                    </button>{' '}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default DetailsRegistration;
