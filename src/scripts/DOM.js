// add input information to the DOM
let poiList = document.querySelector("#listPOI");
function getPOI() {
  fetch("http://localhost:8088/interests")
    .then(poiData => poiData.json())
    .then(poiData => {
      poiData.forEach(poi => {
        poiList.innerHTML += `<form>${interests.name} ${interests.description} ${interests.cost} ${interests.review}</form>`;
      });
    });
}
getPOI();
export{getPOI}