import Link from 'next/link';
import React from 'react';
import Navbarcomponent from '../../Components/Navbarcomponent';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Redux/Action/UserActions';
const LoginAd = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = (data) => {
    dispatch(signIn(data, router));
  };
  return (
    <>
      <Navbarcomponent />
      <section className="container  studentLogin">
        <form className="login" onSubmit={handleSubmit(onSubmits)}>
          <h2>System Adminstrator</h2>
          <input
            type="text"
            placeholder="User Name"
            name="userName"
            {...register('userName', { required: true })}
          />
          <p className="err">{errors.userName && '! this field is required'}</p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            {...register('password', { required: true })}
          />
          <p className="err">{errors.password && '! this field is required'}</p>

          <button type="sumbit">Login</button>
        </form>
      </section>
    </>
  );
};

export default LoginAd;
