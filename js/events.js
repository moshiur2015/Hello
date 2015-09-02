/*$(document).ready(function(){
    $("#all").click(function(){
        $("#webds").show(100);
        $("#webd").show(100);
        $("#graphics").show(100);
    });
    $("#hide").click(function(){
        $("#webds").hide(100);
        $("#webd").hide(100);
        $("#graphics").hide(100);
    });
    $("#wds").click(function(){
        $("#webds").show(100);
        $("#webd").hide(100);
        $("#graphics").hide(100);
    });
    $("#wd").dblclick(function(){
        $("#webds").hide(100);
        $("#webd").show(100);
        $("#graphics").hide(100);
    });
    $("#gra").dblclick(function(){
        $("#webds").hide(100);
        $("#webd").hide(100);
        $("#graphics").show(100);
    });
    $("#popup").click(function(){
        window.open("https://facebook.com", "blank", "height=400, width=400");
    });
}); 

$(document).ready(function(){
    $("#webds").mouseover(function(){
        $("#webds").hide(100);
    });
});*/

$(document).ready(function(){
   
     /*$("#slup").click(function(){
        $(".slide").slideUp(100);
    });
    $("#sldown").click(function(){
        $(".slide").slideDown(100);
    });
    $("#sltog").click(function(){
        $(".slide").slideToggle(100);
    });
    $("#stp").click(function(){
        $(".slide").stop(100);
    });
    $("#del").click(function(){
        $(".slide").delay(4000).fadeOut();
    });
    
   $("#md").mouseup(function(){
       $(".slide").hide(100);
   }); 
    
    $(":input:text").focusin(function(){
        alert("Focus In");
    });
     $(":input:password").focusout(function(){
        alert("Focus Out");
    });*/
    
    $("#pass").keyup(function(){
        var count=$(this).val().length;
        if(count<1){
             $("#alert_msg").text("");
            $("#alert_msg").removeClass("red");
            $("#alert_msg").removeClass("green");
            $("#alert_msg").removeClass("orange");
        }
        else if(count<8){
            $("#alert_msg").text("Password must be at least 8");
            $("#alert_msg").addClass("red");
            $("#alert_msg").removeClass("green");
            $("#alert_msg").removeClass("orange");}
            
        else if(count<12){
            $("#alert_msg").text("");
            $("#alert_msg").addClass("orange");
            $("#alert_msg").removeClass("green");
            $("#alert_msg").removeClass("red");
        }
        else if(count<16){
            $("#alert_msg").text("Password strength is good.");
            $("#alert_msg").addClass("orange");
            $("#alert_msg").removeClass("green");
            $("#alert_msg").removeClass("red");
        }
        else{
            $("#alert_msg").text("Password Strength is strong");
            $("#alert_msg").addClass("green");
            $("#alert_msg").removeClass("red");
            $("#alert_msg").removeClass("orange");
        }
    });
    
    var characters= 150;
    $(".cr").html("<b>"+characters+"</b> characters remaining");
    $("#msg").keyup(function(){
        var newchr= $("#msg").val().length;
        var chr_remains=characters-newchr;
        $(".cr").html("<b>"+chr_remains+"</b> characters remaining");
    });
    
    var color=$("#bgcolor").val();
    $("body").css("background", color);
    
    $("#bgcolor").change(function(){
        color=$("#bgcolor").val();
        $("body").css("background", color);
    });
    
    
    $(".gallery").css("opacity", 0.5);
    $(".gallery").mouseover(function(){
        $(this).fadeTo(100,1);
        $(".gallery").not(this).fadeTo(100,0.5);
    });
    
    
    
});