import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState(null);
  useEffect(() => {
    axios
      .get("/images")
      .then(({ data }) => {
        setImages(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <ImageContext.Provider value={[images, setImages]}>
      {children}
    </ImageContext.Provider>
  );
};
