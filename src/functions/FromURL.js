import axios from "axios";
import { getImages } from "../utils/Helpers";

const convert = (imageUrl) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(imageUrl, { responseType: "arraybuffer" })
        .then((res) => {
          const data = res.data;
          const consvertedUrls = getImages(data);
          resolve(consvertedUrls);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export default convert;
