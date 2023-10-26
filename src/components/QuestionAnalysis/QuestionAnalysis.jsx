import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./QuestionAnalysis.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
  ChartDataLabels
);

const QuestionAnalysis = () => {
  const data = {
    datasets: [
      {
        label: "Question Analysis",
        data: [7, 8],
        backgroundColor: ["#438AF6", "#ebf0f5"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    plugins: {
      datalabels: {
        color: "#fff",
        formatter: (value, ctx) => {
          return ctx.chart.data.labels[ctx.dataIndex];
        },
      },
    },
  };

  return (
    <>
      <div className="question-analysis">
        <div className="question-analysis-header">
          <div>
            <div>Question Analysis</div>
            <div>07 / 15</div>
          </div>
          <div>
            You scored 7 questions correct out of 15. However, it still needs
            some improvements.
          </div>
        </div>
        <div className="question-analysis-chart">
          <Pie data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default QuestionAnalysis;
