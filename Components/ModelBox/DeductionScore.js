import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deductionScores } from '../../Redux/Action/DeductionScores';

const DeductionScore = ({ student }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = (data) => {
    console.log(student);
    dispatch(deductionScores(student.id, { ...data, status: 'deduction' }));
    handleClose();
  };
  return (
    <>
      <Button
        onClick={() => setLgShow(true)}
        className="bg-success btn-Setting"
      >
        Deduction
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
                <h2>student moral education deduction scores</h2>
                <Col md={4}>
                  <div className="inputType">
                    <b>
                      semester<sup>*</sup>
                    </b>
                    <input
                      type="text"
                      name="semester"
                      {...register('semester', { required: true })}
                    />
                    <p className="err">
                      {errors.semester && '! this field is required'}
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="inputType">
                    <b>
                      Class Level<sup>*</sup>
                    </b>
                    <input
                      type="text"
                      name="ClassLevel"
                      {...register('ClassLevel', { required: true })}
                    />
                    <p className="err">
                      {errors.ClassLevel && '! this field is required'}
                    </p>
                  </div>
                </Col>
                <Col md={4}>
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
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Student<sup>*</sup>
                      </b>
                      <input
                        type="text"
                        name="Student"
                        {...register('Student', { required: true })}
                      />
                      <p className="err">
                        {errors.Student && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Event Time<sup>*</sup>
                      </b>
                      <input
                        type="date"
                        name="EventTime"
                        {...register('EventTime', { required: true })}
                      />
                      <p className="err">
                        {errors.EventTime && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Point Elements</b>
                      <textarea
                        type="text"
                        name="PointElements"
                        {...register('PointElements', { required: true })}
                      />
                      <p className="err">
                        {errors.PointElements && '! this field is required'}
                      </p>
                    </div>
                  </Col>

                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Details on the situation of the notes</b>

                      <input
                        type="text"
                        name="Details"
                        {...register('Details', { required: true })}
                      />
                      <p className="err">
                        {errors.Details && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>points</b>
                      <input
                        type="number"
                        name="points"
                        {...register('points', { required: true })}
                      />
                      <p className="err">
                        {errors.points && '! this field is required'}
                      </p>
                    </div>
                  </Col>

                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Note</b>

                      <textarea
                        type="email"
                        name="Note"
                        {...register('Note', { required: true })}
                      />
                      <p className="err">
                        {errors.Note && '! this field is required'}
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
                        register<sup>*</sup>
                      </b>
                      <input
                        type="text"
                        name="register"
                        {...register('register', { required: true })}
                      />
                      <p className="err">
                        {errors.register && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                </Row>{' '}
                <button type="sumbit"> Save</button>{' '}
              </Row>
            </section>{' '}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeductionScore;
