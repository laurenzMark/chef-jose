$(document).ready(function () {
    






    $(".side_nav li").click(function (e) { 
        e.preventDefault();

        let clicked_location = $(this).attr("id");
        console.log(clicked_location);

        
        window.location.href = clicked_location +".html";
        
        
    });
    $("#screencontroll").click(function (e) { 
        e.preventDefault();
        if (!document.fullscreenElement) {
            $("#screencontroll img").attr("src", "../image/offscreen.png")
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                document.documentElement.msRequestFullscreen();
            }
        } else {
            // Exit fullscreen
            $("#screencontroll img").attr("src", "../image/fullscreen.png")

            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        }
    });
    $("#refresh").click(function (e) { 
        e.preventDefault();
        location.reload()
    });




    let rotatedimg = false;

    $("#allcategory_open").click(function (e) { 
        e.preventDefault();
        if (rotatedimg == false) {
            $("#allcategory_open img").css("transform","rotate(90deg)")
            $("#allcategory_open img").css("transition",".3s")
            $(".category_nav_inner").addClass("category_nav_new");
            rotatedimg = true;
            
        }else{
            
            $("#allcategory_open img").css("transform","rotate(0)")
            $(".category_nav_inner").removeClass("category_nav_new");
            rotatedimg = false;
        }
    });
 
    $(".category_nav_inner li:nth-child(1)").addClass("prod_nav")


    $(".products li").click(function (e) { 
        e.preventDefault();
        
        $(".products li").removeClass("prod_nav");


        $(this).addClass("prod_nav")
    });
  


});