import { useState } from "react";
import axios from "axios";
import "./UploadForm.scss";
import { toast } from "material-react-toastify";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const defaultMsg = "이미지 파일을 업로드 해주세요.";
  const [fileName, setFileName] = useState(defaultMsg);
  const [percent, setPercent] = useState(0);

  const onChangeInput = (e) => {
    const img = e.target.files[0];
    setFile(img);
    setFileName(img.name);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (e) => {
          setPercent(Math.round((e.loaded / e.total) * 100));
        },
      });
      // console.log({ res });
      toast.success("이미지 업로드 성공");
      setTimeout(() => {
        setPercent(0);
        setFileName(defaultMsg);
      }, 3000);
    } catch (err) {
      console.error(err);
      toast.error(err.message);
      setPercent(0);
      setFileName(defaultMsg);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <ProgressBar percent={percent} />
      <div className="file-dropper">
        <label htmlFor="image">{fileName}</label>
        <input id="image" type="file" onChange={onChangeInput} />
      </div>
      <button type="submit" className="button">
        제출
      </button>
    </form>
  );
};

export default UploadForm;
