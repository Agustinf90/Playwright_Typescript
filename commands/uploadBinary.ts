import fs from "fs";
import path from "path";
import config from '../config/config';
export async function uploadBinaryFile(apiContext2: any) {

  const file = path.resolve('./utils/notice3.png');
  const image = fs.readFileSync(file);

  const url = 'v2/files/upload?filename=/notice3.png';

  const response = await apiContext2.post(url, {
    headers: {
      Accept: "*/*",
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${config.TOKEN}`
    },
    data: image, 
  });
  return response;

}