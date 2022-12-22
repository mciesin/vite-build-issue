import Chart from 'chart.js/auto';
import ChartDataLabels from "chartjs-plugin-datalabels";

const chartElement = document.getElementById("chart");

new Chart(chartElement, {
  plugins: [ChartDataLabels],
  type: "pie",
  data: {
    labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
    datasets: [
      {
        data: [1, 1, 2, 3, 5],
      },
    ],
  },
  options: {
    responsive: false
  },
});