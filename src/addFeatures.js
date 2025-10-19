//**
// @description Add features defined in the JSON file to the HTML feature list
//  */

// Import the features from the JSON file
import { features } from "./features.json";

// Get the feature list
const featureList = document.getElementById("feature-list");

// Get the main feature template
const featureTemplate = document.getElementById("feature-template");

// Get the sub-templates for the different feature statuses
const completedFeatureNodeTemplate = document.getElementById(
  "completed-feature-node-template",
);
const workingFeatureNodeTemplate = document.getElementById(
  "working-feature-node-template",
);
const futureFeatureNodeTemplate = document.getElementById(
  "future-feature-node-template",
);

// Map feature statuses (as defined in the JSON) to sub-templates
const nodeTemplateMap = {
  completed: completedFeatureNodeTemplate,
  working: workingFeatureNodeTemplate,
  future: futureFeatureNodeTemplate,
};

// For each feature in the JSON, clone the main template and insert it into the feature list
features.forEach((feature) => {
  const clone = featureTemplate.content.cloneNode(true);

  // Set the feature name
  clone.getElementById("feature-name").textContent = feature.name;

  // Add the relevant sub-template to the dedicated container
  const featureNodeLineContainer = clone.getElementById(
    "feature-node-line-container",
  );
  const nodeTemplate = nodeTemplateMap[feature.status];
  featureNodeLineContainer.appendChild(nodeTemplate.content.cloneNode(true));

  // For features with status "future", change the color
  if (feature.status == "future") {
    const listElement = clone.querySelector("li");
    listElement.classList.replace("hover:bg-main", "hover:bg-inactive");
    listElement.classList.replace("active:bg-main", "active:bg-inactive");
  }

  featureList.appendChild(clone);
});

// Remove upper line from first element, and lower line from last element
const featureListItems = featureList.querySelectorAll("li");
const featureListItemsArray = Array.from(featureListItems);
featureListItemsArray[0].querySelector("[data-role='upper-line']").remove();
featureListItemsArray.at(-1).querySelector("[data-role='lower-line']").remove();
