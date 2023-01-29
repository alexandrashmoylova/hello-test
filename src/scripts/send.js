async function sendRequest(data) {
  const headers = {
    'Content-Type': 'application/json'
  }
  let response = fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: headers
});

  await response
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          alert('bad');
          form.reset();
        } else {
          alert('good');
          form.reset();
        }
      })
      .catch((error) => {
        alert('Error!');
      });
}