import UploadForm from "./components/UploadForm";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import ImageList from "./components/ImageList";

const App = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>사진첩</h2>
      <UploadForm />
      <ImageList />
      <ToastContainer />
    </div>
  );
};

export default App;
