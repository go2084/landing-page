// Import the percentage from the JSON file
import { percentage } from "./completionPercentage.json";

// Update all elements that show the percentage
document.getElementById("completion-percentage").textContent = percentage + "%";
document.getElementById("percentage-text-in-progress-bar").textContent =
  percentage + "%";
document.getElementById("completed-bar").style.width = percentage + "%";
