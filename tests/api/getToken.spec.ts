import { test, expect } from '../../config/apiContext';
import { getToken } from '../../commands/getToken';

test('Test base - Get and save token', async ({ apiContext2 }) => {
  const response = await getToken(apiContext2);
  expect(response.status()).toBe(200);

});
