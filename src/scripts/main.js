import {API} from "./api.js"
// create form to input point of interest name, description, cost and review
const pointsOfInterest = document.querySelector("#container");
pointsOfInterest.innerHTML = "<h1>Points of Interest</h1>";

const poiNameParent = document.createElement("form");
const poiName = document.createElement("input");
const poiDescription = document.createElement("input");
const poiCost = document.createElement("input");
const poiReview = document.createElement("input");
const savePoiBtn = document.createElement("button");

//   set form attributes
poiName.setAttribute("id", "nameId");
poiName.setAttribute("placeholder", "Name of Interest");
poiDescription.setAttribute("id", "descriptionId");
poiDescription.setAttribute("placeholder", "Description");
poiCost.setAttribute("id", "costId");
poiCost.setAttribute("placeholder", "Cost");
poiReview.setAttribute("id", "reviewId");
poiReview.setAttribute("placeholder", "Your review");
savePoiBtn.setAttribute("id", "savePoiBtnId");
savePoiBtn.textContent = "save";

//Attach point of interest input to the DOM with appendChild
const poiLocation = document.querySelector("#container");
poiNameParent.appendChild(poiName);
poiNameParent.appendChild(poiDescription);
poiNameParent.appendChild(poiCost);
poiNameParent.appendChild(poiReview);
poiLocation.appendChild(savePoiBtn);

// Add point of interest to the DOM
pointsOfInterest.appendChild(poiNameParent);

function poiObj(poiName, poiDescription, poiCost, poiReview) {
  return {
    Name: poiName,
    Description: poiDescription,
    Cost: poiCost,
    Review: poiReview
  };
}
// add event listener to save button
savePoiBtn.addEventListener("click", () => {
  console.log("click", "She clicked me");
  let tacoface = document.querySelector("#nameId").value;
  let poiDescription = document.querySelector("#descriptionId").value;
  let poiCost = document.querySelector("#costId").value;
  let poiReview = document.querySelector("#reviewId").value;
  let addPoi = poiObj(tacoface, poiDescription, poiCost, poiReview);

  API.addPointsOfInterest(addPoi).then(data => data.json());
});

export { API }


