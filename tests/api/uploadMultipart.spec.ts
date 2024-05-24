import { test, expect } from '../../config/apiContext';
import { uploadMultipartFile } from '../../commands/uploadMultipart';

test("POST: Upload file multipart", async ({ apiContext1 }) => {
  const response = await uploadMultipartFile(apiContext1);
  expect(response.status()).toBe(200);
});

