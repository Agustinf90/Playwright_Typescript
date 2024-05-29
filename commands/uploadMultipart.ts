import fs from "fs";
import path from "path";
import config from '../config/config';

export async function uploadMultipartFile(apiContext1: any) {
  const file = path.resolve('./utils/notice3.png');
  const image = fs.readFileSync(file);
  const url = '';

  const response = await apiContext1.post(url, {
    headers: {
      Accept: "*/*",
      ContentType: "multipart/form-data",
    },
    multipart: {
      UPLOADCARE_PUB_KEY: config.PUBLIC_KEY,
      file: {
        name: file,
        mimeType: "image/png",
        buffer: image,
      },
      title: "Logo of Business",
    },
  });

  return response;
}
