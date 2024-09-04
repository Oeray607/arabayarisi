function myMove() {
    let id = null;
    const elem = document.getElementById("araba1");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.right = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }