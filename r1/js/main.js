//collap 메뉴

$(document).ready(function(){
        $(".gnb_dep1 li a.mnb").click(function(){//대메뉴를 클릭하면
            $(".gnb_dep2").removeClass("on");//서브메뉴 on이라는 클래스를 삭제해라.모든 서브메뉴 높이가 0-->안보이게 해라
            $(this).next(".gnb_dep2").addClass("on");//대메뉴 바로뒤에오는 서브메뉴에 on이라는 클래스를 추가해라.높이가 160px-->보이게 해라
            $(".gnb_dep1 li a.mnb").removeClass("on");//대메뉴에 on을 삭제해라
            $(this).addClass("on");//내자신(지금 내가 클릭한 대메뉴) on을 추가해라
        });
        var wd = parseInt($(".vs").width());// 문자열을 정수로 바꾸는 함수 즉 
        $(".btn_box li").click(function(){//버튼박스의 li를 클릭하면
            var idx = $(this).index();//내자신(li)의 인덱스(0,1,2,3,4)를 idx라는 변수명으로 저장해라
            $(".img_box").not(":animated").animate({"margin-left" : wd*idx*-1+"px"}, 600);
            //vs의 ma
            //0번째라면 *0*-1에 px단위 붙이면 0
            //1번째라면 *1*-1   -->-1
            $(".btn_box li").removeClass("on");//모든 li에 on을 제거
            $(this).addClass("on");//내가 클릭한 li에 on을 추가
        });
    });    


//pc 메인메뉴   

$(document).ready(function(){//문서가 시작이 되면
   var idx;
    $('.navBox').hide();
    $(".gnbDep1 li").hover(function(){ 
         idx=$(this).index();
        $(this).find(".navBox").show();
    });
    $(".gnbDep1 li").mouseleave(function(){
        idx=$(this).index();
       $(this).find(".navBox").hide(); 
    });
    $("#gnb a.mnb1").click(function(){//대메뉴를 클릭하면
            $(".gnb_sub1").removeClass("on");//서브메뉴 on이라는 클래스를 삭제해라.모든 서브메뉴 높이가 0-->안보이게 해라
            $(this).next(".gnb_sub1").addClass("on");//대메뉴 바로뒤에오는 서브메뉴에 on이라는 클래스를 추가해라.높이가 125px-->보이게 해라
            $("#gnb a.mnb1").removeClass("on");//대메뉴에 on을 삭제해라
            $(this).addClass("on");//내자신(지금 내가 클릭한 대메뉴) on을 추가해라
        });
});




<!--
	//쿠키저장 함수
	function setCookie( name, value, expiredays ) { 
		var todayDate = new Date(); 
		todayDate.setDate( todayDate.getDate() + expiredays ); 
		document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";" 
	}

	$(document).ready(function(){
		$("#promotionBanner .btnClose").click(function(){
			//오늘만 보기 체크박스의 체크 여부를 확인 해서 체크되어 있으면 쿠키를 생성한다.
			if($("#chkday").is(':checked')){
				setCookie( "topPop", "done" , 1 ); 
				//alert("쿠키를 생성하였습니다.");
			}
			//팝업창을 위로 애니메이트 시킨다. 혹은 slideUp()
			//$('#promotionBanner').animate({height: 0}, 500);
			$('#promotionBanner').slideUp(500); 
		});
	});

//-->  
