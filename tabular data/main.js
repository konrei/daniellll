getData();

async function getData() {
    const response = await fetch("./ZonAnn.Ts+dSST.csv");
    const data = await response.text();

    const table = data.split(/\n/).slice(1);
    table.forEach(row => {
        const columns = row.split(",");
        const year = columns[0];
        const temp = columns[1];
    });
}

var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
/*getGDP();

async function getGDP() {
    const response = await fetch("./API_NY.GDP.MKTP.CD_DS2_en_csv_v2_103640.csv");
    const data = await response.text();

    const table = data.split("\n").slice(247);
    console.log(table);
}*/