"use strict";

$(document).ready(function() {
  $(".paint").css("border", "dashed 1px rgb(173, 173, 173)")
             .hide(0)
             .delay(100)
             .fadeIn(2000)
});

$("button").hover(function(){
  $( this ).css("background-color", "green")
           .css("color", "white")
           .fadeOut( 0 )
           .fadeIn( 1000 )
  },function(){
    $( this ).css("background-color", "rgb(255, 253, 110)")
            .css("color", "rgb(0, 0, 0)")
            .fadeOut( 0 )
            .fadeIn( 1000 )
  }
);