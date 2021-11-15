import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

const ImageList = () => {
  const [images] = useContext(ImageContext);

  const imageList = images?.map((img) => (
    <img
      key={img.key}
      src={`http://localhost:5050/uploads/${img.key}`}
      style={{ width: "100%" }}
    />
  ));
  return <div style={{ margin: "10px 0" }}>{imageList}</div>;
};

export default ImageList;
