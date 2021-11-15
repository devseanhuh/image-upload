import { useState } from "react";
import axios from "axios";

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
      console.log({ res });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label htmlFor="image">{fileName}</label>
      <input id="image" type="file" onChange={onChangeInput} />
      <button type="submit">제출</button>
    </form>
  );
};

export default UploadForm;
