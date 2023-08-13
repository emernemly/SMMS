import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateOwnClassMorningCheck } from '../../Redux/Action/ClassMorningCheckAction';
const EditeClassMornigCheck = ({ classes }) => {
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
    console.log(classes);
    dispatch(updateOwnClassMorningCheck(classes.id, data));
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
            Edit Class Morning Check
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
                      <b>semester</b>
                      <input
                        type="text"
                        name="semester"
                        {...register('semester')}
                        defaultValue={classes.semester}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Class</b>
                      <input
                        type="text"
                        name="Class"
                        {...register('Class')}
                        defaultValue={classes.Class}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Class Name</b>

                      <input
                        type="text"
                        name="className"
                        {...register('className')}
                        defaultValue={classes.className}
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
                        defaultValue={classes.student}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>age</b>

                      <input
                        type="number"
                        name="age"
                        {...register('age')}
                        defaultValue={classes.age}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Temperature</b>
                      <input
                        type="number"
                        name="Temperature"
                        {...register('Temperature')}
                        defaultValue={classes.Temperature}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>principal</b>

                      <input
                        type="text"
                        name="principal"
                        {...register('principal')}
                        defaultValue={classes.principal}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>consultation</b>
                      <input
                        type="text"
                        name="consultation"
                        {...register('consultation')}
                        defaultValue={classes.consultation}
                      />
                    </div>
                  </Col>{' '}
                </Row>{' '}
                <Row>
                  {' '}
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>Adresse</b>
                      <input
                        type="test"
                        name="Adresse"
                        {...register('Adresse')}
                        defaultValue={classes.Adresse}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>telephone</b>
                      <input
                        type="number"
                        name="telephone"
                        {...register('telephone')}
                        defaultValue={classes.telephone}
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

export default EditeClassMornigCheck;
