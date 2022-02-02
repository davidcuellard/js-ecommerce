"use strict";

$(document).ready(function() {

  const APIURL = 'https://jsonplaceholder.typicode.com/posts' ; 

  $("#sendButton").click(() => { 
    const dataBuyer = {Name: $("#name").val() , Address: $("#address").val() , Phone: $("#phone").val(), TotalPurchase: sum}
      $.ajax({
          method: "POST",
          url:  APIURL,
          data: dataBuyer,
          success: function(){
              console.log(`Successful purchase to: ${JSON.stringify(dataBuyer)}`);
          }
      });
  });
 

});


