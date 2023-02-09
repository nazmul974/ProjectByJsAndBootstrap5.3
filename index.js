console.log("Get the modal");
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

var modal2 = document.getElementById("myModal2")
var btn2 = document.getElementById("myBtn2");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  myModal2.style.display = "none";

}


btn2.onclick= function(){
    modal.style.display = "none";
    modal2.style.display = "block";

}
span2.onclick = function() {
    modal2.style.display = "none";
  }



/////


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

//jqry

$("#btn").click(function() {
    "use strict";
    $.fn.openSelect = function() {
      return this.each(function(idx, domEl) {
        if (document.createEvent) {
          var event = document.createEvent("MouseEvents");
          event.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          domEl.dispatchEvent(event);
        } else if (element.fireEvent) {
          domEl.fireEvent("onmousedown");
        }
      });
    }
    $("#sel").openSelect();
  });