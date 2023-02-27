import React from 'react';
import Navbarcomponent from '../../Components/Navbarcomponent';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const HeadTeacher = () => {
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
          <h2>Head Teacher</h2>
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
          <Link href="/Head-Teacher">
            <button>Login</button>
          </Link>
        </form>
      </section>
    </>
  );
};

export default HeadTeacher;
