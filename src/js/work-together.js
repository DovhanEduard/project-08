document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const emailInput = document.getElementById('email');
  const commentsInput = document.getElementById('comments');
  const emailMessage = document.getElementById('email-message');
  const commentsMessage = document.getElementById('comments-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    if (!emailInput.validity.valid) {
      emailInput.classList.add('error');
      emailMessage.textContent = 'Invalid email, try again';
      emailMessage.classList.add('error');
      valid = false;
    } else {
      emailInput.classList.add('success');
      emailMessage.textContent = 'Success!';
      emailMessage.classList.add('success');
    }

    if (commentsInput.value.trim() === '') {
      commentsInput.classList.add('error');
      commentsMessage.textContent = 'Comments cannot be empty';
      commentsMessage.classList.add('error');
      valid = false;
    } else {
      commentsInput.classList.add('success');
      commentsMessage.textContent = 'Success!';
      commentsMessage.classList.add('success');
    }

    if (valid) {
      fetch('https://portfolio-js.b.goit.study/api-docs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailInput.value,
          comments: commentsInput.value,
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            form.reset();
            emailInput.classList.remove('success');
            commentsInput.classList.remove('success');
            emailMessage.textContent = '';
            commentsMessage.textContent = '';
          } else {
            alert('Error: ' + data.message);
          }
        })
        .catch(error => console.error('Error:', error));
    }
  });

  emailInput.addEventListener('input', () => {
    emailInput.classList.remove('error', 'success');
    emailMessage.textContent = '';
    emailMessage.classList.remove('error', 'success');
  });

  commentsInput.addEventListener('input', () => {
    commentsInput.classList.remove('error', 'success');
    commentsMessage.textContent = '';
    commentsMessage.classList.remove('error', 'success');
  });
});
