import React, { useState } from "react";




export const Form = (
    { students = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' },
    ] 
    }) => {

  const [step, setStep] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [observationType, setObservationType] = useState("");
  const [behaviorDesc, setBehaviorDesc] = useState("");
  const [submitted, setSubmitted] = useState(false);

  
  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newObservation = {
        student: selectedStudent,
        type: observationType,
        description: behaviorDesc,
        timestamp: new Date().toISOString(), // Optional: helps track entries
      };

      const stored = JSON.parse(localStorage.getItem("observations")) || [];

      const updated = [...stored, newObservation];

      localStorage.setItem("observations", JSON.stringify(updated));

      console.log("Saved to localStorage:", newObservation);


      // Here you could send data to backend or state management
    console.log({
      student: selectedStudent,
      type: observationType,
      description: behaviorDesc,
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <h2>Thank you! Observation submitted.</h2>
        <button
          onClick={() => {
            setStep(1);
            setSelectedStudent("");
            setObservationType("");
            setBehaviorDesc("");
            setSubmitted(false);
          }}
        >
          Add Another Observation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <label>
            Select Student:
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              required
            >
              <option value="">-- Choose a student --</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name}
                </option>
              ))}
            </select>
          </label>
          <div>
            <button type="button" onClick={handleNext} disabled={!selectedStudent}>
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <label>
            Select Observation Type:
            <select
              value={observationType}
              onChange={(e) => setObservationType(e.target.value)}
              required
            >
              <option value="">-- Choose type --</option>
              <option value="behavioral">Behavioral</option>
              <option value="academic">Academic</option>
              <option value="social_emotional">Social/Emotional</option>
            </select>
          </label>
          <div>
            <button type="button" onClick={handleBack}>
              Back
            </button>
            <button type="button" onClick={handleNext} disabled={!observationType}>
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <label>
            Describe Behavior:
            <textarea
              value={behaviorDesc}
              onChange={(e) => setBehaviorDesc(e.target.value)}
              required
              rows={4}
              cols={40}
            />
          </label>
          <div>
            <button type="button" onClick={handleBack}>
              Back
            </button>
            <button type="submit" disabled={!behaviorDesc.trim()}>
              Submit
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

