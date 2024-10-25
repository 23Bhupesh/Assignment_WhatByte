import ProgressBar from "./ProgressBar";

export default function SyllabusAnalysis() {
  const data = [
    { label: "HTML Tools, Forms, History", percentage: 80, color: "bg-blue-500" },
    { label: "Tags & References in HTML", percentage: 60, color: "bg-orange-400" },
    { label: "Tables & References in HTML", percentage: 24, color: "bg-red-500" },
    { label: "Tables & CSS Basics", percentage: 96, color: "bg-green-500" },
  ];

  return (
    <div className="border w-full rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4 ">Syllabus Wise Analysis</h2>
      {data.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.label}
          percentage={item.percentage}
          color={item.color}
        />
      ))}
    </div>
  );
}
