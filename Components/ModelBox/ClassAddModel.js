import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import { addClasses } from '../../Redux/Action/ClassAction';
import { useDispatch } from 'react-redux';

const ClassAddModel = () => {
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
    console.log(data);
    dispatch(addClasses(data));
    handleClose();
  };

  return (
    <>
      <Button onClick={() => setLgShow(true)} className="dashboard-btn">
        Add Class
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
                <Row>
                  {' '}
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Level<sup>*</sup>
                      </b>
                      <input
                        type="text"
                        name="Level"
                        {...register('Level', { required: true })}
                      />
                      <p className="err">
                        {errors.Level && '! this field is required'}
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
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        the time of the event<sup>*</sup>
                      </b>

                      <input
                        type="date"
                        name="timeEvent"
                        {...register('timeEvent', { required: true })}
                      />
                      <p className="err">
                        {errors.time && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        deserved<sup>*</sup>
                      </b>
                      <input
                        type="text"
                        name="deserved"
                        {...register('deserved', { required: true })}
                      />
                      <p className="err">
                        {errors.deserved && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Details<sup>*</sup>
                      </b>

                      <input
                        type="number"
                        name="Details"
                        {...register('Details', { required: true })}
                      />
                      <p className="err">
                        {errors.Details && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Noticed<sup>*</sup>
                      </b>
                      <input
                        type="text"
                        name="Noticed"
                        {...register('Noticed', { required: true })}
                      />
                      <p className="err">
                        {errors.Noticed && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Recorder<sup>*</sup>
                      </b>

                      <input
                        type="text"
                        name="recorder"
                        {...register('recorder', { required: true })}
                      />
                      <p className="err">
                        {errors.recorder && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        time to record<sup>*</sup>
                      </b>
                      <input
                        type="date"
                        name="timeRecord"
                        {...register('timeRecord', { required: true })}
                      />
                      <p className="err">
                        {errors.record && '! this field is required'}
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

export default ClassAddModel;
