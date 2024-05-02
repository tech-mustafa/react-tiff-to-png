import { getImages } from "../utils/Helpers";

const convert = (blob) => {
  return new Promise((resolve, reject) => {
    try {
      var reader = new FileReader();

      reader.onload = function (event) {
        var data = event.target.result;
        const consvertedUrls = getImages(data);
        resolve(consvertedUrls);
      };

      reader.onerror = function (e) {
        reject(e.target.error);
      };

      reader.readAsArrayBuffer(blob);
    } catch (error) {
      reject(error);
    }
  });
};

export default convert;
