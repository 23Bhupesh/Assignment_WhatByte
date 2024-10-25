import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function QuestionAnalysis({ correctAnswers = 10, totalQuestions = 15 }) {
  const incorrectAnswers = totalQuestions - correctAnswers;

  // Data for the donut chart
  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ["#3B82F6", "#E5E7EB"], // Blue for correct, light gray for incorrect
        hoverBackgroundColor: ["#2563EB", "#D1D5DB"], // Darker blue on hover
        borderWidth: 2,
      },
    ],
  };

  const options = {
    cutout: "70%", // Creates the 'donut' effect
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="bg-white p-6 border rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold my-2">Question Analysis</h2>
        <span className="text-blue-700 font-bold">{`${correctAnswers}/${totalQuestions}`}</span>
      </div>
      <p className="font-md mb-4 text-gray-600">
        You scored <strong>{correctAnswers} question correct</strong> out of {totalQuestions}. However it still needs some improvements.
      </p>
      <div style={{ width: 150, height: 150 }} className="relative flex justify-center mx-auto">
        <Doughnut data={data} options={options} className="" />
        {/* Add an overlay image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/images/target.png" alt="Overlay" width={40} height={20} />
        </div>
      </div>
    </div>
  );
}
