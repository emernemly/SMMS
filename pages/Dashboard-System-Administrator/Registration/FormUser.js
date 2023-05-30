import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Hoc from '../../../Components/HOC/Hoc';
import axios from 'axios';
const FormUser = () => {
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
  const [Rolevalue, setRolevalue] = useState('');

  const changeHandler = (Rolevalue) => {
    setRolevalue(Rolevalue);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = async (data) => {
    try {
      await axios.post('http://localhost:3000/Admin', {
        ...data,
        Role: Rolevalue.value,
      });
      alert('add admin secc');
    } catch (error) {
      console.log(error);
      alert('add admin failed');
    }
  };

  return (
    <Hoc inRole={['admin']}>
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
                      name="FirstName"
                      {...register('FirstName', { required: true })}
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
                      {...register('MiddelName', { required: true })}
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
                      name="LastName"
                      {...register('LastName', { required: true })}
                    />{' '}
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
                            value="Male"
                            type="radio"
                            name="Gender"
                            {...register('Gender', { required: true })}
                          />
                          <b>Male</b>
                        </div>
                        <div>
                          <input
                            value="female"
                            type="radio"
                            name="Gender"
                            {...register('Gender', { required: true })}
                          />
                          <b>Female</b>
                        </div>
                      </div>
                      <p className="err">
                        {errors.lastName && '! this field is required'}
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
                        name="Birth"
                        {...register('Birth', { required: true })}
                      />
                      <p className="err">
                        {errors.date && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Email<sup>*</sup>
                      </b>

                      <input
                        type="email"
                        name="Email"
                        {...register('Email', { required: true })}
                      />
                      <p className="err">
                        {errors.Email && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Phone Number<sup>*</sup>
                      </b>
                      <input
                        type="number"
                        name="PhoneNumber"
                        {...register('PhoneNumber', { required: true })}
                      />
                      <p className="err">
                        {errors.number && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
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
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Zip/Postal Code<sup>*</sup>
                      </b>

                      <input
                        type="text"
                        name="Zip"
                        {...register('Zip', { required: true })}
                      />
                      <p className="err">
                        {errors.Zip && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Country<sup>*</sup>
                      </b>
                      <input
                        type="text"
                        name="Country"
                        {...register('Country', { required: true })}
                      />
                      <p className="err">
                        {errors.Country && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                </Row>{' '}
              </Row>
              <Row>
                <h2>Information Account </h2>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>
                      User Name<sup>*</sup>
                    </b>

                    <input
                      type="text"
                      name="UserName"
                      {...register('UserName', { required: true })}
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
                      name="Password"
                      {...register('Password', { required: true })}
                    />
                    <p className="err">
                      {errors.password && '! this field is required'}
                    </p>
                  </div>
                </Col>{' '}
                <Col md={12}>
                  {' '}
                  <div className="inputType">
                    <b>
                      Role<sup>*</sup>
                    </b>
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      options={Permissions.map((el) => {
                        return { value: el.role, label: el.role };
                      })}
                      value={Rolevalue}
                      onChange={changeHandler}
                    />
                  </div>
                </Col>
                <button type="sumbit"> Save</button>{' '}
              </Row>
            </section>{' '}
          </form>
        </Col>
      </Row>
    </Hoc>
  );
};

export default FormUser;
