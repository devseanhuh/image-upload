import { useState } from "react";
import axios from "axios";
import "./UploadForm.scss";
import { toast } from "material-react-toastify";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const defaultMsg = "이미지 파일을 업로드 해주세요.";
  const [fileName, setFileName] = useState(defaultMsg);

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
      });
      // console.log({ res });
      toast.success("이미지 업로드 성공");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
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
