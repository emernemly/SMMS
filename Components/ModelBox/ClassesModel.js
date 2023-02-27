import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';

const ClassesModel = () => {
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
                <Row>
                  {' '}
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Level</b>
                      <input type="text" name="Level" />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Class</b>
                      <input type="text" name="Class" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>the time of the event </b>

                      <input type="text" name="time" />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>deserved</b>
                      <input type="text" name="deserved" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Details</b>

                      <input type="number" name="Details" />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Noticed</b>
                      <input type="text" name="Noticed" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Recorder</b>

                      <input type="text" name="recorder" />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>time to record</b>
                      <input type="number" name="record" />
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

export default ClassesModel;
