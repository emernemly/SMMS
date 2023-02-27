import React from 'react';
import SideBarSA from '../../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../../Components/RegistrationComponente/NavbarR';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const EditRole = () => {
  const animatedComponents = makeAnimated();

  const Permissions = [
    { title: 'import users', role: 'admin' },
    { title: 'set permissions', role: 'admin' },
    { title: 'import basic student data', role: 'admin' },
    { title: 'import teacher', role: 'admin' },
    { title: 'class schedules', role: 'admin' },
    { title: 'manage the overall moral education system', role: 'admin' },
    { title: 'defining roles ', role: 'admin' },
    { title: 'managing the system information', role: 'admin' },
    { title: 'database management', role: 'admin' },
    { title: 'log management', role: 'admin' },
    { title: 'maintaining the security', role: 'admin' },

    { title: 'import users', role: 'HeadTeacher' },
    { title: 'set permissions', role: 'HeadTeacher' },
    { title: 'import basic student data', role: 'HeadTeacher' },
    { title: 'import teacher', role: 'HeadTeacher' },
    { title: 'class schedules', role: 'HeadTeacher' },
    { title: 'manage the overall moral education system', role: 'HeadTeacher' },

    { title: 'import users', role: 'Teacher' },
    { title: 'set permissions', role: 'Teacher' },
    { title: 'import basic student data', role: 'Teacher' },
    { title: 'import teacher', role: 'Teacher' },

    { title: 'import users', role: 'Student' },
    { title: 'set permissions', role: 'Student' },
    { title: 'import basic student data', role: 'Student' },
  ];
  return (
    <Row>
      {' '}
      <Col lg={2} md={2} className="pd-l parentcontainer">
        <SideBarSA />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavbarR />
        <section className="tableDashboard role-card">
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
              <input type="text" name="Title" value="admin" />
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
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={Permissions.filter((el) => el.role === 'admin').map(
                (OwnPermissions) => {
                  return {
                    value: OwnPermissions.title,
                    label: OwnPermissions.title,
                  };
                }
              )}
              isMulti
              options={Permissions.map((el) => {
                return { value: el.title, label: el.title };
              })}
            />
            <button type="sumbit">Save</button>
          </div>
        </section>
      </Col>
    </Row>
  );
};

export default EditRole;
