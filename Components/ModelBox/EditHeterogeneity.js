import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
const EditHeterogeneity = () => {
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
          <Modal.Title id="example-modal-sizes-title-lg">
            {' '}
            Edit Student Heterogeneity
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmits)}>
            <section className="formInput">
              <Row>
                <Row>
                  {' '}
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>student number</b>
                      <input
                        type="text"
                        name="studentNumber"
                        {...register('studentNumber')}
                      />
                      <p className="err">
                        {errors.studentNumber && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>student</b>
                      <input
                        type="text"
                        name="student"
                        {...register('student')}
                      />
                      <p className="err">
                        {errors.Class && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>class</b>

                      <input type="text" name="class" {...register('class')} />
                      <p className="err">
                        {errors.class && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>class name</b>
                      <input
                        type="text"
                        name=" className "
                        {...register('className')}
                      />
                      <p className="err">
                        {errors.className && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Heterogeneity</b>

                      <input
                        type="text"
                        name="Heterogeneity"
                        {...register('Heterogeneity')}
                      />
                      <p className="err">
                        {errors.Heterogeneity && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Situation Details</b>

                      <textarea
                        type="text"
                        name="SituationDetails"
                        {...register('SituationDetails')}
                      />
                      <p className="err">
                        {errors.SituationDetails && '! this field is required'}
                      </p>
                    </div>
                  </Col>

                  {/*                    <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Time Registration<sup>*</sup>
                      </b>
                      <input
                        type="text"
                        name="date"
                        {...register('date', { required: true })}
                      />
                      <p className="err">
                        {errors.date && '! this field is required'}
                      </p>
                    </div>
                  </Col>  */}
                </Row>
                <button type="sumbit"> Save</button>{' '}
              </Row>
            </section>{' '}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditHeterogeneity;
