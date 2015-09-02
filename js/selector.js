/*$(document).ready
(
function()
{
    $("h3").click
    (
            function()
            {
                alert('Welcome to CodersTrust');
            }
    );
}
);

$(document).ready(function(){
    $("#btn").click(function(){
        alert("Welcome");
    });
    
    $(".btnn").click(function(){
        $(".btnn").hide(5000);
    });
}); 



$(document).ready(function(){
    $("p").hide();
    $("h3").click(function(){
        $("#ct").fadeToggle();
    });
    
    $("h2").click(function(){
        $("#gis").fadeToggle();
    });
});


$(document).ready(function(){
    $("li:odd").addClass("oddcolor");
    $("li:even").addClass("evencolor");
    $("li:first").addClass("firstcolor");
    $("li:last").addClass("lastcolor");
    $("li:eq(10), li:eq(15)").addClass("nthcolor");
    $(":header").click(function(){
         $(this).hide(4000);
    });
    
    
    $("h3:not(h3:eq(5))").fadeOut(4000);
    
   
});*/

$(document).ready(function(){
    $("h2").hide();
    $("#btn").click(function(){
        $("h2:contains('2')").fadeIn(2000);
    });
});











