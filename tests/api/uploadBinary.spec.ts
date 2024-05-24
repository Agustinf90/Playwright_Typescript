import { test, expect } from '../../config/apiContext';
import { uploadBinaryFile } from '../../commands/uploadBinary';

test("POST: Upload a Binary File", async ({ apiContext2 }) => {
  const response = await uploadBinaryFile(apiContext2);
  expect(response.status()).toBe(200);
});
