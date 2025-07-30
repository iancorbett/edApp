import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { BackButton } from "../components/BackButton";

export const StudentDashboard = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [observations, setObservations] = useState([]);

  useEffect(() => {
    const fetchStudent = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await fetch(`http://localhost:3001/api/students/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setStudent(data);
      } catch (err) {
        console.error("Error fetching student:", err);
      }
    };

    const fetchObservations = async () => {
        const token = localStorage.getItem("token");
  
        try {
          const res = await fetch(`http://localhost:3001/api/observations/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const data = await res.json();
          console.log("Observations data:", data); 
        setObservations(data);
      } catch (err) {
        console.error("Error fetching observations:", err);
      }
    };

    fetchStudent();
    fetchObservations();
  }, [id]);

  if (!student) return <p>Loading...</p>;

  return (
    <section>
      <Navbar />
      <BackButton />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">📋 {student.first_name} {student.last_name}</h1>
        

        <div className="bg-white p-6 rounded shadow border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">📝 Observations</h2>
          {observations.length === 0 ? (
            <p className="text-gray-600">No observations recorded yet.</p>
          ) : (
            <ul className="space-y-4">
              {observations.map((obs) => (
                <li
                  key={obs.observation_id}
                  className="p-4 border border-gray-100 rounded-lg bg-gray-50 shadow-sm"
                >
                  <p><strong>Type:</strong> {obs.observation_type}</p>
                  <p><strong>Description:</strong> {obs.observation_text}</p>
                  <p>
                    <strong>Submitted by:</strong>{" "}
                    {obs.teacher_first_name
                      ? `${obs.teacher_first_name} ${obs.teacher_last_name}`
                      : `${obs.admin_first_name} ${obs.admin_last_name}`}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(obs.created_at).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};