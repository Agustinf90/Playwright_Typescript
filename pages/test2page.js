import { test, expect, request } from '@playwright/test';
// import config from './config';

export async function test1(request) {
    const response = await fetch('https://api.sirv.com/v2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            clientId: "MCGhAoCRbvYGRqavd4qZMRKuRAC",
            clientSecret: "6egmA6KTH0XamwKxmbctJ4+WWLwOnVXCp6An1/H5d7v/oFZTtvl4BYiTgseZHgCHWZBOzqfGCAS34BeU7LyUiQ=="
        })
      });

  // Verifica que la solicitud haya sido exitosa
//   expect(response.ok()).toBeTruthy();

  // Analiza y registra el cuerpo de la respuesta
  const responseBody = await response.json();
  console.log(responseBody);

  // Aquí puedes añadir más expectativas para verificar el contenido de la respuesta
  // por ejemplo, si esperas un token en la respuesta:
  expect(responseBody).toHaveProperty('token');
}
