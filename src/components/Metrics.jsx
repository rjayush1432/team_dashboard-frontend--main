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

  const COLORS = ["#43a047", "#ff9800", "#e53935"];

  const barData = [
    { name: "Completed", Tasks: completed },
    { name: "In Progress", Tasks: inProgress },
    { name: "Pending", Tasks: pending },
  ];

  return (
    <div style={{
      padding: "20px",
      background: "#fff",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      textAlign: "center"
    }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>
        📊 Team Metrics
      </h2>

      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {/* Pie Chart */}
<ResponsiveContainer width="100%" height={300}>
  <PieChart>
    <Pie
      data={pieData}
      cx="50%"
      cy="50%"
      innerRadius={50}  // smaller inner radius
      outerRadius={80}  // smaller outer radius
      fill="#8884d8"
      paddingAngle={5}
      dataKey="value"
      label
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
        <ResponsiveContainer width="45%" height={300}>
          <BarChart
            data={barData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Tasks" fill="#1976d2" animationDuration={1000} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary */}
      <div style={{ marginTop: "20px" }}>
        <p><strong>Total Tasks:</strong> {total}</p>
        <p style={{ color: "#43a047" }}>✅ Completed: {completed}</p>
        <p style={{ color: "#ff9800" }}>⚡ In Progress: {inProgress}</p>
        <p style={{ color: "#e53935" }}>⏳ Pending: {pending}</p>
      </div>
    </div>
  );
};

export default Metrics;
