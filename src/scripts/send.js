const successMessage = document.querySelector('.message-success');
const errorMessage = document.querySelector('.message-error');
const form = document.getElementById('modal-form');

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
          errorMessage.style.display = 'block';
          form.style.display = 'none';
          form.reset();
        } else {
          successMessage.style.display = 'block';
          form.style.display = 'none';
          form.reset();
        }
      })
      .catch((error) => {
        alert('Error!');
      });
}