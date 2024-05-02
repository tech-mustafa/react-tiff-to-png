import { getImages } from "../utils/Helpers";

const convert = (buffer) => {
  return new Promise((resolve, reject) => {
    try {
      const consvertedUrls = getImages(buffer);
      resolve(consvertedUrls);
    } catch (error) {
      reject(error);
    }
  });
};

export default convert;
