import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import makeAnimated from 'react-select/animated';
const StudentSelect = () => {
  const animatedComponents = makeAnimated();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmits)}>
      <section className="formInput">
        <Row>
          <h2>Student Select</h2>
          <Col md={4}>
            <div className="inputType">
              <b>
                Student Number<sup>*</sup>
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
          <Col md={4}>
            <div className="inputType">
              <b>
                Student Name<sup>*</sup>
              </b>
              <input
                type="text"
                name="StudentName"
                {...register('StudentName', { required: true })}
              />
              <p className="err">{errors.Date && '! this field is required'}</p>
            </div>
          </Col>
          <Col md={4}>
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
        </Row>
        <Row>
          <button type="sumbit"> Save</button>{' '}
        </Row>
      </section>{' '}
    </form>
  );
};

export default StudentSelect;
