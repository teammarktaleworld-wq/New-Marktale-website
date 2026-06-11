#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Read the backup file
const filePath = path.join(__dirname, "../app/lib/servicesData.tsx.backup");
const content = fs.readFileSync(filePath, "utf-8");

// Priority order based on user requirements
const priorityOrder = [
  "android-ios-development", // 1. Core product-building
  "web-development", // 2. Foundational service
  "market-research", // 3. Strategy before execution
  "marketing-plan-development", // 4. Research to strategy
  "performance-marketing", // 5. Execution phase
  "seo-analytics", // 6. Long-term growth
  "lead-generation", // 7. Tactical support
  "video-content-creation", // 8. Supporting service
  "online-reputation-management", // 9. Maintenance
];

console.log("Service reordering priority:");
priorityOrder.forEach((id, index) => {
  console.log(`${index + 1}. ${id}`);
});
