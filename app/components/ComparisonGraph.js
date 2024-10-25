import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ComparisonGraph() {
  // Sample data and options
  const data = {
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    datasets: [
      {
        label: "Your Performance",
        data: [2, 5, 15, 30, 45, 50, 40, 60, 55, 90, 75],
        borderColor: "#7C3AED", // Purple line
        backgroundColor: "rgba(124, 58, 237, 0.2)", // Light purple fill
        pointBackgroundColor: "#7C3AED",
        pointBorderColor: "#fff",
        pointHoverRadius: 6,
        pointRadius: 4,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#E5E7EB",
        },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div className="bg-white p-6 shadow rounded-md h-auto">
      <h2 className="text-lg font-bold mb-4">Comparison Graph</h2>
      <p className="mb-4 text-gray-600">
        You scored <strong>30% percentile</strong> which is lower than the average percentile <strong>72%</strong> of all the engineers who took this assessment.
      </p>
      <div className="relative h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
