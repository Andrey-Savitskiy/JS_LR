const form = document.getElementById("form");
const phone = document.getElementById("tel");
const username = document.getElementById("name");


let getInputNameValue = function(input) {
    return input.value.replace(/[^a-zA-Zа-яА-Я]+/g, '');
}

let onNameInput = function(e) {
    let input = e.target,
        inputNameValue = getInputNameValue(input);

    if (!inputNameValue) {
        return input.value = ''
    }

    input.value = inputNameValue;
}


let getInputNumberValue = function(input) {
    return input.value.replace(/\D/g, '');
}

let onPhoneInput = function(e) {
    let input = e.target,
        inputNumbersValue = getInputNumberValue(input),
        selectionStart = input.selectionStart;
    formattedInputValue = '';

    if (!inputNumbersValue) {
        return input.value = ''
    }

    if (input.value.length != selectionStart) {
        if (e.data && /\D/g.test(e.data)) {
            input.value = inputNumbersValue;
        }
        return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] === '9') inputNumbersValue = '7' + inputNumbersValue;
        const firstSymbols = (inputNumbersValue[0] === '8') ? '8' : '+7';
        formattedInputValue = firstSymbols + ' ';

        if (inputNumbersValue.length > 1) {
            formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }

        if (inputNumbersValue.length >= 5) {
            formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }

        if (inputNumbersValue.length >= 8) {
            formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }

        if (inputNumbersValue.length >= 10) {
            formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        }

    } else {
        formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }

    input.value = formattedInputValue;
}

let onPhoneKeyDown = function(e) {
    if (e.keyCode === 8 && getInputNumberValue(e.target).length === 1) {
        e.target.value = '';
    }
}

let onPhonePaste = function(e) {
    let text = e.clipboardData || window.clipboardData
    input = e.target
    inputNumbersValue = getInputNumberValue(input);

    if (text) {
        let pastedText = text.getData('Text');
        if (/\D/g.test(pastedText)) {
            input.value = inputNumbersValue;
        }
    }
}

async function SendForm(e) {
    e.preventDefault();

    let object = {};
    let formData = new FormData(form);

    formData.forEach((value, key) => object[key] = value);

    let response = await fetch('#', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object),
    });

    console.log(response);
    if (response.status === 200) {
        alert(`${object['name']}, мы получили ваши контакты и свяжемся с вами в ближайшее время!`);
        form.reset();
    } else {
        alert(`${object['name']}, произошла ошибка в отправке данных, попробуйте перезагрузить страницу или воспользоваться мессенджером для связи с нами!`);
    }
};

username.addEventListener("input", onNameInput);

phone.addEventListener("input", onPhoneInput);
phone.addEventListener("keydown", onPhoneKeyDown);
phone.addEventListener("paste", onPhonePaste);

form.onsubmit = SendForm;
