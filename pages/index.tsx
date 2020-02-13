import Layout from "../components/layout";
import Helmet from 'react-helmet'
const Home = () => (
  <Layout>
    <Helmet
      title="Home | Odin Media"
      meta={[{ property: 'og:title', content: 'Home' }]}
    />
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Odin Media</h1>
      <h2>The Perfect Media Sever</h2>

      <div className="flex mt-8">
        <a href="https://github.com/OdinMedia" className="mx-4">
          <button type="button" className="btn btn-primary">
            Read More
          </button>
        </a>
        <a href="https://github.com/OdinMedia" className="mx-4">
          <button type="button" className="btn btn-secondary">
            Github
          </button>
        </a>
      </div>
    </div>
  </Layout>
);

export default Home;
