const url = 'https://jsonplaceholder.typicode.com/posts';

async function sendRequest(data) {
  const headers = {
    'Content-Type': 'application/json',
  };
  let response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: headers,
  });
  if (!response.ok) {
    throw new Error(`Error at the adress ${url}, status code ${response}`);
  }

  return await response.json();
}
