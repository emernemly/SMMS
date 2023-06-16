import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeHeadTeacher } from '../../Redux/Action/HeadTeacherAction';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { changeTeacher } from '../../Redux/Action/TeacherAction';

const TeacherModul = ({ ownTeacher }) => {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [className, setclassName] = useState({ value: ownTeacher.className });
  const [classValue, setclassValue] = useState({ value: ownTeacher.class });
  const dispatch = useDispatch();
  const handleClose = () => setLgShow(false);
  const handleShow = () => setShow(true);
  const animatedComponents = makeAnimated();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = (data) => {
    dispatch(
      changeTeacher(
        {
          ...data,
          class: classValue.value,
          className: className.value,
          Role: 'teacher',
        },
        ownTeacher.id
      )
    );
    handleClose();
  };
  const changeHandlerClassName = (className) => {
    setclassName(className);
  };
  const changeHandlerClassValue = (classValue) => {
    setclassValue(classValue);
  };
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
  return (
    <>
      <Button
        onClick={() => setLgShow(true)}
        className="bg-success btn-Setting"
      >
        Edit
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmits)}>
            <section className="formInput">
              <Row>
                <h2>Personal Information</h2>
                <Col md={4}>
                  <div className="inputType">
                    <b>First Name</b>
                    <input
                      type="text"
                      name="FirstName"
                      defaultValue={ownTeacher.FirstName}
                      {...register('FirstName')}
                    />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="inputType">
                    <b>Middel Name</b>
                    <input
                      type="text"
                      name="middelName"
                      defaultValue={ownTeacher.middelName}
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
                      defaultValue={ownTeacher.lastName}
                      {...register('lastName')}
                    />
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
                            value="Male"
                            defaultValue={ownTeacher.Gender}
                            checked={
                              ownTeacher.Gender === 'Male' ? true : false
                            }
                          />
                          <b>Male</b>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="Gender"
                            {...register('Gender')}
                            value="Female"
                            defaultValue={ownTeacher.Gender}
                            checked={
                              ownTeacher.Gender === 'Female' ? true : false
                            }
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
                      <input
                        type="date"
                        name="Birth"
                        defaultValue={ownTeacher.Birth}
                        {...register('Birth')}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Educational Institution</b>
                      <input
                        type="text"
                        name="Educational"
                        defaultValue={ownTeacher.Educational}
                        {...register('Educational')}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Subject Teacher</b>

                      <input
                        type="text"
                        name="Subject"
                        defaultValue={ownTeacher.Subject}
                        {...register('Subject')}
                      />
                    </div>
                  </Col>
                </Row>
                <Row></Row>
                <Row>
                  {' '}
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>City</b>
                      <input
                        type="text"
                        name="City"
                        defaultValue={ownTeacher.City}
                        {...register('City')}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Zip/Postal Code</b>

                      <input
                        type="text"
                        name="Zip"
                        defaultValue={ownTeacher.Zip}
                        {...register('Zip')}
                      />
                    </div>
                  </Col>
                </Row>{' '}
              </Row>
              <Row>
                <h2>Class Information</h2>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>Class Name</b>
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      options={Permissions.map((el) => {
                        return { value: el.title, label: el.title };
                      })}
                      value={className}
                      onChange={changeHandlerClassName}
                    />
                  </div>
                </Col>

                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>Class</b>

                    <Select
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      options={Permissions.map((el) => {
                        return { value: el.title, label: el.title };
                      })}
                      value={classValue}
                      onChange={changeHandlerClassValue}
                    />
                  </div>
                </Col>
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
                      defaultValue={ownTeacher.userName}
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
                      defaultValue={`${ownTeacher.password}`}
                      {...register('password')}
                    />
                  </div>
                </Col>{' '}
                <button type="sumbit"> Save</button>{' '}
              </Row>
            </section>{' '}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TeacherModul;
