
export async function updateAccount(apiContext3: any) {
  const url = '/api/updateAccount';

  const response = await apiContext3.put(url, {
    headers: {
      Accept: "*/*",
      ContentType: "multipart/form-data",
    },
    multipart: {
      email: 'gus111@mail.com',
      password: "1234",
      country: 'USA',
      state: "CALIFORNIA",
      city: 'LA',
    },
  });
  return response;
};