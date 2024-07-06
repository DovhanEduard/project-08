import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const emailInput = document.getElementById('email');
  const commentsInput = document.getElementById('comments');
  const emailMessage = document.getElementById('email-message');
  const commentsMessage = document.getElementById('comments-message');

  const validateEmail = () => {
    if (!emailInput.validity.valid) {
      emailInput.classList.add('error');
      emailInput.classList.remove('success');
      emailMessage.textContent = 'Invalid email, try again';
      emailMessage.classList.add('error');
      emailMessage.classList.remove('success');
    } else {
      emailInput.classList.add('success');
      emailInput.classList.remove('error');
      emailMessage.textContent = 'Success!';
      emailMessage.classList.add('success');
      emailMessage.classList.remove('error');
    }
  };

  const validateComments = () => {
    if (commentsInput.value.trim() === '') {
      commentsInput.classList.add('error');
      commentsInput.classList.remove('success');
      commentsMessage.textContent = 'Comments cannot be empty';
      commentsMessage.classList.add('error');
      commentsMessage.classList.remove('success');
    } else {
      commentsInput.classList.add('success');
      commentsInput.classList.remove('error');
      commentsMessage.textContent = 'Success!';
      commentsMessage.classList.add('success');
      commentsMessage.classList.remove('error');
    }
  };

  emailInput.addEventListener('input', validateEmail);
  commentsInput.addEventListener('input', validateComments);

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    validateEmail();
    validateComments();

    if (
      emailInput.classList.contains('success') &&
      commentsInput.classList.contains('success')
    ) {
      fetch('https://portfolio-js.b.goit.study/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailInput.value,
          comment: commentsInput.value,
        }),
      })
        .then(response => response.json())
        .then(data => {
          showModal(
            data.title || 'Success',
            data.message || 'Form submitted successfully'
          );
          if (data.title && data.message) {
            form.reset();
            emailInput.classList.remove('success');
            commentsInput.classList.remove('success');
            emailMessage.textContent = '';
            commentsMessage.textContent = '';
          }
        })
        .catch(error => {
          showModal('Error', error.message || 'An error occurred');
        });
    }
  });

  function showModal(title, message) {
    closeAllModals();

    const modalHTML = `
      <div class="modal">
        <button class="modal-close">&times;</button>
        <p class="modal-upper-text">${title}</p>
        <p class="modal-lower-text">${message}</p>
      </div>
    `;

    const instance = basicLightbox.create(modalHTML, {
      onShow: instance => {
        document.body.classList.add('no-scroll');
        const closeButton = instance.element().querySelector('.modal-close');
        closeButton.addEventListener('click', () => {
          closeAllModals();
        });
      },
      onClose: () => {
        document.body.classList.remove('no-scroll');
      },
    });

    instance.show();

    instance.element().addEventListener('click', e => {
      if (e.target === instance.element()) {
        closeAllModals();
      }
    });

    document.addEventListener('keydown', handleEscapeKey);
  }

  function closeAllModals() {
    const basicLightboxInstance = document.querySelector('.basicLightbox');
    if (basicLightboxInstance) {
      basicLightboxInstance.classList.remove('basicLightbox--visible');
      setTimeout(() => {
        basicLightboxInstance.remove();
      }, 400);
    }

    const otherModals = document.querySelectorAll('.modal');
    otherModals.forEach(modal => {
      modal.style.display = 'none';
    });

    document.body.classList.remove('no-scroll');
    document.body.style.overflow = '';

    document.removeEventListener('keydown', handleEscapeKey);
  }

  function handleEscapeKey(e) {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  }
});
