const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

window.addEventListener('load', () => {
    let date = new Date();
    displayDate(date);


    // ask for location

    // otherwise, set location

    // fetch based on location
})

function displayDate(date) {
    let dateHeader = document.querySelector('.panel-left-date');
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    dateHeader.textContent = `${month} ${day}, ${year}`;
}