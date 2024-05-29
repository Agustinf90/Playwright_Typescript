import { test, expect } from '../../config/apiContext';
import { getToken } from '../../commands/getToken';
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { uploadBinaryFile } from '../../commands/uploadBinary';
import { uploadMultipartFile } from '../../commands/uploadMultipart';
import { searchFile } from '../../commands/searchFile';

test.describe('Search & Upload Files Suite', () => {
  
  test("Test 2 - Upload Binary File", async ({ apiContext2 }) => {
    await allure.description(
      "This test base is to upload a binary file",
    );
    await allure.story("CRUD Files");
    await allure.suite("Search & Upload Files Suite");
    await allure.tags("Files");
    await allure.severity(Severity.CRITICAL);
    
    const response = await uploadBinaryFile(apiContext2);
    expect(response.status()).toBe(200);

  });

  test("Test 3 - Upload file multipart", async ({ apiContext1 }) => {
    await allure.description(
      "This test base is to upload a file with multipart",
    );
    await allure.story("CRUD Files");
    await allure.suite("Search & Upload Files Suite");
    await allure.tags("Files");
    await allure.severity(Severity.CRITICAL);
    const response = await uploadMultipartFile(apiContext1);
    expect(response.status()).toBe(200);

  });


  test("Test 4 - Search File", async ({ apiContext2 }) => {
    await allure.description(
      "This test base is to search an uploaded file",
    );
    await allure.story("CRUD Files");
    await allure.suite("Search & Upload Files Suite");
    await allure.tags("Files");
    await allure.severity(Severity.MINOR);
    const response = await searchFile(apiContext2);
    expect(response.status()).toBe(200);
    const responseJson = await response.json();
    const lastBasename = responseJson.hits[0]._source.basename;
    expect(lastBasename).toEqual('notice3.png');

  });
});

