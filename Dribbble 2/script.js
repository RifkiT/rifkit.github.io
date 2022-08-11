const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label : 'Course Members',
            data: [2,3,5,6,8,10,11,13,15,16,18,19],
            backgroundColor: [
                '#54478c',
                '#2c699a',
                '#048ba8',
                '#0db39e',
                '#16db93',
                '#83e377',
                '#b9e769',
                '#efea5a',
                '#f1c453',
                '#f29e4c',
                '#f2674b',
                '#f2b4ae'
            ],
            borderColor: [
                '#54478c',
                '#2c699a',
                '#048ba8',
                '#0db39e',
                '#16db93',
                '#83e377',
                '#b9e769',
                '#efea5a',
                '#f1c453',
                '#f29e4c',
                '#f2674b',
                '#f2b4ae'
            ],
            borderWidth: 1
        }]
    },
    options: {
        element : {
            line : {
                tension : 0
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// const checkAll = document.querySelector('.check-all');
// const checkBox = document.querySelectorAll('.input[type=checkbox]')
// checkAll.addEventListener('checked', function(){
// })