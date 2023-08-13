import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateActivities } from '../../Redux/Action/ActivitiesAction';
const EditActivities = ({ Activitie }) => {
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
    dispatch(updateActivities(data, Activitie.id));
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
            Edit Activities
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
                        defaultValue={Activitie.studentNumber}
                        {...register('studentNumber')}
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
                        defaultValue={Activitie.student}
                        {...register('student')}
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
                        defaultValue={Activitie.class}
                        {...register('class')}
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
                        defaultValue={Activitie.className}
                        {...register('className')}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>activitie</b>

                      <input
                        type="text"
                        name="activitie"
                        defaultValue={Activitie.activitie}
                        {...register('activitie')}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>start date</b>
                      <input
                        type="date"
                        name="startDate"
                        defaultValue={Activitie.startDate}
                        {...register('startDate')}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>end date</b>
                      <input
                        type="date"
                        name="endDate"
                        defaultValue={Activitie.endDate}
                        {...register('endDate')}
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

export default EditActivities;
