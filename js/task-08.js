const formElement = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const emailForm = formElements.email.value;
    const passwordForm = formElements.password.value;

    if (passwordForm === '') {
        return alert(`Ви не ввели пароль. Будь ласка, заповніть поле Password`);
    } else if (emailForm === '') {
        return alert(`Ви не ввели email. Будь ласка, заповніть поле Email`);
    };

    console.log(`{ Email: ${emailForm}, Password: ${passwordForm} }`);
    formElement.reset();
};

formElement.addEventListener('submit', onFormSubmit);

