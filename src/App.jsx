import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Metrics from "./components/Metrics";
import "./App.css";  // Import the CSS here

const API_BASE = import.meta.env.VITE_API_URL;

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(API_BASE)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch tasks");
        return res.json();
      })
      .then(data => setTasks(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = async (task) => {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    const newTask = await res.json();
    setTasks(prev => [...prev, newTask]);
  };

  const updateTask = async (id, updatedTask) => {
    const res = await fetch(`${API_BASE}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    const data = await res.json();
    setTasks(prev => prev.map(t => (t._id === id ? data : t)));
  };

  const deleteTask = async (id) => {
    await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
    setTasks(prev => prev.filter(t => t._id !== id));
  };

  return (
    <div>
      <h1 style={{
        textAlign: "center",
        marginBottom: "30px",
        fontSize: "32px",
        fontWeight: "bold",
        color: "#1976d2",
        textShadow: "0 0 10px #00f0ff",
        background: "linear-gradient(90deg, #ff8a00, #e52e71)",
      }}>
        🚀 Team Dashboard
      </h1>

      <div className="dashboard-container">
        <div>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>

        <div className="metrics-panel">
          <Metrics tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default App;
