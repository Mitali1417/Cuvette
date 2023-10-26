import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./ComparisonGraph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ComparisonGraph = ({ percentile }) => {
  const data = {
    labels: ["Your Percentile", "Average Percentile"],
    datasets: [
      {
        label: "Percentile Score",
        data: [percentile, 72],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        tension: 0.4, // This controls the line's curvature
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "rgba(255, 255, 255, 1)",
        pointBorderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + "%";
            }
            return label;
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className="comparison-graph">
        <div>
          <div>
            <div>Comparison Graph</div>
            <div>
              You scored {percentile}% percentile which is lower than the
              average percentile 72% of all the engineers who took this
              assessment
            </div>
          </div>
        </div>

        <div>
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default ComparisonGraph;
