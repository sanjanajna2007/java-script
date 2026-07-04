function showContent(mood){

  if(mood === "sad"){
    document.getElementById("result").innerText =
    "Watch a comedy video below 😊";
  }

  if(mood === "ok"){
    document.getElementById("result").innerText =
    "Try a healthy habit video 🌿";
  }

  if(mood === "happy"){
    document.getElementById("result").innerText =
    "Share positivity with someone today!";
  }

}