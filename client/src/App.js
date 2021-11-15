import UploadForm from "./components/UploadForm";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <h2>사진첩</h2>
      <UploadForm />
      <ToastContainer />
    </>
  );
};

export default App;
