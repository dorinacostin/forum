

  var modal = document.getElementById("popup-message");
      var btn = document.getElementById("compose-btn");
      var i = document.getElementsByClassName("fa-times")[0];
      
      btn.onclick = function() {
      modal.style.display = "block";
    }
      i.onclick = function() {
      modal.style.display = "none";
    }
     window.onclick = function(event) {
      if (event.target == modal) {
      modal.style.display = "none";
    }
  }