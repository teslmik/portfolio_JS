'use strict'

const forms = document.querySelectorAll('form');

forms.forEach((form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const body = {};

    formData.append('form', form.classList.value);

    formData.forEach((value, field) => {
      body[field] = value;
    })

    //support - https://jsonplaceholder.typicode.com/guide/

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
      .then(data => {
        alert('Данные отправлены успешно!');
        if (!modal.classList.contains('hidden')) {
          modal.classList.add('hidden');
        }
      })
      .catch(error => {
        alert('Данные отправлены с ошибкой ' + error.massege);
      })
      .finally(() => {
        form.reset();
      })
  })
}))

