import { useNavigate, useParams } from "react-router-dom";

const statusColors = {
  green: "bg-green-400",
  yellow: "bg-yellow-400",
  red: "bg-red-400",
};

const StatusCircle = ({ label, color, path }) => {
    const navigate = useNavigate();
    const { id } = useParams();
  
    return (
      <div
        onClick={() => navigate(`/students/${id}/${path}`)}
        className="cursor-pointer flex flex-col items-center group transition-transform hover:scale-105"
      >
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div
            className={`absolute inset-0 rounded-full border-4 shadow-inner ${getRingColor(color)} animate-pulse-slow`}
          />
          <div
            className={`w-14 h-14 rounded-full ${getBgColor(color)} shadow-lg border border-gray-300 flex items-center justify-center text-white font-semibold`}
          >
            {/* Optional: You could add an emoji or percent inside here */}
          </div>
        </div>
        <span className="mt-3 text-sm font-medium text-gray-700 group-hover:text-blue-600">{label}</span>
      </div>
    );
  };
  
  // Helper functions to get colors
  const getRingColor = (color) => {
    switch (color) {
      case "green":
        return "border-green-400";
      case "yellow":
        return "border-yellow-400";
      case "red":
        return "border-red-500";
      default:
        return "border-gray-400";
    }
  };
  
  const getBgColor = (color) => {
    switch (color) {
      case "green":
        return "bg-green-400";
      case "yellow":
        return "bg-yellow-400";
      case "red":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

export const StudentIndicators = () => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg mt-6">
      <h2 className="text-lg font-semibold mb-4">Student Health Overview</h2>
      <div className="grid grid-cols-3 gap-6 justify-items-center">
        <StatusCircle label="Academic" color="green" path="academic" />
        <StatusCircle label="Social/Emotional" color="yellow" path="social" />
        <StatusCircle label="Behavior" color="red" path="behavior" />
      </div>
    </div>
  );
};
