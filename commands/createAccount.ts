
export async function createAccount(apiContext3: any) {
  const url = '/api/createAccount?';

  const response = await apiContext3.post(url, {
    headers: {
      Accept: "*/*",
      ContentType: "multipart/form-data",
    },
    multipart: {
      name: 'gus',
      lastname: "mol",
      email: 'gus111@mail.com',
      password: "1234",
      firstname: 'gus',
      address1: "street123",
      country: 'USA',
      state: "NY",
      city: 'NY',
      zipcode: "1212",
      mobile_number: '111111114444',
    },
  });
  return response;
};