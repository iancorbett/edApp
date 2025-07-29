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
        <h1 className="text-3xl font-bold mb-4">📋 Student Dashboard</h1>
        <div className="bg-white p-6 rounded shadow border border-gray-200">
          <p><strong>First Name:</strong> {student.first_name}</p>
          <p><strong>Last Name:</strong> {student.last_name}</p>
          {/* You can add more student-specific details here */}
        </div>
      </div>
    </section>
  );
};
