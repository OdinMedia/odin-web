import Layout from "../../components/layout";

export default function About() {
  return (
  <Layout>
    <div>
        <p>This is the about page</p>
        <style jsx>{`
          p {
            color: red;
          }
        `}</style>
      </div>
  </Layout>
  );
}
