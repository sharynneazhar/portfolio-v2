$(document).ready(function() {

  // handle menu icon
  $('#menu').click(function() {
    $(this).toggleClass('open');
  });

  // handle skills section on resume
  Chart.defaults.global.legend.display = false;
  Chart.defaults.global.tooltips.enabled = false;
  Chart.defaults.global.defaultFontColor = '#fff';

  var barChartData = {
    labels: [
      'AngularJS', 'React-Native', 'Bootstrap',
      'C++', 'Python', 'PHP', 'JavaScript',
      'Databases'
    ],
    datasets: [{
      backgroundColor: '#ff6666',
      data: [75, 85, 95, 85, 78, 60, 80, 45]
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
