    $(function(){
        var cnt = 0;
        $(".mix").fadeIn();
        cnt = $(".mix").length;

        function filterPage(){
            $(".order li").removeClass("on");
            $(".order li").eq(0).addClass("on");
            $("#mixItUp").css("margin-top", "0px");
            if(cnt>=13) {
                $(".order li").eq(1).css("display", "block");
                $(".order li").eq(2).css("display", "block");
            } else if(cnt>=7){
                $(".order li").eq(1).css("display", "block");
                $(".order li").eq(2).css("display", "none");
            } else {
                $(".order li").eq(1).css("display", "none");
                $(".order li").eq(2).css("display", "none");
            }
            $(".order li").eq(0).click(function(){
                $(".order li").removeClass("on");
                $(this).addClass("on");
                $("#mixItUp").css("margin-top", "0px");
            });
            $(".order li").eq(1).click(function(){
                $(".order li").removeClass("on");
                $(this).addClass("on");
                $("#mixItUp").css("margin-top", "-800px");
            });
            $(".order li").eq(2).click(function(){
                $(".order li").removeClass("on");
                $(this).addClass("on");
                $("#mixItUp").css("margin-top", "-1600px");
            });
        }        
        filterPage();
        $(".filter").click(function(){
            var activ = $(this).attr("data-filter");
            if(activ=="all"){
                $(".mix").fadeIn();   
                cnt = $(".mix").length;
            } else {
                $(".mix").fadeOut();
                $(".mix").filter(activ).fadeIn();
                cnt = $(".mix").filter(activ).length;
            }
            filterPage();
        });
            
    });