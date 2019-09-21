async function getData() {
    const response = await fetch("./ZonAnn.Ts+dSST.csv");
    const data = await response.text();

    const table = data.split(/\n/).slice(1);
    table.forEach(row => {
        const columns = row.split(",");
        const year = columns[0];
        const temp = columns[1];

        xYears.push(year);
        yTemps.push(parseFloat(temp) + 14);
    });

}

const xYears = [];
const yTemps = [];

getTable();

async function getTable() {
    await getData();
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xYears,
            datasets: [{
                label: 'Combined Land-Surface Air and Sea-Surface Water Temperature in C°',
                data: yTemps,
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function (value, index, values) {
                            return value + "°";
                        }
                    }
                }]
            }
        }
    });
}