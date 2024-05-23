function getUntilNewYear() {
    const currentDate = new Date();
    const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1, 0, 0, 0);
    const timeToNewYear = newYearDate.getTime() - currentDate.getTime();

    const daysToNewYear = Math.floor(timeToNewYear / (1000 * 60 * 60 * 24));
    const hoursToNewYear = Math.floor((timeToNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesToNewYear = Math.floor((timeToNewYear % (1000 * 60 * 60)) / (1000 * 60));

    alert(`До нового года осталось ${daysToNewYear}-${hoursToNewYear}-${minutesToNewYear}`)
}

const button = document.getElementById('new-year__button');
button.addEventListener('click', getUntilNewYear);
