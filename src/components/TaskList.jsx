import React from "react";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#00fff0",
          textShadow: "0 0 5px #00fff0",
        }}
      >
        📋 Task List
      </h2>

      {tasks.length === 0 ? (
        <p style={{ color: "#ccc" }}>No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "16px",
              padding: "20px",
              marginBottom: "20px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
              color: "#fff",
              transition: "transform 0.3s",
            }}
          >
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                textDecoration: task.status === "completed" ? "line-through" : "none",
                color: task.status === "completed" ? "#9e9e9e" : "#fff",
              }}
            >
              ✅ {task.title}
            </h3>

            <p style={{ fontSize: "14px", color: "#ccc", marginTop: "5px" }}>
              👤 <strong>{task.assignee}</strong> &nbsp;|&nbsp; 📅{" "}
              {task.deadline ? new Date(task.deadline).toDateString() : "No deadline"}
            </p>

            <div style={{ marginTop: "15px", display: "flex", gap: "12px", alignItems: "center" }}>
              <select
                value={task.status}
                onChange={(e) => updateTask(task._id, { ...task, status: e.target.value })}
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#00fff0",
                  fontWeight: "bold",
                  outline: "none",
                  backdropFilter: "blur(6px)",
                  cursor: "pointer",
                }}
              >
                <option value="pending">🕓 Pending</option>
                <option value="in-progress">🚧 In Progress</option>
                <option value="completed">✅ Completed</option>
              </select>

              <button
                onClick={() => deleteTask(task._id)}
                style={{
                  background: "transparent",
                  border: "1px solid #ff4c4c",
                  color: "#ff4c4c",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#ff4c4c20")}
                onMouseOut={(e) => (e.target.style.background = "transparent")}
              >
                ❌ Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
