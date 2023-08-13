import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarSA from '../../../Components/SideBarSA';
import { set, useForm } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Hoc from '../../../Components/HOC/Hoc';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getClasses } from '../../../Redux/Action/ClassAction';
import { getRoles } from '../../../Redux/Action/RolesAction';
const Teacher = () => {
  const animatedComponents = makeAnimated();

  const [Rolevalue, setRolevalue] = useState('');
  const [className, setclassName] = useState('');
  const [classValue, setclassValue] = useState('');
  const changeHandler = (Rolevalue) => {
    setRolevalue(Rolevalue);
  };
  const changeHandlerClassName = (className) => {
    setclassName(className);
  };
  const changeHandlerClassValue = (classValue) => {
    setclassValue(classValue);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClasses());
    dispatch(getRoles());
  }, []);

  const Role = useSelector((state) => state.RolesReducer.Role);
  const classes = useSelector((state) => state.ClassesReducer.Classes);

  const onSubmits = async (data) => {
    try {
      const found = await axios.get(
        `http://localhost:3000/User?userName=${data.userName}`
      );
      if (!found.data.length) {
        await axios.post('http://localhost:3000/User', {
          ...data,
          Role: Rolevalue.value,
          class: classValue.value,
          className: className.value,
        });
        alert('add Teacher');
      } else {
        alert('user name already exist');
      }
    } catch (error) {
      console.log(error);
    }
  };
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
                            value="Male"
                          />
                          <b>Male</b>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="Gender"
                            {...register('Gender', { required: true })}
                            value="Female"
                          />
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
                        closeMenuOnSelect={true}
                        components={animatedComponents}
                        options={classes.map((el) => {
                          return { value: el.Level, label: el.Level };
                        })}
                        value={classValue}
                        onChange={changeHandlerClassValue}
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
                        options={classes.map((el) => {
                          return { value: el.Class, label: el.Class };
                        })}
                        value={className}
                        onChange={changeHandlerClassName}
                      />
                      {/* <p className="err">
                        {errors.Zip && '! this field is required'}
                      </p> */}
                    </div>
                  </Col>
                </Row>
                <hr></hr>
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

export default Teacher;
