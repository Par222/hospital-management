import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "../store/auth-context";
import AppointmentContext from "../components/context/AppointmentContext";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <AppointmentContext>
        <Component {...pageProps} />
      </AppointmentContext>
    </AuthContextProvider>
  );
}

export default MyApp;
