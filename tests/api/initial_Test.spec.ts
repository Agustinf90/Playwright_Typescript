import { test, expect } from '../../config/apiContext';
import { getToken } from '../../commands/getToken';
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";

  test('Test 1 - Get and save token', async ({ apiContext2 }) => {
    await allure.description(
      "This test gets token and saves for next tests",
    );
    await allure.story("CRUD Files");
    await allure.suite("Search & Upload Files Suite");
    await allure.tags("Files");
    await allure.severity(Severity.BLOCKER);
    const response = await getToken(apiContext2);
    expect(response.status()).toBe(200);

  });