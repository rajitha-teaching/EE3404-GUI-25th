// 1. Import Styles
// In modern web eng, we import CSS into JS so the build tool knows about it.
import "./style.css";

// 2. The Program Entry Point
// This runs as soon as the browser loads.
console.log("Server Monitor: System Online");

// Test: Check the browser console (F12) to see if this message appears.
// src/main.ts

// 1. Standard Levels (Semantic Logging)
console.log("System initializing...");
console.warn("Warning: CPU Temperature is rising.");
console.error("CRITICAL: Network connection lost!");

// 2. The Data View (console.table)
const sensors = [
  { id: 1, type: "Temp", value: 24.5 },
  { id: 2, type: "Humidity", value: 60 },
  { id: 3, type: "Fan", value: 1200 },
];
// Show them this! It renders a real table in the console.
console.table(sensors);

// 3. Custom Styling (The "Hacker" Look)
// The first argument uses %c as a placeholder for the style.
// The second argument is the CSS string.
console.log(
  "%c SYSTEM READY %c v1.0.4 ",
  "background: #4caf50; color: white; padding: 4px; border-radius: 4px; font-weight: bold;",
  "color: #4caf50; font-weight: bold;"
);
