document.addEventListener('DOMContentLoaded', () => {
    const FormInputs = document.querySelector('form');
    const FormSubmit = document.querySelector('.submit');

    FormSubmit.addEventListener('click', () => console.log('click'))

    const keysName = Object.keys(User);
    const renderFormList = keysName.map(renderFormInputs)

    if (FormInputs && Array.isArray(renderFormList)) {
        FormInputs.innerHTML = renderFormList.join('');
    }
});

const User = {
    firstName: '',
    lastName: '',
    age: Number(''),
    email: '',
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

function renderFormInputs(item) {
    return ` <div class="field">
                    <input type="${item}" placeholder="${capitalizeFirstLetter(item)}">
                </div>`
};


