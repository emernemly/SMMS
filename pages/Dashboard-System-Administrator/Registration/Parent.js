import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';
import { useForm } from 'react-hook-form';

const Parent = () => {
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
                          type="radio"
                          name="Gender"
                          {...register('Gender', { required: true })}
                        />
                        <b>Male</b>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="Gender"
                          {...register('Gender', { required: true })}
                        />
                        <b>female</b>
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
                      name="date"
                      {...register('date', { required: true })}
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
                      name="number"
                      {...register('number', { required: true })}
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
                      type="email"
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

export default Parent;