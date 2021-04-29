
$(document).ready(function(){
  $("#one").mouseenter(function(){
    $("#oneDescription").show();
    });
    $("#one").mouseleave(function(){
      $("#oneDescription").hide();
      });
  $("#two").mouseenter(function(){
    $("#twoDescription").show();
  })
  $("#two").mouseleave(function(){
    $("#twoDescription").hide();
  })
  $("#three").mouseenter(function(){
    $("#threeDescription").show();
  })
  $("#three").mouseleave(function(){
    $("#threeDescription").hide();
  })
  $("#four").mouseenter(function(){
    $("#fourDescription").show();
  })
  $("#four").mouseleave(function(){
    $("#fourDescription").hide();
  })

})
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); 
}

