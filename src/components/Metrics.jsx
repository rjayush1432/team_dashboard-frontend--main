import React from "react";
import {
  PieChart, Pie, Cell, Tooltip as PieTooltip,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const Metrics = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "completed").length;
  const inProgress = tasks.filter((t) => t.status === "in-progress").length;
  const pending = tasks.filter((t) => t.status === "pending").length;

  const pieData = [
    { name: "Completed", value: completed },
    { name: "In Progress", value: inProgress },
    { name: "Pending", value: pending },
  ];

  const COLORS = ["#00e676", "#ffea00", "#ff1744"];

  const barData = [
    { name: "Completed", Tasks: completed },
    { name: "In Progress", Tasks: inProgress },
    { name: "Pending", Tasks: pending },
  ];

  return (
    <div
      style={{
        padding: "25px",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "20px",
        backdropFilter: "blur(16px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          marginBottom: "25px",
          color: "#000000ff",
          textShadow: "0 0 6px #00fff0",
        }}
      >
        📊 Team Metrics
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {/* Pie Chart */}
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={3}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              isAnimationActive={true}
              animationDuration={1000}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <PieTooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height={260}>
          <BarChart
            data={barData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis allowDecimals={false} stroke="#ccc" />
            <Tooltip />
            <Legend wrapperStyle={{ color: "#fff" }} />
            <Bar dataKey="Tasks" fill="#00bcd4" radius={[10, 10, 0, 0]} animationDuration={1000} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary */}
      <div
        style={{
          marginTop: "30px",
          padding: "10px",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <p style={{ fontSize: "16px", marginBottom: "8px" }}>
          <strong>Total Tasks:</strong> <span style={{ color: "#00fff0" }}>{total}</span>
        </p>
        <p style={{ color: "#00e676", marginBottom: "4px" }}>✅ Completed: {completed}</p>
        <p style={{ color: "#ffea00", marginBottom: "4px" }}>🚧 In Progress: {inProgress}</p>
        <p style={{ color: "#ff1744", marginBottom: "4px" }}>⏳ Pending: {pending}</p>
      </div>
    </div>
  );
};

export default Metrics;
