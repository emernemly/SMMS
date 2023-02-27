import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';
import { useForm } from 'react-hook-form';

const SettingAdmin = () => {
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
                  <b>First Name</b>
                  <input type="text" name="name" {...register('name')} />
                </div>
              </Col>
              <Col md={4}>
                <div className="inputType">
                  <b>Middel Name</b>
                  <input
                    type="text"
                    name="middelName"
                    {...register('middelName')}
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="inputType">
                  <b>Last Name</b>
                  <input
                    type="text"
                    name="lastName"
                    {...register('lastName')}
                  />{' '}
                </div>
              </Col>
              <Row>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>Gender</b>

                    <div className="radioType">
                      {' '}
                      <div>
                        <input
                          type="radio"
                          name="Gender"
                          {...register('Gender')}
                        />
                        <b>Male</b>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="Gender"
                          {...register('Gender')}
                        />
                        <b>female</b>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>Date of Birth</b>
                    <input type="date" name="date" {...register('date')} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>Email</b>

                    <input type="email" name="Email" {...register('Email')} />
                  </div>
                </Col>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>Phone Number</b>
                    <input
                      type="number"
                      name="number"
                      {...register('number')}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>Street</b>

                    <input type="email" name="Street" {...register('Street')} />
                  </div>
                </Col>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>City</b>
                    <input type="text" name="City" {...register('City')} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>Zip/Postal Code</b>

                    <input type="text" name="Zip" {...register('Zip')} />
                  </div>
                </Col>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>Country</b>
                    <input
                      type="text"
                      name="Country"
                      {...register('Country')}
                    />
                  </div>
                </Col>
              </Row>{' '}
            </Row>
            <Row>
              <h2>Information Account </h2>
              <Col md={6}>
                {' '}
                <div className="inputType">
                  <b>User Name</b>

                  <input
                    type="text"
                    name="userName"
                    {...register('userName')}
                  />
                </div>
              </Col>
              <Col md={6}>
                {' '}
                <div className="inputType">
                  <b>Password</b>
                  <input
                    type="password"
                    name="password"
                    {...register('password')}
                  />
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

export default SettingAdmin;
