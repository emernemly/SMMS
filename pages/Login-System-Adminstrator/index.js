import Link from 'next/link';
import React from 'react';
import Navbarcomponent from '../../Components/Navbarcomponent';
import { useForm } from 'react-hook-form';
import { Hoc } from '../../Components/HOC/Hoc';
const LoginAd = () => {
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
      <Navbarcomponent />
      <section className="container  studentLogin">
        <form className="login" onSubmit={handleSubmit(onSubmits)}>
          <h2>System Adminstrator</h2>
          <input
            type="text"
            placeholder="User Name"
            name="userName"
            {...register('userName')}
          />
          <p className="err">{errors.userName && '! this field is required'}</p>
          <input
            type="password"
            placeholder="Password"
            name="Password"
            {...register('Password')}
          />
          <p className="err">{errors.Password && '! this field is required'}</p>
          <Link href="/Dashboard-System-Administrator">
            <button>Login</button>
          </Link>
        </form>
      </section>
    </>
  );
};

export default LoginAd;
