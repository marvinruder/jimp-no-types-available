import Jimp from "jimp";

try {
  Jimp.thisFunctionDoesNotExist();
} catch (err) {
  console.log("This function does not exist, but Typescript does not throw an error.");
}

Jimp.read("lenna.png")
  .then((lenna) => {
    return lenna
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      .greyscale() // set greyscale
      .write("lenna-small-bw.jpg"); // save
  })
  .catch((err) => {
    console.error(err);
  });
