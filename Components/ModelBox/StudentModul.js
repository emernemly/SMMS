import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useDispatch } from 'react-redux';
import { changeStudent } from '../../Redux/Action/StudentAction';
const StudentModul = ({ student }) => {
  const dispatch = useDispatch();
  const animatedComponents = makeAnimated();
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = (data) => {
    dispatch(
      changeStudent(
        { ...data, class: className, className: classValue },
        student.id
      )
    );
    handleClose();
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
  const [className, setclassName] = useState(student.class);
  const [classValue, setclassValue] = useState(student.classValue);

  const changeHandlerClassName = (className) => {
    setclassName(className);
  };
  const changeHandlerClassValue = (classValue) => {
    setclassValue(classValue);
  };
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
                    <b>
                      First Name<sup>*</sup>
                    </b>
                    <input
                      type="text"
                      name="FirstName"
                      defaultValue={student.FirstName}
                      {...register('FirstName')}
                    />
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
                      defaultValue={student.middelName}
                      {...register('middelName')}
                    />
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
                      defaultValue={student.lastName}
                      {...register('lastName')}
                    />
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
                        <div>
                          <input
                            type="radio"
                            id="male"
                            {...register('Gender')}
                            value="Male"
                            checked={student.Gender === 'Male'}
                          />
                          <label htmlFor="Male">
                            <b>Male</b>
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="female"
                            {...register('Gender')}
                            value="female"
                            checked={student.Gender === 'Male'}
                          />

                          <label htmlFor="female">
                            <b>Female</b>
                          </label>
                        </div>
                      </div>
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
                        defaultValue={student.Birth}
                        {...register('Birth')}
                      />
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
                        name="GraduationSchool"
                        defaultValue={student.GraduationSchool}
                        {...register('GraduationSchool')}
                      />
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
                        defaultValue={student.GraduationScore}
                        {...register('GraduationScore')}
                      />
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
                        defaultValue={student.StudentNumber}
                        {...register('StudentNumber')}
                      />
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
                        {...register('Street')}
                        defaultValue={student.Street}
                      />
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
                        {...register('City')}
                        defaultValue={student.City}
                      />
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
                        {...register('Zip')}
                        defaultValue={student.Zip}
                      />
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
                        {...register('FatherName')}
                        defaultValue={student.FatherName}
                      />
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
                        {...register('FatherPhone')}
                        defaultValue={student.FatherPhone}
                      />
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
                        {...register('MotherName')}
                        defaultValue={student.MotherName}
                      />{' '}
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
                        {...register(' MotherPhone')}
                        defaultValue={student.MotherPhone}
                      />
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
                        value={classValue}
                        onChange={changeHandlerClassValue}
                        defaultValue={student.class}
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
                        value={className}
                        onChange={changeHandlerClassName}
                        defaultValue={student.className}
                      />
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
                      {...register('userName')}
                      defaultValue={student.userName}
                    />
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
                      {...register('password')}
                      defaultValue={student.password}
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

export default StudentModul;
