import Layout from "../components/layout";
import Helmet from 'react-helmet'
const Home = () => (
  <Layout>
    <Helmet
      title="Login | Odin Media"
      meta={[{ property: 'og:title', content: 'Login' }]}
    />
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-sm">
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Username
            </label>
            <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Password
            </label>
            <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <p className="text-xs italic text-red-500">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded flex-0 hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <div  className="flex-1">
            <a className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" href="#">
              Forgot Password?
            </a>
            <a className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" href="#">
              Forgot Password?
            </a>
            </div>
          </div>
        </form>
        <p className="text-xs text-center text-gray-500">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  </Layout>
);

export default Home;
