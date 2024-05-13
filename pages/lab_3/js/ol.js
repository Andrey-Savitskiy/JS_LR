const createList = () => {
    const list = document.createElement('ol');
    let listItem, pre;
    let userInput = '';
    let counter = 1;

    do {
        userInput = prompt(`Введите содержимое ${counter} элемента списка (или нажмите Esc/Отмена для завершения):`);

        if (userInput !== null && userInput.toLowerCase() !== 'esc' && userInput !== '') {
            listItem = document.createElement('li');
            pre = document.createElement('pre');
            pre.textContent = userInput;
            listItem.appendChild(pre)
            list.appendChild(listItem);
            counter++;
        }
    } while (userInput !== null && userInput.toLowerCase() !== 'esc' && userInput !== '');

    document.getElementsByTagName('main')[0].appendChild(list);
};


const olButton = document.getElementById("olButton");
olButton.addEventListener("click", createList);
