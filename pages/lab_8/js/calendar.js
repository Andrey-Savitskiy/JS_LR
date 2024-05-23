function calendar(event) {
    event.preventDefault()

    const child_list = main.getElementsByClassName('calendar')
    for (const child of child_list) {
        child.remove()
    }

    const year = form.elements.year.value;
    const month = form.elements.month.value - 1;

    const firstDay = new Date(year, month, 1).getDay() - 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarTable = document.createElement('table');
    calendarTable.classList.add('calendar');

    const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const weekdayRow = document.createElement('tr');
    weekdays.forEach(weekday => {
        const weekdayCell = document.createElement('th');
        weekdayCell.textContent = weekday;
        weekdayRow.appendChild(weekdayCell);
    });
    calendarTable.appendChild(weekdayRow);

    let dayOfWeek = 0;
    let currentDay = 1;
    while (currentDay <= daysInMonth) {
        const calendarRow = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            if (i < firstDay && currentDay === 1) {
                // Добавляем пустые ячейки для дней, предшествующих первому дню месяца
                const emptyCell = document.createElement('td');
                calendarRow.appendChild(emptyCell);
            } else if (currentDay > daysInMonth) {
                // Добавляем пустые ячейки для дней, следующих за последним днем месяца
                const emptyCell = document.createElement('td');
                calendarRow.appendChild(emptyCell);
            } else {
                const dayCell = document.createElement('td');
                dayCell.textContent = currentDay;
                calendarRow.appendChild(dayCell);
                currentDay++;
            }
            dayOfWeek++;
        }
        calendarTable.appendChild(calendarRow);
    }

    main.appendChild(calendarTable);
}

const form = document.getElementById('form');
const main = document.getElementById('main')
form.addEventListener('submit', calendar);
