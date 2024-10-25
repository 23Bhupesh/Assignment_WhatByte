export default function ProgressBar({ label, percentage, color }) {
  return (
    <div className="leading-9">
      <div>
        <span className="font-semibold text-gray-600 text-sm">{label}</span>
      </div>
      <div className="flex justify-between">
        <div className="flex w-[80%] bg-gray-200 rounded-full h-2 relative my-3">
          <div
            style={{ width: `${percentage}% ` }}
            className={`h-full rounded-full w-1/2 ${color}`}
          ></div>
        </div>
        <div>
          <span className="text-sm font-bold" style={{ color: getTextColor(color) }}>{percentage}%</span>
        </div>
      </div>
    </div>
  );
}

// Helper function to get color based on the class name
function getTextColor(color) {
  switch (color) {
    case "bg-blue-500":
      return "#3B82F6"; // Blue color hex
    case "bg-orange-400":
      return "#FB923C"; // Orange color hex
    case "bg-red-500":
      return "#EF4444"; // Red color hex
    case "bg-green-500":
      return "#22C55E"; // Green color hex
    default:
      return "#000000"; // Default black if no match
  }
}