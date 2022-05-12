import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>Siska lists | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi dolore dolorem facere doloribus, aut ex quisquam, omnis error nesciunt culpa vero ipsum excepturi deserunt quod autem repudiandae voluptas accusantium?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id debitis eos sunt molestiae illo aspernatur dolores saepe! Cupiditate dolore eos explicabo quaerat molestiae vel, provident alias nostrum quas labore.</p>
      <Link  href="/siska">
        <a className={styles.btn}>Siska listing</a>
      </Link>
    </>
  );
}
