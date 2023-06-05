import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeHeadTeacher } from '../../Redux/Action/HeadTeacherAction';

const HeadTeacherModul = ({ ownheadTeacher }) => {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setLgShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = (data) => {
    dispatch(changeHeadTeacher(data, ownheadTeacher.id));
    handleClose();
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
                    <b>First Name</b>
                    <input
                      type="text"
                      name="FirstName"
                      defaultValue={ownheadTeacher.FirstName}
                      {...register('FirstName')}
                    />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="inputType">
                    <b>Middel Name</b>
                    <input
                      type="text"
                      name="MiddelName"
                      defaultValue={ownheadTeacher.MiddelName}
                      {...register('MiddelName')}
                    />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="inputType">
                    <b>Last Name</b>
                    <input
                      type="text"
                      name="LastName"
                      defaultValue={ownheadTeacher.LastName}
                      {...register('LastName')}
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
                          />
                          <b>Male</b>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="Gender"
                            {...register('Gender')}
                            value="female"
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
                        defaultValue={ownheadTeacher.Birth}
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
                        defaultValue={ownheadTeacher.Educational}
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
                        defaultValue={ownheadTeacher.Subject}
                        {...register('Subject')}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Class Name</b>
                      <input
                        type="text"
                        name="className"
                        defaultValue={ownheadTeacher.className}
                        {...register('className')}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Class</b>

                      <input
                        type="text"
                        name="Class"
                        defaultValue={ownheadTeacher.Class}
                        {...register('Class')}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  {' '}
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>City</b>
                      <input
                        type="text"
                        name="City"
                        defaultValue={ownheadTeacher.City}
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
                        defaultValue={ownheadTeacher.Zip}
                        {...register('Zip')}
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
                      name="UserName"
                      defaultValue={ownheadTeacher.UserName}
                      {...register('UserName')}
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
                      defaultValue={`${ownheadTeacher.password}`}
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

export default HeadTeacherModul;
