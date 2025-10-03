import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Metrics from "./components/Metrics";

const API_BASE = import.meta.env.VITE_API_URL; // Load backend URL from .env

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
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #e3f2fd, #fce4ec)",
      padding: "30px",
      fontFamily: "Arial, sans-serif",
    }}>
      <h1 style={{
        textAlign: "center",
        marginBottom: "30px",
        fontSize: "32px",
        fontWeight: "bold",
        color: "#1976d2",
      }}>
        🚀 Team Dashboard
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "25px" }}>
        <div>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
        <div>
          <Metrics tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default App;
