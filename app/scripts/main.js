$(document).ready(function() {

  // handle menu icon
  $('#menu').click(function() {
    $(this).toggleClass('open');
  });

  // handle skills section on resume
  Chart.defaults.global.legend.display = false;
  Chart.defaults.global.tooltips.enabled = false;

  var barChartData = {
    labels: [
      'AngularJS', 'React-Native', 'Bootstrap',
      'C++', 'Python', 'PHP', 'JavaScript',
      'Databases'
    ],
    datasets: [{
      backgroundColor: '#0073e5',
      data: [85, 65, 95, 85, 62, 60, 80, 45]
    }]
  }

  var ctx = document.getElementById('skills').getContext('2d');
  var skillsChart = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    responsive: true,
    options: {
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
});
