$(document).ready(function(){
    function hideMe(hideSection){
      $("#panel").slideToggle(hideSection * 950);
           
      if($("#flip").attr("data-id")==1){
        $("#flip").html( "+ SEE DETAILS");
        $("#flip").attr("data-id",0);
      }else{
        $("#flip").html ("- HIDE DETAILS");
        $("#flip").attr("data-id",1);
      }
    }

    $("#flip").click(function(){
      hideMe(1);
    })
  });