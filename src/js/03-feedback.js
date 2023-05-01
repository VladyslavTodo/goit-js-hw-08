import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const input = document.querySelector('input');

populateTextArea();

let formData = {
  message: textarea.value,
  email: input.value,
};

feedbackForm.addEventListener('input', throttle(onTextInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
  formData = {};
}

function onTextInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
  console.log(formData);
}

function populateTextArea() {
  const saveMessage = JSON.parse(localStorage.getItem(LOCAL_KEY));

  if (saveMessage) {
    textarea.value = saveMessage.message;
    input.value = saveMessage.email;
  }
}
