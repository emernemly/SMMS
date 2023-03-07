import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
const AddLeaveRequest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = (data) => {
    console.log(data);
  };
  const [PickDate, setPickDate] = useState(false);
  return (
    <Row>
      {' '}
      <Col lg={12} className="dashboardContent">
        <form onSubmit={handleSubmit(onSubmits)}>
          <section className="formInput">
            <Row>
              <h2>Leave Request</h2>

              <Row>
                <Col md={12}>
                  {' '}
                  <div className="inputType">
                    <b>
                      Number of Days<sup>*</sup>
                    </b>

                    <div className="radioType">
                      {' '}
                      <div>
                        <input
                          type="radio"
                          name="Gender"
                          value="Single"
                          defaultChecked
                          onClick={(e) => setPickDate(e.target.value)}
                          {...register('Gender', { required: true })}
                        />
                        <b>Leave for Single Day</b>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="Gender"
                          {...register('Gender', { required: true })}
                          value="Multiple"
                          onClick={(e) => setPickDate(e.target.value)}
                        />
                        <b>Leave for Multiple Days</b>
                      </div>
                    </div>
                    <p className="err">
                      {errors.lastName && '! this field is required'}
                    </p>
                  </div>
                </Col>
                {PickDate === 'Multiple' ? (
                  <Row>
                    <Col md={12}>
                      {' '}
                      <div className="inputType">
                        <b>
                          Start Day<sup>*</sup>
                        </b>
                        <input
                          type="date"
                          name="date"
                          {...register('date', { required: true })}
                        />
                        <p className="err">
                          {errors.date && '! this field is required'}
                        </p>
                      </div>
                    </Col>
                    <Col md={12}>
                      {' '}
                      <div className="inputType">
                        <b>
                          End Day<sup>*</sup>
                        </b>
                        <input
                          type="date"
                          name="date"
                          {...register('date', { required: true })}
                        />
                        <p className="err">
                          {errors.date && '! this field is required'}
                        </p>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  <Col md={12}>
                    {' '}
                    <div className="inputType">
                      <b>
                        Leave Date<sup>*</sup>
                      </b>

                      <input
                        type="date"
                        name="Email"
                        {...register('Email', { required: true })}
                      />
                      <p className="err">
                        {errors.Email && '! this field is required'}
                      </p>
                    </div>
                  </Col>
                )}
              </Row>
              <Row>
                <Col md={12}>
                  {' '}
                  <div className="inputType">
                    <b>
                      Reason<sup>*</sup>
                    </b>
                    <textarea
                      type="number"
                      name="number"
                      {...register('number', { required: true })}
                    />
                    <p className="err">
                      {errors.number && '! this field is required'}
                    </p>
                  </div>
                </Col>
              </Row>
            </Row>
            <Row>
              <button type="sumbit"> Save</button>{' '}
            </Row>
          </section>{' '}
        </form>
      </Col>
    </Row>
  );
};

export default AddLeaveRequest;
