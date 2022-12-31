import { ToastContainer } from "react-toastify";
import { RegisterPage } from "./pages/RegisterPage";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <ToastContainer />
      <RegisterPage />
      <ToastContainer />
    </>
  );
};
