import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !assignee) return;
    addTask({ title, assignee, deadline, status });
    setTitle("");
    setAssignee("");
    setDeadline("");
    setStatus("pending");
  };

  return (
    <div
      style={{
        backdropFilter: "blur(16px)",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "20px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "25px",
        marginBottom: "30px",
        color: "#fff",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#00fff0",
          textShadow: "0 0 5px #00fff0",
        }}
      >
        ➕ Add Task
      </h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "15px" }}>
        <input
          type="text"
          placeholder="🔤 Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="👤 Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          style={inputStyle}
        />

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          style={inputStyle}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={inputStyle}
        >
          <option value="pending">🕓 Pending</option>
          <option value="in-progress">🚧 In Progress</option>
          <option value="completed">✅ Completed</option>
        </select>

        <button
          type="submit"
          style={{
            background: "#00fff0",
            color: "#000",
            padding: "12px",
            borderRadius: "10px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s",
            boxShadow: "0 0 15px #00fff0",
          }}
          onMouseOver={(e) => (e.target.style.boxShadow = "0 0 20px #00fff0")}
          onMouseOut={(e) => (e.target.style.boxShadow = "0 0 15px #00fff0")}
        >
          🚀 Add Task
        </button>
      </form>
    </div>
  );
};

// Input & Select Field Style
const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  background: "rgba(255, 255, 255, 0.1)",
  color: "#00fff0",
  fontWeight: "bold",
  outline: "none",
  backdropFilter: "blur(6px)",
};

export default TaskForm;
