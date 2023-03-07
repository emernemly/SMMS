import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const Students = () => {
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
    {
      title: 'manage the overall moral education system',
      role: 'HeadTeacher',
    },

    { title: 'import users', role: 'Teacher' },
    { title: 'set permissions', role: 'Teacher' },
    { title: 'import basic student data', role: 'Teacher' },
    { title: 'import teacher', role: 'Teacher' },

    { title: 'import users', role: 'Student' },
    { title: 'set permissions', role: 'Student' },
    { title: 'import basic student data', role: 'Student' },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = (data) => {
    console.log(data);
  };
  return (
    <Row>
      {' '}
      <Col lg={2} md={2} className="sidebarcontainer pd-l parentcontainer">
        <SideBarSA />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavbarR />
        <form onSubmit={handleSubmit(onSubmits)}>
          <section className="formInput">
            <Row>
              <h2>Personal Information</h2>
              <Col md={4}>
                <div className="inputType">
                  <b>
                    First Name<sup>*</sup>
                  </b>
                  <input
                    type="text"
                    name="name"
                    {...register('name', { required: true })}
                  />
                  <p className="err">
                    {errors.name && '! this field is required'}
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="inputType">
                  <b>
                    Middel Name<sup>*</sup>
                  </b>
                  <input
                    type="text"
                    name="middelName"
                    {...register('middelName', { required: true })}
                  />
                  <p className="err">
                    {errors.middelName && '! this field is required'}
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="inputType">
                  <b>
                    Last Name<sup>*</sup>
                  </b>
                  <input
                    type="text"
                    name="lastName"
                    {...register('lastName', { required: true })}
                  />
                  <p className="err">
                    {errors.lastName && '! this field is required'}
                  </p>
                </div>
              </Col>
              <Row>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>
                      Gender<sup>*</sup>
                    </b>

                    <div className="radioType">
                      {' '}
                      <div>
                        <input
                          type="radio"
                          name="Gender"
                          {...register('Gender', { required: true })}
                        />{' '}
                        <b>Male</b>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="Gender"
                          {...register('Gender', { required: true })}
                        />{' '}
                        <b>female</b>
                      </div>
                    </div>
                    <p className="err">
                      {errors.Gender && '! this field is required'}
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>
                      Date of Birth<sup>*</sup>
                    </b>
                    <input
                      type="date"
                      name="date"
                      {...register('date', { required: true })}
                    />
                    <p className="err">
                      {errors.date && '! this field is required'}
                    </p>
                  </div>
                </Col>
              </Row>{' '}
              <Row>
                {' '}
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>
                      Graduation School<sup>*</sup>
                    </b>
                    <input
                      type="text"
                      name="School"
                      {...register('School', { required: true })}
                    />
                    <p className="err">
                      {errors.School && '! this field is required'}
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>
                      Graduation total score<sup>*</sup>
                    </b>
                    <input
                      type="text"
                      name="GraduationScore"
                      {...register('GraduationScore', { required: true })}
                    />
                    <p className="err">
                      {errors.GraduationScore && '! this field is required'}
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>
                      Student Number<sup>*</sup>
                    </b>

                    <input
                      type="number"
                      name="StudentNumber"
                      {...register('StudentNumber', { required: true })}
                    />
                    <p className="err">
                      {errors.StudentNumber && '! this field is required'}
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>
                      Street<sup>*</sup>
                    </b>
                    <input
                      type="text"
                      name="Street"
                      {...register('Street', { required: true })}
                    />
                    <p className="err">
                      {errors.Street && '! this field is required'}
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>
                      City<sup>*</sup>
                    </b>

                    <input
                      type="text"
                      name="City"
                      {...register('City', { required: true })}
                    />
                    <p className="err">
                      {errors.City && '! this field is required'}
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>
                      Zip/Postal Code<sup>*</sup>
                    </b>
                    <input
                      type="number"
                      name="Zip"
                      {...register('Zip', { required: true })}
                    />
                    <p className="err">
                      {errors.Zip && '! this field is required'}
                    </p>
                  </div>
                </Col>
              </Row>{' '}
            </Row>
            <Row>
              <hr></hr>
              <h2>Parents Information</h2>
              <Row>
                {' '}
                <Col md={6}>
                  <div className="inputType">
                    <b>
                      Father Name<sup>*</sup>
                    </b>
                    <input
                      type="text"
                      name="FatherName"
                      {...register('FatherName', { required: true })}
                    />
                    <p className="err">
                      {errors.FatherName && '! this field is required'}
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="inputType">
                    <b>
                      Father Phone<sup>*</sup>
                    </b>
                    <input
                      type="number"
                      name="FatherPhone"
                      {...register('FatherPhone', { required: true })}
                    />
                    <p className="err">
                      {errors.FatherPhone && '! this field is required'}
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <div className="inputType">
                    <b>
                      Mother Name<sup>*</sup>
                    </b>
                    <input
                      type="text"
                      name="MotherName"
                      {...register('MotherName', { required: true })}
                    />{' '}
                    <p className="err">
                      {errors.MotherName && '! this field is required'}
                    </p>
                  </div>
                </Col>

                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>
                      Mother Phone<sup>*</sup>
                    </b>
                    <input
                      type="number"
                      name=" MotherPhone"
                      {...register(' MotherPhone', { required: true })}
                    />
                    <p className="err">
                      {errors.MotherPhone && '! this field is required'}
                    </p>
                  </div>
                </Col>
              </Row>
              <hr></hr>
              <h2>Class Information </h2>
              <Row>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>
                      Class<sup>*</sup>
                    </b>

                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      options={Permissions.map((el) => {
                        return { value: el.title, label: el.title };
                      })}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>
                      Class Name<sup>*</sup>
                    </b>
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      options={Permissions.map((el) => {
                        return { value: el.title, label: el.title };
                      })}
                    />
                    <p className="err">
                      {errors.Zip && '! this field is required'}
                    </p>
                  </div>
                </Col>
              </Row>
              <hr></hr>
              <h2>Account Information </h2>
              <Col md={6}>
                {' '}
                <div className="inputType">
                  <b>
                    User Name<sup>*</sup>
                  </b>

                  <input
                    type="text"
                    name="userName"
                    {...register('userName', { required: true })}
                  />
                  <p className="err">
                    {errors.userName && '! this field is required'}
                  </p>
                </div>
              </Col>
              <Col md={6}>
                {' '}
                <div className="inputType">
                  <b>
                    Password<sup>*</sup>
                  </b>
                  <input
                    type="password"
                    name="password"
                    {...register('password', { required: true })}
                  />
                  <p className="err">
                    {errors.password && '! this field is required'}
                  </p>
                </div>
              </Col>{' '}
              <button type="sumbit"> Save</button>{' '}
            </Row>
          </section>{' '}
        </form>
      </Col>
    </Row>
  );
};

export default Students;
