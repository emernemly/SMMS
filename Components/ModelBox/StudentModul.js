import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';

const StudentModul = () => {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = (data) => {
    console.log(data);
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
                    <input type="text" name="name" />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="inputType">
                    <b>Middel Name</b>
                    <input type="text" name="middelName" />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="inputType">
                    <b>Last Name</b>
                    <input type="text" name="lastName" />
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
                          <input type="radio" name="Gender" /> <b>Male</b>
                        </div>
                        <div>
                          <input type="radio" name="Gender" /> <b>female</b>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Date of Birth</b>
                      <input type="date" name="date" />
                    </div>
                  </Col>
                </Row>{' '}
                <Row>
                  {' '}
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Graduation School</b>
                      <input type="text" name="School" />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Graduation total score</b>
                      <input type="text" name="GraduationScore" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>level of study</b>

                      <input type="text" name="study" />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>class</b>
                      <input type="text" name="class" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Student Number</b>

                      <input type="number" name="StudentNumber" />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Street</b>
                      <input type="text" name="Street" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>City</b>

                      <input type="text" name="City" />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Zip/Postal Code</b>
                      <input type="number" name="Zip" />
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

                    <input type="text" name="userName" />
                  </div>
                </Col>
                <Col md={6}>
                  {' '}
                  <div className="inputType">
                    <b>Password</b>
                    <input type="password" name="password" />
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
