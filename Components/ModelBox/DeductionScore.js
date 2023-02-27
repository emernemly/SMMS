import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';

const DeductionScore = () => {
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
                    <input type="text" name="name" />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="inputType">
                    <b>
                      Class Level<sup>*</sup>
                    </b>
                    <input type="text" name="middelName" />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="inputType">
                    <b>
                      Class<sup>*</sup>
                    </b>
                    <input type="text" name="lastName" />
                  </div>
                </Col>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Student<sup>*</sup>
                      </b>
                      <input type="text" name="Student" />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Event Time<sup>*</sup>
                      </b>
                      <input type="date" name="date" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Point Elements</b>
                      <textarea type="text" name="Educational" />
                    </div>
                  </Col>

                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Details on the situation of the notes</b>

                      <input type="email" name="Subject" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>points</b>
                      <input type="number" name="className" />
                    </div>
                  </Col>

                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Note</b>

                      <textarea type="email" name="Class" />
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
                      <input type="text" name="City" />
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
