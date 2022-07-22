 
//  //DropDownd Jquery
//  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
//   if (!$(this).next().hasClass('show')) {
//     $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
//   }
//   var $subMenu = $(this).next('.dropdown-menu');
//   $subMenu.toggleClass('show');


//   $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
//     $('.dropdown-submenu .show').removeClass('show');
//   });


//   return false;
// });


//Slider Jquery
$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});

/**
 * @description Change Home page slider's arrows active status
 */
function updateSliderArrowsStatus(
  cardsContainer,
  containerWidth,
  cardCount,
  cardWidth
) {
  if (
    $(cardsContainer).scrollLeft() + containerWidth <
    cardCount * cardWidth + 15
  ) {
    $("#slide-right-container").addClass("active");
  } else {
    $("#slide-right-container").removeClass("active");
  }
  if ($(cardsContainer).scrollLeft() > 0) {
    $("#slide-left-container").addClass("active");
  } else {
    $("#slide-left-container").removeClass("active");
  }
}
$(function() {
  // Scroll products' slider left/right
  let div = $("#cards-container");
  let cardCount = $(div)
    .find(".cards")
    .children(".card").length;
  let speed = 1000;
  let containerWidth = $(".container").width();
  let cardWidth = 250;

  updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);

  //Remove scrollbars
  $("#slide-right-container").click(function(e) {
    if ($(div).scrollLeft() + containerWidth < cardCount * cardWidth) {
      $(div).animate(
        {
          scrollLeft: $(div).scrollLeft() + cardWidth
        },
        {
          duration: speed,
          complete: function() {
            setTimeout(
              updateSliderArrowsStatus(
                div,
                containerWidth,
                cardCount,
                cardWidth
              ),
              1005
            );
          }
        }
      );
    }
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  });
  $("#slide-left-container").click(function(e) {
    if ($(div).scrollLeft() + containerWidth > containerWidth) {
      $(div).animate(
        {
          scrollLeft: "-=" + cardWidth
        },
        {
          duration: speed,
          complete: function() {
            setTimeout(
              updateSliderArrowsStatus(
                div,
                containerWidth,
                cardCount,
                cardWidth
              ),
              1005
            );
          }
        }
      );
    }
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  });

  // If resize action ocurred then update the container width value
  $(window).resize(function() {
    try {
      containerWidth = $("#cards-container").width();
      updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    } catch (error) {
      console.log(
        `Error occured while trying to get updated slider container width: 
            ${error}`
      );
    }
  });
});



//Slider Words JS
function Data(number){
     document.getElementById("school-card-Data").classList.add("nanodegree-cards-active");
     document.getElementById("school-card-Programing").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-AI").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-Cloud").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-AS").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-Business").classList.remove("nanodegree-cards-active");
    document.getElementById("school-data").className = "school-title selected ";
    document.getElementById("school-programming").className = "school-title  ";
    document.getElementById("school-AI").className = "school-title  ";
    document.getElementById("school-cloud").className = "school-title  ";
    document.getElementById("school-As").className = "school-title  ";
    document.getElementById("school-Business").className = "school-title  ";

  }

  function Programming(){
     document.getElementById("school-card-Programing").classList.add("nanodegree-cards-active");
     document.getElementById("school-card-Data").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-AI").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-Cloud").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-AS").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-Business").classList.remove("nanodegree-cards-active");
    document.getElementById("school-data").className = "school-title  ";
    document.getElementById("school-programming").className = "school-title selected ";
    document.getElementById("school-AI").className = "school-title  ";
    document.getElementById("school-cloud").className = "school-title  ";
    document.getElementById("school-As").className = "school-title  ";
    document.getElementById("school-Business").className = "school-title  ";

  }

  function AI(){
     document.getElementById("school-card-AI").classList.add("nanodegree-cards-active");
     document.getElementById("school-card-Programing").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-Data").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-Cloud").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-AS").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-Business").classList.remove("nanodegree-cards-active");
    document.getElementById("school-data").className = "school-title  ";
    document.getElementById("school-programming").className = "school-title  ";
    document.getElementById("school-AI").className = "school-title selected ";
    document.getElementById("school-cloud").className = "school-title  ";
    document.getElementById("school-As").className = "school-title  ";
    document.getElementById("school-Business").className = "school-title  "; 
 
  }

  function Cloud(){
     document.getElementById("school-card-Cloud").classList.add("nanodegree-cards-active");
     document.getElementById("school-card-AI").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-Programing").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-Data").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-AS").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-Business").classList.remove("nanodegree-cards-active");
    document.getElementById("school-data").className = "school-title  ";
    document.getElementById("school-programming").className = "school-title  ";
    document.getElementById("school-AI").className = "school-title  ";
    document.getElementById("school-cloud").className = "school-title selected ";
    document.getElementById("school-As").className = "school-title  ";
    document.getElementById("school-Business").className = "school-title  "; 
 
  }

  function AS(){
     document.getElementById("school-card-AS").classList.add("nanodegree-cards-active");
     document.getElementById("school-card-Cloud").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-AI").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-Programing").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-Data").classList.remove("nanodegree-cards-active");
     document.getElementById("school-card-Business").classList.remove("nanodegree-cards-active");
    document.getElementById("school-data").className = "school-title  ";
    document.getElementById("school-programming").className = "school-title  ";
    document.getElementById("school-AI").className = "school-title  ";
    document.getElementById("school-cloud").className = "school-title  ";
    document.getElementById("school-As").className = "school-title selected ";
    document.getElementById("school-Business").className = "school-title  "; 
 
  }

  function Business(){
    document.getElementById("school-card-Business").classList.add("nanodegree-cards-active");
    document.getElementById("school-card-AS").classList.remove("nanodegree-cards-active");
    document.getElementById("school-card-Cloud").classList.remove("nanodegree-cards-active");
    document.getElementById("school-card-AI").classList.remove("nanodegree-cards-active");
    document.getElementById("school-card-Programing").classList.remove("nanodegree-cards-active");
    document.getElementById("school-card-Data").classList.remove("nanodegree-cards-active");
    document.getElementById("school-data").className = "school-title  ";
    document.getElementById("school-programming").className = "school-title  ";
    document.getElementById("school-AI").className = "school-title  ";
    document.getElementById("school-cloud").className = "school-title  ";
    document.getElementById("school-As").className = "school-title  ";
    document.getElementById("school-Business").className = "school-title selected "; 
 
  }
