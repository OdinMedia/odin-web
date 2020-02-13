import Layout from '../components/layout';
import Helmet from 'react-helmet'
export default function About() {
  return (
  <Layout>
      <Helmet
        title="About | Odin Media"
        meta={[{ property: 'og:title', content: 'About' }]}
      />
    <div>
        <p>This is the about page</p>
      </div>
  </Layout>
  );
}
