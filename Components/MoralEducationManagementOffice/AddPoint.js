import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ScoreAdding } from '../../Redux/Action/ScoreAdding';
const AddPoint = ({ student }) => {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = (data) => {
    dispatch(ScoreAdding(data, student.id));
    handleClose();
  };
  return (
    <>
      <Button
        onClick={() => setLgShow(true)}
        className="bg-primary btn-Setting"
      >
        Add
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
                <h2> Add student moral education scores</h2>
                <Col md={12}>
                  <div className="inputType">
                    <b>
                      {' '}
                      Moral Education Score<sup>*</sup>
                    </b>
                    <input
                      type="number"
                      name="score"
                      {...register('score', { required: true })}
                    />
                    <p className="err">
                      {errors.score && '! this field is required'}
                    </p>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="inputType">
                    <b>
                      Note<sup>*</sup>
                    </b>
                    <textarea
                      type="number"
                      name="note"
                      {...register('note', { required: true })}
                    />
                    <p className="err">
                      {errors.note && '! this field is required'}
                    </p>
                  </div>
                </Col>
                <button type="sumbit"> Save</button>{' '}
              </Row>
            </section>{' '}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddPoint;
