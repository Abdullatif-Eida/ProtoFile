    
    // Get the modal
    var modal = document.getElementById("leadershipDetails-model");
    var modal2 = document.getElementById("leadershipDetails-model2");
    var modal3 = document.getElementById("leadershipDetails-model3");
    var modal4 = document.getElementById("leadershipDetails-model4");
    var modal5 = document.getElementById("leadershipDetails-model5");
    var modal6 = document.getElementById("leadershipDetails-model6");
    var modal7 = document.getElementById("leadershipDetails-model7");
    var modal8 = document.getElementById("leadershipDetails-model8");
    var modal9 = document.getElementById("leadershipDetails-model9");

    
    // Get the button that opens the modal
    var leadershipDetails1 = document.getElementById("leadershipDetails-btn-1");
    var leadershipDetails2 = document.getElementById("leadershipDetails-btn-2");
    var leadershipDetails3 = document.getElementById("leadershipDetails-btn-3");
    var leadershipDetails4 = document.getElementById("leadershipDetails-btn-4");
    var leadershipDetails5 = document.getElementById("leadershipDetails-btn-5");
    var leadershipDetails6 = document.getElementById("leadershipDetails-btn-6");
    var leadershipDetails7 = document.getElementById("leadershipDetails-btn-7");
    var leadershipDetails8 = document.getElementById("leadershipDetails-btn-8");
    var leadershipDetails9 = document.getElementById("leadershipDetails-btn-9");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("modal")[0];
    var span2 = document.getElementsByClassName("modal2")[0];
    var span3 = document.getElementsByClassName("modal3")[0];
    var span4 = document.getElementsByClassName("modal4")[0];
    var span5 = document.getElementsByClassName("modal5")[0];
    var span6 = document.getElementsByClassName("modal6")[0];
    var span7 = document.getElementsByClassName("modal7")[0];
    var span8 = document.getElementsByClassName("modal8")[0];
    var span9 = document.getElementsByClassName("modal9")[0];

    // When the user clicks the button, open the modal 
    leadershipDetails1.onclick = function() {
      modal.style.display = "block";
    }

    leadershipDetails2.onclick = function() {
        modal2.style.display = "block";
    }
    
    leadershipDetails3.onclick = function() {
        modal3.style.display = "block";
    }
    
    leadershipDetails4.onclick = function() {
        modal4.style.display = "block";
    }
    
    leadershipDetails5.onclick = function() {
        modal5.style.display = "block";
    }
    
    leadershipDetails6.onclick = function() {
        modal6.style.display = "block";
    }

    leadershipDetails7.onclick = function() {
        modal7.style.display = "block";
    }

    leadershipDetails8.onclick = function() {
        modal8.style.display = "block";
    }
    
    leadershipDetails9.onclick = function() {
        modal9.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    span2.onclick = function() {
      modal2.style.display = "none";
    }

    span3.onclick = function() {
      modal3.style.display = "none";
    }

    span4.onclick = function() {
      modal4.style.display = "none";
    }

    span5.onclick = function() {
      modal5.style.display = "none";
    }

    span6.onclick = function() {
      modal6.style.display = "none";
    }
    
    span7.onclick = function() {
      modal7.style.display = "none";
    }

    span8.onclick = function() {
      modal8.style.display = "none";
    }

    span9.onclick = function() {
      modal9.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }else if (event.target == modal2) {
        modal2.style.display = "none";
      }else if (event.target == modal3) {
        modal3.style.display = "none";
      }
    }


