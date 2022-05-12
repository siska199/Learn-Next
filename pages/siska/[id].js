export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((dataUser) => {
    return {
      params: { id: dataUser.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log("context: ", context);
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    props: {
      dataDetailUser: data,
    },
  };
};

const Detail = ({ dataDetailUser }) => {
  return (
    <div>
      <h1>Details page</h1>
      <p>{dataDetailUser.name}</p>
      <p>{dataDetailUser.email}</p>
      <p>{dataDetailUser.website}</p>
      <p>{dataDetailUser.address.city}</p>
    </div>
  );
};

export default Detail;
