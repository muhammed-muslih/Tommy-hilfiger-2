$(document).ready(function(){
    $(".nav-link").mouseenter(function(){
        $(this).css({"color":"red"})
        
    })
    $(".nav-link").mouseleave(function(){
        $(this).css({"color":"#00174F"})
       
    })

    $(".btns").mouseenter(function(){
        $(this).css({"background-color":"#CC0C2F"})
       
    })
    $(".btns").mouseleave(function(){
        $(this).css({"background":"#00174F"})
    })



})