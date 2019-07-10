const API = {
    addPointsOfInterest: function(newPoi) {
    return fetch("http://localhost:8088/interests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoi)
    });
  }
}

export {API}