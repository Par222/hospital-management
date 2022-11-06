import '../styles/globals.css'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {AuthContextProvider} from "../store/auth-context"
import Layout from '../components/Layout';
function MyApp({ Component, pageProps }) {
 
  return <AuthContextProvider>
   
      <Component {...pageProps} />
  
  </AuthContextProvider>
}

export default MyApp
