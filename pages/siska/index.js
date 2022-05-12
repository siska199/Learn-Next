import Head from "next/head";
import styles from "../../styles/Siska.module.css"
import Link from 'next/link'


export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Test = ({ data }) => {
  return (
    <>
      <Head>
        <title>Siska lists | List siska</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1>All siska likes</h1>
      {data.map((dataUser,i) => (
        <Link href={`/siska/${dataUser.id}`} key={dataUser.id}>
          <a className={styles.single}>
            <h3>{dataUser.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Test;
