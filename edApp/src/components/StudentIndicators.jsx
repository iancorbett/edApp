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
      className="cursor-pointer flex flex-col items-center hover:scale-105 transition-transform"
    >
      <div
        className={`w-16 h-16 rounded-full shadow-md border-4 ${statusColors[color]} border-gray-300`}
      />
      <span className="mt-2 font-medium text-sm">{label}</span>
    </div>
  );
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
