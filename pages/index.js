import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbarcomponent from '../Components/Navbarcomponent';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Navbarcomponent />
      <section className="container  studentLogin">
        <div className="login">
          <h2>Cloud Education</h2>
          <input type="text" placeholder="User Name" />
          <input type="password" placeholder="Password" />
          <Link href="/StudentParent">
            <button>Login</button>
          </Link>
        </div>
      </section>
    </>
  );
}
