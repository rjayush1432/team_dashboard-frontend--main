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
    setTitle(""); setAssignee(""); setDeadline(""); setStatus("pending");
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>
        ➕ Add Task
      </h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px" }}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <input
          type="text"
          placeholder="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button
          type="submit"
          style={{
            background: "#1976d2",
            color: "#fff",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
