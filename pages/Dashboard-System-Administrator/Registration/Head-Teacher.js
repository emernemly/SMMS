import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Hoc from '../../../Components/HOC/Hoc';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getRoles } from '../../../Redux/Action/RolesAction';
const HeadTeacher = () => {
  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();

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
      const found = await axios.get(
        `https://projectdata-0i86.onrender.com/User?userName=${data.userName}`
      );
      if (!found.data.length) {
        await axios.post('https://projectdata-0i86.onrender.com/User', {
          ...data,
          Role: Rolevalue.value,
        });
        alert('add HeadTeacher');
      } else {
        alert('user name already exist');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getRoles());
  }, []);
  const Role = useSelector((state) => state.RolesReducer.Role);
  return (
    <Hoc inRole={['User Registration']}>
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
                      name="MiddelName"
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
                            value="Male"
                            type="radio"
                            name="Gender"
                            {...register('Gender', { required: true })}
                          />
                          <b>Male</b>
                        </div>
                        <div>
                          <input
                            value="Female"
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
                        Educational Institution<sup>*</sup>
                      </b>
                      <input
                        type="text"
                        name="Educational"
                        {...register('Educational', { required: true })}
                      />
                      <p className="err">
                        {errors.Educational && '! this field is required'}
                      </p>
                    </div>
                  </Col>

                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Subject Teacher<sup>*</sup>
                      </b>

                      <input
                        type="text"
                        name="Subject"
                        {...register('Subject', { required: true })}
                      />
                      <p className="err">
                        {errors.Subject && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Class Name<sup>*</sup>
                      </b>
                      <input
                        type="text"
                        name="className"
                        {...register('className', { required: true })}
                      />
                      <p className="err">
                        {errors.className && '! this field is required'}
                      </p>
                    </div>
                  </Col>

                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Class<sup>*</sup>
                      </b>

                      <input
                        type="text"
                        name="Class"
                        {...register('Class', { required: true })}
                      />
                      <p className="err">
                        {errors.Class && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  {' '}
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
                        type="text"
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
                <Col md={12}>
                  {' '}
                  <div className="inputType">
                    <b>
                      Role<sup>*</sup>
                    </b>
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      options={Role.map((el) => {
                        return { value: el.Role, label: el.Role };
                      })}
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

export default HeadTeacher;
