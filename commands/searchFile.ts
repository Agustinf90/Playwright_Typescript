import fs from "fs";
import path from "path";
import config from '../config/config';
export async function searchFile(apiContext2: any) {

  const file = path.resolve('./utils/notice3.png');
  const image = fs.readFileSync(file);

  const url = 'v2/files/search';

  const response = await apiContext2.post(url, {
    headers: {
      Accept: "*/*",
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${config.TOKEN}`
    },
    data: {"query":"extension:.png AND mtime:[now-30d TO now] AND -dirname:\\/.Trash","sort":{"filename.raw":"asc"},"from":0,"size":5} 
  });
  return response;

}