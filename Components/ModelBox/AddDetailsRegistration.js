import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';

const AddDetailsRegistration = () => {
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
      <Button onClick={() => setLgShow(true)} className="dashboard-btn">
        Add Class Morning Check
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
                        semester<sup>*</sup>
                      </b>
                      <input
                        type="text"
                        name="semester"
                        {...register('semester', { required: true })}
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
                        Class Name<sup>*</sup>
                      </b>

                      <input
                        type="text"
                        name="ClassName"
                        {...register('ClassName', { required: true })}
                      />
                      <p className="err">
                        {errors.ClassName && '! this field is required'}
                      </p>
                    </div>
                  </Col>
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
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        age<sup>*</sup>
                      </b>

                      <input
                        type="number"
                        name="age"
                        {...register('Details', { required: true })}
                      />
                      <p className="err">
                        {errors.age && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Temperature<sup>*</sup>
                      </b>
                      <input
                        type="text"
                        name="Temperature"
                        {...register('Temperature', { required: true })}
                      />
                      <p className="err">
                        {errors.Temperature && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        principal<sup>*</sup>
                      </b>

                      <input
                        type="text"
                        name="principal"
                        {...register('principal', { required: true })}
                      />
                      <p className="err">
                        {errors.principal && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        consultation<sup>*</sup>
                      </b>
                      <input
                        type="number"
                        name="consultation"
                        {...register('consultation', { required: true })}
                      />
                      <p className="err">
                        {errors.consultation && '! this field is required'}
                      </p>
                    </div>
                  </Col>{' '}
                </Row>{' '}
                <Row>
                  {' '}
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Adresse<sup>*</sup>
                      </b>
                      <input
                        type="number"
                        name="Adresse"
                        {...register('Adresse', { required: true })}
                      />
                      <p className="err">
                        {errors.Adresse && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        telephone<sup>*</sup>
                      </b>
                      <input
                        type="number"
                        name="telephone"
                        {...register('telephone', { required: true })}
                      />
                      <p className="err">
                        {errors.telephone && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        recorder<sup>*</sup>
                      </b>
                      <input
                        type="number"
                        name="consultation"
                        {...register('consultation', { required: true })}
                      />
                      <p className="err">
                        {errors.consultation && '! this field is required'}
                      </p>
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

export default AddDetailsRegistration;
