import React from "react";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div
      style={{
        padding: "20px",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>
        📋 Task List
      </h2>
      {tasks.length === 0 ? (
        <p style={{ color: "#777" }}>No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id} 
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "10px",
              background: "#fafafa",
            }}
          >
            <h3
              style={{
                fontWeight: "bold",
                textDecoration: task.status === "completed" ? "line-through" : "none",
                color: task.status === "completed" ? "#888" : "#333",
              }}
            >
              {task.title}
            </h3>
            <p style={{ fontSize: "14px", color: "#555" }}>
              👤 {task.assignee} | 📅 {task.deadline || "No deadline"}
            </p>

            <div style={{ marginTop: "8px" }}>
              <select
                value={task.status}
                onChange={(e) => updateTask(task._id, { ...task, status: e.target.value })} 
                style={{
                  padding: "6px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  marginRight: "10px",
                }}
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <button
                onClick={() => deleteTask(task._id)} 
                style={{
                  background: "#e53935",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
