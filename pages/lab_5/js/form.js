const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    document.body.style.fontSize = `${document.getElementById('text_size').value}${document.getElementById('text_measure').value}`

    document.body.style.color = document.getElementById('text_color').value
    document.body.style.backgroundColor = document.getElementById('back_color').value
});
