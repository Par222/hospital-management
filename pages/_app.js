import '../styles/globals.css'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {AuthContextProvider} from "../store/auth-context"
import Layout from '../components/Layout';
function MyApp({ Component, pageProps }) {
 
  return <AuthContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AuthContextProvider>
}

export default MyApp
