import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AddLeaves } from '../../Redux/Action/LeavesAction';
const AddLeaveRequest = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = (data) => {
    dispatch(AddLeaves(data));
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
                        />
                        <b>Leave for Single Day</b>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="Gender"
                          value="Multiple"
                          onClick={(e) => setPickDate(e.target.value)}
                        />
                        <b>Leave for Multiple Days</b>
                      </div>
                    </div>
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
                          name="StartDay"
                          {...register('StartDay')}
                        />
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
                          name="EndDay"
                          {...register('EndDay')}
                        />
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
                        name="StartDay"
                        {...register('StartDay')}
                      />
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
                      type="text"
                      name="reason"
                      {...register('reason', { required: true })}
                    />
                    <p className="err">
                      {errors.reason && '! this field is required'}
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
