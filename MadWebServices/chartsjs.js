document.addEventListener('DOMContentLoaded', (event) => {
    const ctxBar = document.getElementById('barChart').getContext('2d');
    const ctxPie = document.getElementById('pieChart').getContext('2d');

    let barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['C', 'C++', 'PHP', 'JAVA', 'WEB DESIGN', 'PYTHON'],
            datasets: [{
                label: 'Learning Curve',
                data: [50, 60, 70, 80, 90, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
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
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: {
                            size: 25
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white',
                        font: {
                            size: 25
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'white',
                        font: {
                            size: 25
                        }
                    }
                }
            }
        }
    });

    let pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['C', 'C++', 'PHP', 'JAVA', 'WEB DESIGN', 'PYTHON'],
            datasets: [{
                label: 'Learning Curve',
                data: [50, 60, 70, 80, 90, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
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
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                    font: {
                        size: 25
                    }
                }
                }
            }
        }
    });

    window.updateCharts = () => {
        let c = document.getElementById('c').value;
        let cpp = document.getElementById('cpp').value;
        let php = document.getElementById('php').value;
        let java = document.getElementById('java').value;
        let web_design = document.getElementById('web_design').value;
        let python = document.getElementById('python').value;

        let newData = [c, cpp, php, java, web_design, python];

        barChart.data.datasets[0].data = newData;
        pieChart.data.datasets[0].data = newData;

        barChart.update();
        pieChart.update();
    }
});
