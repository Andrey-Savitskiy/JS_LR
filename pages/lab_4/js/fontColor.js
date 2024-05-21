const colorObject = {
    1: {
        color: '#000000',
        background: 'gray'
    },
    2: {
        color: 'gray',
        background: '#000000'
    },
    3: {
        color: '#0b1f71',
        background: '#909ed7'
    },
    4: {
        color: '#67412b',
        background: '#e0d1a6'
    },
    5: {
        color: '#67a432',
        background: '#67412b'
    }
}


function colorEvent(event) {
    let element = event.target
    if (!event.target.id) {
        element = event.target.parentElement
    }

    const key = parseInt(element.id.split('_')[1])
    for (const colorButton of colorButtonList) {
        colorButton.style.boxShadow = 'none'
    }
    element.style.boxShadow = 'inset 0 0 0 3px white'

    text.style.color = colorObject[key].color
    text.style.backgroundColor = colorObject[key].background
}


const colorButtonList = []
const colorContainer = document.getElementById('colorContainer');
for (let key in colorObject) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" fill="${colorObject[key].color}">
            <path d="M10.4,36h4.1c0.6,0,1.2-0.5,1.4-1.1l3.2-8.9h13.4l3.5,8.9c0.2,0.6,0.8,1.1,1.4,1.1h4.1
            \tc0.7,0,1.2-0.7,0.9-1.3L30.4,5c-0.2-0.6-0.7-1-1.3-1H22c-0.6,0-1.2,0.4-1.4,1l-11,29.7C9.3,35.3,9.8,36,10.4,36z M25.1,10H26l4.3,10
            \th-9L25.1,10z"/>
            <path d="M48.5,42h-45C2.7,42,2,42.7,2,43.5v3C2,47.3,2.7,48,3.5,48h45c0.8,0,1.5-0.7,1.5-1.5v-3
            \tC50,42.7,49.3,42,48.5,42z"/>
        </svg>
    `;
    const imgElement = document.createElement('img');
    imgElement.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    imgElement.classList.add('color-img')

    const tdElement = document.createElement('td');
    tdElement.classList.add('td_color')
    tdElement.id = `color_${key}`
    tdElement.style.backgroundColor = colorObject[key].background

    tdElement.appendChild(imgElement)

    tdElement.addEventListener("click", colorEvent);
    colorButtonList.push(tdElement)

    colorContainer.appendChild(tdElement)
}
