$(document).ready(function(){
         var index=0;
         var imgs=$(".img .inner");
         var btns=$(".btn a");//btn 안에 있는 3개 a태그
         var imgCount=$(imgs).length;//이미지 3개
         
         $(imgs).hide();
         $(imgs[index]).show();//$(imgs[0])==$(".img img").eq(0)
         $(btns[index]).addClass("select");//index가 0인 a태그에 select 클래스 추가
         
         $(btns).click(function(){//.btn a태그를 크릭하면
             $(imgs).fadeOut();//모든 이미지가 부드럽게 사라짐
             $(btns).removeClass("select");//모든 a태그에 select클래스 삭제
             index=$(this).attr('id')//변수 인덱스에 클릭한 a태그의 id값을 가져와서 저장
              $(imgs[index]).fadeIn();//이미지도 인덱스와 동일한 이미지가 부드럽게 보여짐 .img img[0],.img img[1],.img img[2]
             $(this).addClass("select");//내가 클릭한 a태그는 select클래스 추가
             
             return false;//a태그 #때문에 위로 올라가는 성질을 거짓으로 만듦
         });
         
         //자동으로 페이드인/페이드아웃
         setInterval(function(){
             $(imgs).fadeOut();
             $(btns).removeClass("select");
             if(imgCount-1!=index){//조건:index가 0,1이면 참.imgCount-1!==0,3-1!=0은 참, 3-1!=1은 참 3-1!=2 이 되면 거짓값이므로 else로 가야함
                index++;//index=index+1
                }else{//index가 2이면
                  index=0;
                }
             $(imgs[index]).fadeIn();//index가 0,1,2이면 해당이미지가 부드럽게 나타남
             $(btns[index]).addClass("select");    
         },3500);
    
    
     $(".btn").click(function(){ //.lst_btn버튼을 클릭하면
                $(".collap_nav_box").addClass("on"); //.box에 on 이라는 클래스를 추가해라.left:-0%
            });
            $(".collap_nav_box .close").click(function(){ //닫기버튼 클릭하면 
                $(".collap_nav_box").removeClass("on"); //.box에 on 이라는 클래스를 삭제해라.left:-110%
            });
    
     });