export function submitForm() {
  const formData = new FormData();

  formData.append('name', document.getElementById('name').value);
  formData.append('email', document.getElementById('email').value);
  formData.append('password', document.getElementById('password').value);
  formData.append('confirm', document.getElementById('confirm').value);
  formData.append('rodo', document.getElementById('rodo').checked);

  // Make the fetch request
  fetch('https://przeprogramowani.pl/projekt-walidacja', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle the response data
      console.log('Form submitted successfully:', data);
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with the fetch operation:', error);
    });
}
