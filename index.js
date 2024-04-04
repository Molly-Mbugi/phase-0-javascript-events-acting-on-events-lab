const dodger=document.getElementById("dodger")

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "100px";

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Arrowright") {
      const rightNumbers = dodger.style.right.replace("px", "");
      const right = parseInt(rightNumbers, 10);
  
      dodger.style.left = `${right+1}px`;
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Arrowrigt") {
      moveDodgerright();
    }
  });
  

