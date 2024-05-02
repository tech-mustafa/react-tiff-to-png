import UTIF from "utif";

export const getImages = (data) => {
  try {
    let urls = [];
    var ifds = UTIF.decode(data);
    for (let i = 0; i < ifds.length; i++) {
      const ifd = ifds[i];
      UTIF.decodeImage(data, ifd);
      var rgba = UTIF.toRGBA8(ifd);
      var canvas = document.createElement("canvas");
      canvas.width = ifd.width;
      canvas.height = ifd.height;
      var ctx = canvas.getContext("2d");
      var img = ctx.createImageData(ifd.width, ifd.height);
      img.data.set(rgba);
      ctx.putImageData(img, 0, 0);
      const dataUrl = canvas.toDataURL();
      urls.push(dataUrl);
    }
    return urls;
  } catch (err) {
    console.log("err: ", err);
    throw new Error(err);
  }
};
