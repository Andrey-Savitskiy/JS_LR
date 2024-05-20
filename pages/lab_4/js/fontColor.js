function insertDynamicSVG(svgData, targetElementId) {
    // Создаем новый элемент <img>
    const imgElement = document.createElement('img');

    // Устанавливаем данные SVG в src атрибут элемента <img>
    imgElement.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgData)}`;
    imgElement.style.width = '100%'; // Устанавливаем ширину изображения на 100%

    // Находим целевой элемент, куда будет вставлено SVG-изображение
    const targetElement = document.getElementById(targetElementId);

    // Вставляем SVG-изображение в целевой элемент
    targetElement.innerHTML = '';
    targetElement.appendChild(imgElement);
}


// Пример динамически сгенерированного SVG-данных
const svgData = `
<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve">
<path d="M10.4,36h4.1c0.6,0,1.2-0.5,1.4-1.1l3.2-8.9h13.4l3.5,8.9c0.2,0.6,0.8,1.1,1.4,1.1h4.1
\tc0.7,0,1.2-0.7,0.9-1.3L30.4,5c-0.2-0.6-0.7-1-1.3-1H22c-0.6,0-1.2,0.4-1.4,1l-11,29.7C9.3,35.3,9.8,36,10.4,36z M25.1,10H26l4.3,10
\th-9L25.1,10z"/>
<path d="M48.5,42h-45C2.7,42,2,42.7,2,43.5v3C2,47.3,2.7,48,3.5,48h45c0.8,0,1.5-0.7,1.5-1.5v-3
\tC50,42.7,49.3,42,48.5,42z"/>
</svg>
`;

// Вставляем динамическое SVG-изображение в контейнер
insertDynamicSVG(svgData, 'svgContainer');
