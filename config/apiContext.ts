import { request, APIRequestContext, test as base, expect } from '@playwright/test';


interface MyAPIRequestContext extends APIRequestContext {
  post: (url: string, options?: object) => Promise<any>; 
}


type MyFixtures = {
  apiContext1: MyAPIRequestContext; 
  apiContext2: MyAPIRequestContext; 
};


const test = base.extend<MyFixtures>({
  apiContext1: async ({}, use) => {
    const apiContext1 = await request.newContext({
      baseURL: 'https://upload.uploadcare.com/base/',
    });

    await use(apiContext1);
    await apiContext1.dispose();
  },
  apiContext2: async ({}, use) => {
    const apiContext2 = await request.newContext({
      baseURL: 'https://api.sirv.com/',
    });

    await use(apiContext2);
    await apiContext2.dispose();
  },
});
export { test, expect };
