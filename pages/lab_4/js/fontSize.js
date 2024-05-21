const text = document.getElementsByClassName("main__paragraph")[0]

function sizeEvent(event) {
    const className = event.target.classList

    for (const classNameElement of className) {
        if (classNameElement.startsWith("per_")) {
            let flag = false
            for (const classNameTextElement of text.classList) {
                if (classNameTextElement.startsWith("per_")) {
                    text.classList.replace(classNameTextElement, classNameElement)
                    flag = true
                }
            }

            if (!flag) {
                text.classList.add(classNameElement)
            }
        }
    }

    for (const sizeButton of sizeButtonList) {
        sizeButton.style.backgroundColor = 'inherit'
    }
    event.target.style.backgroundColor = '#cdc6c3'
}


const sizeButtonList = document.getElementsByClassName("td_size");
for (const sizeButtonListElement of sizeButtonList) {
    sizeButtonListElement.addEventListener("click", sizeEvent);
}
