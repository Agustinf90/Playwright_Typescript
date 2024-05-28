
export async function deleteAccount(apiContext3: any) {
    const url = '/api/deleteAccount';
  
    const response = await apiContext3.delete(url, {
      headers: {
        Accept: "*/*",
        ContentType: "multipart/form-data",
      },
      multipart: {
        email: 'gus111@mail.com',
        password: "1234",
      },
    });
    return response;
  };