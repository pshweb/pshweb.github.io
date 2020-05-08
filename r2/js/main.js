$(function(){

    $('.slideshow').each(function(){
        var $container = $(this),
            $slideGroup = $container.find('.slideshow-slides'),
            $slides = $slideGroup.find('.slide'),
            $nav = $container.find('.slideshow-nav'),
            $indicator = $container.find('.slideshow-indicator'),

            slideCount = $slides.length,
            currentIndex = 0,
            duration = 500,
            interval = 3000,
            easing = 'easeInOutExpo',
            indicatorHTML = '',
            timer;

            //HTML 요소의 배치 및 생성, 삽입
            //1. 각 슬라이드의 위치 결정
            //2. 인디케이터에 a태그 생성
            $slides.each(function (i) {
                $(this).css({left:100 * i + '%'});
                indicatorHTML += '<a href="#">' + (i+1) + '</a>'
            });
            //인디케이터에 콘텐츠 삽입
            $indicator.html(indicatorHTML);

            //모든 슬라이드를 나타낼 수 있는 함수
            
            function goToSlide(index) {
            //슬라이드 그룹을 대상 위치에 맞게 이동 
                $slideGroup.animate({left:-100 * index + '%'}, duration, easing);
                currentIndex = index;
                updateNav();
            } 

            //슬라이드 상태에 따라 네비게이션과 인디케이터를 업데이트하는 함수
            function updateNav(){
                var $navPrev = $nav.find('.prev'), //이전링크
                    $navNext = $nav.find('.next');

                //첫 번째 슬라이드라면 prev를 삭제 
                if(currentIndex == 0) {
                    $navPrev.addClass('disabled')
                }else{
                    $navPrev.removeClass('disabled')
                }
                //마지막 슬라이드라면 next를 삭제
                if(currentIndex == slideCount - 1) {
                    $navNext.addClass('disabled')
                }else{
                    $navNext.removeClass('disabled')
                }

                //현재 슬라이드의 인디케이터를 해제 
                 $indicator.find('a').removeClass('active')
                 .eq(currentIndex).addClass('active');    
            }
            
            //타이머를 시작하는 함수
            function startTimer(){
                timer = setInterval(function(){
                    //현재 슬라이드 인덱스에 따라 다음에 표시할 슬라이드를 결정하는 구간
                    //마지막 슬라이드라면 첫 번째 슬라이드의 인덱스값을 저장
                    var nextIndex = (currentIndex + 1) % slideCount;
                    goToSlide(nextIndex);
                }, interval);
            }
            //타이머를 중지하는 함수
            function stopTimer(){
                clearInterval(timer);
            }

            //이벤트를 등록
            //hasClass()매개변수로 지정한 class속성값이 포함되어 있는지 확인하는메서드
            $nav.on('click', 'a', function(event){
                event.preventDefault(); //reset
                if($(this).hasClass('prev')){
                    goToSlide(currentIndex - 1);
                }else {
                    goToSlide(currentIndex + 1);
                }
            });
            $indicator.on('click', 'a', function(event){
                event.preventDefault(); //reset
                if(!$(this).hasClass('active')){
                    goToSlide($(this).index());
                }
            });

            //마우스오버 시에는 타이머를 정지시키고, 마우스아웃 시에는 타이머를 작동
            $container.on({
                mouseenter:stopTimer,
                mouseleave: startTimer
            });

            //첫번째 슬라이드 표시
            goToSlide(currentIndex);

            // 타이머 시작
            startTimer();
    });

});