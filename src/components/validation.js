const validateInput = (form, input, config) => {
  const errorElement = form.querySelector(`.${input.name}__error`);

  if (!input.validity.valid) {
      errorElement.textContent = input.validity.patternMismatch ? input.dataset.errorMessage : input.validationMessage;
      input.classList.add(config.inputErrorSelector);
      errorElement.classList.add(config.errorSelector);
  } else {
      hideValidationError(form, input, config);
  }
};

const hideValidationError = (form, input, config) => {
  const errorElement = form.querySelector(`.${input.name}__error`);

  input.classList.remove(config.inputErrorSelector);
  errorElement.classList.remove(config.errorSelector);
  errorElement.textContent = "";
};

const toggleButtonState = (form, config) => {
  const button = form.querySelector(config.popupButtonSelector);
  const isValid = form.checkValidity();

  button.disabled = !isValid;
  button.classList.toggle(config.disabledButtonSelector, !isValid);
};

export const clearValidation = (form, config) => {
  const inputs = form.querySelectorAll(config.inputSelector);
  inputs.forEach(input => hideValidationError(form, input, config));
  
  const button = form.querySelector(config.popupButtonSelector);
  button.classList.add(config.disabledButtonSelector);
  button.disabled = true;
};

export const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);

  forms.forEach(form => {
      const inputs = form.querySelectorAll(config.inputSelector);
      
      inputs.forEach(input => {
          input.addEventListener("input", () => {
              validateInput(form, input, config);
              toggleButtonState(form, config);
          });
      });
  });
};





