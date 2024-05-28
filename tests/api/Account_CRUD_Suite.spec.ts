import { test, expect } from '../../config/apiContext';
import { createAccount } from '../../commands/createAccount';
import { updateAccount } from '../../commands/updateAccount';
import { deleteAccount } from '../../commands/deleteAccount';
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";

test.describe('Account Crud Suite', () => {

  test('Test 1 - Create Account', async ({ apiContext3 }) => {
    await allure.description(
      "This test ensures creation of a new account",
    );
    await allure.story("CRUD Account");
    await allure.suite("Account Suite");
    await allure.tags("Account");
    await allure.severity(Severity.BLOCKER);

    const response = await createAccount(apiContext3);
    await allure.step("Status 200 check", async () => {
      expect(response.status()).toBe(200);
    });
    const responseJson = await response.json();
    const message = responseJson.message;
    await allure.step("Correct Message user created", async () => {
      expect(message).toEqual("User created!");
    });

  }); 

  test('Test 2 - Update Account', async ({ apiContext3 }) => {
    await allure.description(
      "This test ensures the update of of an existing account",
    );
    await allure.story("CRUD Account");
    await allure.suite("Account Suite");
    await allure.tags("Account");
    await allure.severity(Severity.NORMAL);
    const response = await updateAccount(apiContext3);
    expect(response.status()).toBe(200);
    const responseJson = await response.json();
    const message = responseJson.message;
    expect(message).toEqual("User updated!");

  });

  test('Test 3 - Delete Account', async ({ apiContext3 }) => {
    await allure.description(
      "This test ensures the deletion of of an existing account",
    );
    await allure.story("CRUD Account");
    await allure.suite("Account Suite");
    await allure.tags("Account");
    await allure.severity(Severity.NORMAL);
    const response = await deleteAccount(apiContext3);
    expect(response.status()).toBe(200);
    const responseJson = await response.json();
    const message = responseJson.message;
    expect(message).toEqual("Account deleted!");
    
  });
});