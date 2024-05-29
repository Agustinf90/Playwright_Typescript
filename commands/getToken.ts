
import config from '../config/config';
import { saveTokenFunction } from '../utils/saveTokenFunction';

export async function getToken(apiContext2: any) {
  const response = await apiContext2.post('v2/token', {
    data: {
      clientId: config.clientId,
      clientSecret: config.clientSecret
    }
  });
  if (!response.ok()) {
    throw new Error('Failed to get token');
  }
  const responseJson = await response.json();
  await saveTokenFunction(responseJson.token);
  return response;
}