import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateHeterogeneity } from '../../Redux/Action/HeterogeneityAction';
const EditHeterogeneity = ({ Heterogeneity }) => {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const distapch = useDispatch();
  const handleClose = () => setLgShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = (data) => {
    distapch(updateHeterogeneity(Heterogeneity.id, data));
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
                        defaultValue={Heterogeneity.studentNumber}
                      />
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
                        defaultValue={Heterogeneity.student}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>class</b>

                      <input
                        type="text"
                        name="class"
                        {...register('class')}
                        defaultValue={Heterogeneity.class}
                      />
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
                        defaultValue={Heterogeneity.className}
                      />
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
                        defaultValue={Heterogeneity.Heterogeneity}
                      />
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
                        defaultValue={Heterogeneity.SituationDetails}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Time Registration<sup>*</sup>
                      </b>
                      <input
                        type="text"
                        name="TimeRegistration"
                        {...register('TimeRegistration', { required: true })}
                        defaultValue={Heterogeneity.TimeRegistration}
                      />
                    </div>
                  </Col>
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
