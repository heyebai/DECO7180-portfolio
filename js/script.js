$(document).ready(function () {

    // change gif
    $("li", ".desc").click(function() {
        if($(this).attr("id") == "normal") {
            activeChanger(this, 1);
        } else if($(this).attr("id") == "fuzzy") {
            activeChanger(this, 2);
        } else if($(this).attr("id") == "error") {
            activeChanger(this, 3);
        }
        
    });

    function activeChanger(obj, index) {
        $(".desc li").removeClass("active");
        $(obj).addClass("active");
        $(".gifs img").addClass("hidden");
        $(".gifs img:nth-of-type(" + index +")").removeClass("hidden");
    }

    // navbar
    $(window).scroll(function() {
        var scrollPosition = $(document).scrollTop();
        // console.log(scrollPosition);
        if(scrollPosition < 270) {
            $(".navbar").removeClass("navbar-active");
        } else if(scrollPosition >= 270) {
            $(".navbar").addClass("navbar-active");
        }

        if(scrollPosition < 640) {
            $(".navbar-header").addClass("active-state");
            $("#myNavbar li").removeClass("active-state");
        } else if(scrollPosition >= 640 && scrollPosition < 1240) {
            $(".navbar-header").removeClass("active-state");
            $("#myNavbar li").removeClass("active-state");
            $("#myNavbar #am").addClass("active-state");
        } else if(scrollPosition >= 1240 && scrollPosition < 2700) {
            $("#myNavbar li").removeClass("active-state");
            $("#myNavbar #de").addClass("active-state");
        } else if(scrollPosition >= 2700 && scrollPosition < 6550) {
            $("#myNavbar li").removeClass("active-state");
            $("#myNavbar #pa").addClass("active-state");
        } else if(scrollPosition >= 6550 && scrollPosition < 7990) {
            $("#myNavbar li").removeClass("active-state");
            $("#myNavbar #pb").addClass("active-state");
        } else if(scrollPosition >= 7990 && scrollPosition < 9750) {
            $("#myNavbar li").removeClass("active-state");
            $("#myNavbar #pc").addClass("active-state");
        } else if(scrollPosition >= 9750 && scrollPosition < 10250) {
            $("#myNavbar li").removeClass("active-state");
            $("#myNavbar #p").addClass("active-state");
        } else if(scrollPosition >= 10250) {
            $("#myNavbar li").removeClass("active-state");
            $("#myNavbar #cr").addClass("active-state");
        } 
    });
})