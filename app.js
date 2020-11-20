const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

// Add alert bar to DOM
alertBanner.innerHTML = `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
`;

// Hide alert bar when "x" is clicked
alertBanner.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        alertBanner.style.display = 'none';
    }
});

// Set line graph data & options
let trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

// Create line graph
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// Set bar graph data & options
let dailyData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

let dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

// Create bar graph
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Set doughnut graph data & options
let mobileData = {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [{
        data: [500, 550, 2000],
        borderWidth: 0,
        backgroundColor: [
            '#51B6C8',
            '#78CF82',
            '#7477BF'
        ]
    }]
};

let mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

// Create doughnut graph
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// Message section pop-up
send.addEventListener('click', () => {
    if (user.value === '' && message.value === '') {
        alert('Please fill out user and message fields.');
    } else if (user.value === '') {
        alert('Please fill out user field.');
    } else if (message.value === '') {
        alert('Please fill out message field.');
    } else {
        alert(`Message successfully sent to ${user.value}`);
    }
})