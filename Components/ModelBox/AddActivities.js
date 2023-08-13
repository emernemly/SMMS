import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { set, useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { addActivities } from '../../Redux/Action/ActivitiesAction';
import { getStudents } from '../../Redux/Action/StudentAction';
import { getClasses } from '../../Redux/Action/ClassAction';
const AddActivities = () => {
  const animatedComponents = makeAnimated();

  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Rolevalue, setRolevalue] = useState('');
  const [Classvalue, setClassvalue] = useState('');
  const [ClassNamevalue, setClassNamevalue] = useState('');

  useEffect(() => {
    dispatch(getStudents());
    dispatch(getClasses());
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const changeHandler = (Rolevalue) => {
    setRolevalue(Rolevalue);
  };
  const changeClassHandler = (Classvalue) => {
    setClassvalue(Classvalue);
  };
  const changeClassNameHandler = (ClassNamevalue) => {
    setClassNamevalue(ClassNamevalue);
  };
  const onSubmits = (data) => {
    dispatch(
      addActivities({
        ...data,
        student: Rolevalue.value,
        class: Classvalue.value,
        className: ClassNamevalue.value,
      })
    );
  };
  const students = useSelector((state) => state.StudentReducer.Students);
  const Classes = useSelector((state) => state.ClassesReducer.Classes);
  return (
    <>
      <Button onClick={() => setLgShow(true)} className="dashboard-btn">
        Add Activities
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
            Add Activities
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
                      <b>
                        student number<sup>*</sup>
                      </b>
                      <input
                        type="text"
                        name="studentNumber"
                        {...register('studentNumber', { required: true })}
                      />
                      <p className="err">
                        {errors.studentNumber && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        student<sup>*</sup>
                      </b>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        options={students.map((el) => {
                          return { value: el.FirstName, label: el.FirstName };
                        })}
                        onChange={changeHandler}
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
                        class<sup>*</sup>
                      </b>

                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        options={Classes.map((el) => {
                          return { value: el.Level, label: el.Level };
                        })}
                        onChange={changeClassHandler}
                      />
                      <p className="err">
                        {errors.class && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        class name <sup>*</sup>
                      </b>

                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        options={Classes.map((el) => {
                          return { value: el.Class, label: el.Class };
                        })}
                        onChange={changeClassNameHandler}
                      />
                      <p className="err">
                        {errors.className && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        activitie<sup>*</sup>
                      </b>

                      <input
                        type="text"
                        name="activitie"
                        {...register('activitie', { required: true })}
                      />
                      <p className="err">
                        {errors.activitie && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        start date<sup>*</sup>
                      </b>
                      <input
                        type="date"
                        name="startDate"
                        {...register('startDate', { required: true })}
                      />
                      <p className="err">
                        {errors.startDate && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    {' '}
                    <div className="inputType">
                      <b>
                        end date<sup>*</sup>
                      </b>
                      <input
                        type="date"
                        name="endDate"
                        {...register('endDate', { required: true })}
                      />
                      <p className="err">
                        {errors.endDate && '! this field is required'}
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

export default AddActivities;
