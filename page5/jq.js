$("document").ready(function(){
    $(".analysis").mouseenter(function(){
        $(".overlay").css("visibility","visible");
    })
    $(".analysis").mouseleave(function(){
        $(".overlay").css("visibility","hidden");
    })


    $(".service").mouseenter(function(){
        $(".overlay2").css("visibility","visible");
    })
    $(".service").mouseleave(function(){
        $(".overlay2").css("visibility","hidden");
    })

    $(".search-icon").click(function(){
        $(".search").css("visibility","visible");
    })
    $(".search-icon").click(function(){
        $("ul").css("visibility","hidden");
    })
    $(".cross").click(function(){
        $(".search").css("visibility","hidden");
    })
    $(".search-icon").click(function(){
        $("ul").css("visibility","visible");
    })


})