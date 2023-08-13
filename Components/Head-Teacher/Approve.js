import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import { StatusAdding } from '../../Redux/Action/ScoreAdding';
import { useDispatch } from 'react-redux';
import { StatusDeductionScores } from '../../Redux/Action/DeductionScores';
const Approve = ({ Scores }) => {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = () => {
    console.log(Scores);
    if (Scores.status === 'add') {
      dispatch(StatusAdding(Scores, 'approved'));
    } else {
      dispatch(StatusDeductionScores(Scores, 'approved'));
    }
  };
  return (
    <>
      <Button
        onClick={() => setLgShow(true)}
        className="bg-success btn-Setting"
      >
        approved
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
                <h2>student moral education approved scores</h2>
                <Col md={12}>
                  <div className="inputType">
                    <b>
                      Reviews Details<sup>*</sup>
                    </b>
                    <textarea type="text" name="name" />
                  </div>
                </Col>
                <button type="sumbit"> approved</button>{' '}
              </Row>
            </section>{' '}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Approve;
