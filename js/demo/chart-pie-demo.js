// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
function GeraGrafo(valorMeta, alcancarMeta,label1, label2){
var ctx = document.getElementById("myPieChart");


/* let valorMeta = document.getElementById('grafoMeta').value; */
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [label1,label2],

    datasets: [{
      data: [valorMeta,alcancarMeta], //Define o valor a ser preenchido no grafico 
      backgroundColor: ['#1cc88a', '#b1b2b5'],
      hoverBackgroundColor: ['#0a6947', '#848587']
      //hoverBorderColor: "rgba(234, 236, 244, 1)" 
      
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      position:'bottom',
      display: true
    },
    cutoutPercentage: 70,
  },
});
}