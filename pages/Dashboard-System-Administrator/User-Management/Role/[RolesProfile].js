import React, { useEffect } from 'react';
import SideBarSA from '../../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../../Components/RegistrationComponente/NavbarR';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Hoc from '../../../../Components/HOC/Hoc';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getOwnRole } from '../../../../Redux/Action/RolesAction';
const RolesProfile = () => {
  const router = useRouter();
  const { RolesProfile } = router.query;
  const dispatch = useDispatch();
  const animatedComponents = makeAnimated();
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
      pdf.save('Profile.pdf');
    });
  };
  console.log(router);

  useEffect(() => {
    // Access the RolesProfile query parameter correctly from router.query
    RolesProfile && dispatch(getOwnRole(RolesProfile)); // Assuming RolesProfile is the correct query parameter name
  }, [RolesProfile]); // Add the correct dependency here

  // ... the rest of your code ...

  const OwnRole = useSelector((state) => state.RolesReducer.OwnRole);
  console.log(OwnRole);
  return (
    <Hoc inRole={['User Management']}>
      <Row>
        {' '}
        <Col lg={2} md={2} className="pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <section className="tableDashboard role-card" id="pdf-element">
            <div className="title">
              {' '}
              <h3>Edit Role</h3>
            </div>
            <div className="role-card-body">
              <div className="role-input">
                <label>
                  <b>
                    {' '}
                    Title<sup>*</sup>
                  </b>
                </label>
                <input
                  type="text"
                  name="Title"
                  value={OwnRole && OwnRole.Role}
                />
              </div>
              <div className="role-input">
                <label>
                  <b>
                    {' '}
                    Permissions<sup>*</sup>
                  </b>
                </label>
                {/*  <select name="Title" />
              <span className="selection">
                <span
                  className="select2-selection"
                  role="combobox"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <ul className="select2-selection__rendered">
                    {Permissions.filter((el) => el.role === 'admin').map(
                      (OwnPermissions) => (
                        <li>
                          <span className="OwnPermissions">
                            {OwnPermissions.title}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </span>
              </span> */}{' '}
              </div>
              {OwnRole && (
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue={OwnRole.Permissions.map((OwnPermissions) => {
                    return {
                      value: OwnPermissions.value,
                      label: OwnPermissions.value,
                    };
                  })}
                  isMulti
                  isDisabled
                />
              )}
              <button onClick={downloadPDF}>Download PDF</button>
            </div>
          </section>
        </Col>
      </Row>
    </Hoc>
  );
};

export default RolesProfile;
