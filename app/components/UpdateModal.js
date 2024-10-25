import { useState } from "react";
import Image from "next/image";

export default function UpdateModal({ isOpen, onClose, onSave, initialData }) {
  const [rank, setRank] = useState(initialData.rank || "");
  const [percentile, setPercentile] = useState(initialData.percentile || "");
  const [score, setScore] = useState(initialData.score || "");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (rank === "" || isNaN(rank)) {
      newErrors.rank = "Rank should be a number.";
    }
    if (percentile === "" || isNaN(percentile) || percentile < 0 || percentile > 100) {
      newErrors.percentile = "Percentile must be a number between 0 and 100.";
    }
    if (score === "" || isNaN(score) || score < 0 || score > 15) {
      newErrors.score = "Score must be a number between 0 and 15.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      onSave({ rank: Number(rank), percentile: Number(percentile), score: Number(score) });
      onClose();
    }
  };

  const getInputBorderColor = (value) => {
    return value === "" ? "border-red-500" : "border-blue-500";
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-md lg:w-[40%] md:w-[40%] w-full">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Update Scores</h2>
            <Image
              src="/images/html_logo.png"
              alt="Close"
              width={30}
              height={30}
              className="cursor-pointer"
              onClick={onClose}
            />
          </div>

          {/* Input Fields */}
          <div className="mb-3 flex w-full">
            <label className="block font-semibold mb-1 w-[100%]">Update your <strong>Rank</strong></label>
            <input
              type="text"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              placeholder="Rank"
              className={`border p-2 w-1/2 rounded ${getInputBorderColor(rank)}`}
            />
            {errors.rank && <p className="text-red-500 text-sm mt-1">{errors.rank}</p>}
          </div>

          <div className="mb-3 flex w-full">
            <label className="block font-semibold w-full mb-1">Update your <strong>Percentile</strong></label>
            <input
              type="text"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
              placeholder="Percentile"
              className={`border p-2 w-1/2 rounded ${getInputBorderColor(percentile)}`}
            />
            {errors.percentile && <p className="text-red-500 text-sm mt-1">{errors.percentile}</p>}
          </div>

          <div className="mb-3 flex w-full">
            <label className="block font-semibold w-full mb-1">Update your <strong>Current Score (out of 15)</strong></label>
            <input
              type="text"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              placeholder="Score"
              className={`border p-2 w-1/2 rounded ${getInputBorderColor(score)}`}
            />
            {errors.score && <p className="text-red-500 text-sm mt-1">{errors.score}</p>}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end mt-6 space-x-3">
            <button
              className="text-blue-900 border-2 border-blue-900 px-4 py-2 rounded-lg hover:bg-blue-50"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  );
}
