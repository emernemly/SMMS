import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbarcomponent from '../Components/Navbarcomponent';
import styles from '../styles/Home.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { signInStudent } from '../Redux/Action/StudentAction';
export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = (data) => {
    dispatch(signInStudent(data, router));
  };
  return (
    <>
      <Navbarcomponent />
      <form onSubmit={handleSubmit(onSubmits)}>
        <section className="container  studentLogin">
          <div className="login">
            <h2>Cloud Education</h2>
            <input
              type="text"
              placeholder="User Name"
              {...register('userName', { required: true })}
            />
            <p className="err">
              {errors.userName && '! this field is required'}
            </p>
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
            />
            <p className="err">
              {errors.password && '! this field is required'}
            </p>

            <button>Login</button>
          </div>
        </section>
      </form>
    </>
  );
}
