import React, { useEffect, useRef, useState } from 'react';
import { Col } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactToPrint from 'react-to-print';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getDeductionScores } from '../../Redux/Action/DeductionScores';
import { getStudents } from '../../Redux/Action/StudentAction';
const StudentMoralEducation = () => {
  const dispatch = useDispatch();
  const router = useRouter();
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
    dispatch(getStudents());
  }, []);
  const Students = useSelector((state) => state.StudentReducer.Students);
  console.log(Students);
  return (
    <Col lg={12} className="dashboardContent">
      <section className="tableDashboard" ref={componentRef}>
        <div className="titleDashboard">
          <h3>Moral Education Scores</h3>
          <input
            type="search"
            placeholder="Search Student "
            onChange={(e) => setsearch(e.target.value)}
          />
          <div className="All-btn">
            <button onClick={downloadPDF}>Download PDF</button>
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
              <th>StudentNumber</th>

              <th>FirstName</th>

              <th>class</th>
              <th>className</th>
              <th>Birth</th>
              <th>GraduationSchool</th>
              <th>Score</th>
            </tr>{' '}
          </thead>
          <tbody>
            {Students.filter((el) =>
              el.FirstName.toUpperCase().includes(search.toUpperCase())
            )
              .reverse()
              .sort((a, b) => b.Score - a.Score)
              .slice(0, 9)
              .map((Student, i) => {
                return (
                  <tr className={i % 2 === 0 && `bg-ver`} key={i}>
                    <td>{Student.StudentNumber}</td>
                    <td>{Student.FirstName}</td>
                    <td>{Student.class}</td>
                    <td>{Student.className}</td>
                    <td>{Student.Birth}</td>
                    <td>{Student.GraduationSchool}</td>
                    <td>{Student.Score}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </Col>
  );
};

export default StudentMoralEducation;
