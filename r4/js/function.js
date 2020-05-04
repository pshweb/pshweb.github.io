function checkemailaddy(f){
	if (f.email_select.value == '1') {
		f.email2.readonly = false;
		f.email2.value = '';
		f.email2.focus();
	}
	else {
 		f.email2.readonly = true;
		f.email2.value = f.email_select.value;
	}
}

//공백 체크=========================================================
function trim(str){
  return str.replace(/(^\s+)|(\s+)$/,"");
}

//엔터키실행 onkeypress==============================================
function check_key(what){
	if(window.event.keyCode==13){			
		what();
	}
}

function check_search2(){
   	var f = document.searchfrm;
 	f.submit();
}


function check_search(){
   	var f = document.searchfrm;
 	f.submit();
}


//이미지 팝업====================================================
function img_popup(imgi,pathfile){
	var img = new Image();
	img.src = document.getElementById(imgi).src;

	var height=parseInt(img.height)+10;
	var width=parseInt(img.width)+20;
	win_open('/module/include/img_popup.php?pathfile='+pathfile, imgi, width, height, '0', '0', 'yes', '1')
}
//아이프레임 리사이징================================================
function resizeHeight(FrameName) {
    if(document.all) {
		 var body_height = frames[FrameName].document.body.scrollHeight;
	} else {
		 var body_height= document.getElementById(FrameName).contentWindow.document.body.offsetHeight;
	}
	
	// 자료가 없을경우 레이어를 보이지 안케하기위해
	if(body_height != 0){ // 자료가 없을대에 높이를 지정해주세요
		document.getElementById(FrameName).style.height=body_height + "px";
	}else{
		document.getElementById(FrameName).style.height=400 + "px";
	}
}

//팝업================================================
function win_pop(page_name,width,height,name,scroll){
	var opt="menubar=no,toolbar=no,resizable=no,location=no,status=no,scrollbars="+scroll+",width="+width+",height="+height;
	var page=page_name;
	var win=open(page,name, opt);
}

//새창
//url : 열릴 url, win_name : 창이름, width : 가로크기, height : 세로크기,
//top : 상하위치, left : 좌우위치, scroll 스크롤유무, center : 새창 가운데 뜨게
//center true 일 경우 top, left 무시
//예시 : <a href="/html/01_fcs/" onclick="win_open(this.href, '', '800', '700', '', '', '1', '1');return false;">
// '/html/01_fcs/' 를 새창에서 가로 800, 세로 700, 가운데로 띄움
function win_open(url, win_name, width, height, top, left, scroll, center){
	if(top)	{
		p_top=top;
	}	else	{
		p_top=0;
	}
	if(left)	{
		p_left=left;
	}	else	{
		p_left=0;
	}
	if(center)	{
		p_top=(screen.height - height) / 2;
		p_left=(screen.width - width) / 2;
	}

	win=window.open(url, win_name, "width="+width+", height="+height+", top="+p_top+", left="+p_left+", scrollbars="+scroll);
	win.window.focus();
}

//이메일체크================================================
function validEmail(strEmail){
	var pattern = /^[_a-zA-Z0-9-\.]+@[\.a-zA-Z0-9-]+\.[a-zA-Z]+$/;
	return pattern.test(strEmail);
}

//아이디체크================================================
function validId(strId,min,max){
	var pattern = eval("/^[a-zA-Z0-9]{"+min+","+max+"}$/");
	return pattern.test(strId);
}

//비밀번호체크================================================
function validPassWord(strPassWord,min,max){
	var pattern = eval("/^[a-zA-Z0-9]{"+min+","+max+"}$/");
	return pattern.test(strPassWord);
}

//비밀번호체크================================================
function valid(strPassWord,min,max){
	var pattern = eval("/.{"+min+","+max+"}$/");
	return pattern.test(strPassWord);
}
//필수입력체크================================================
function nullchk(obj,msg){
	if (trim(obj.value)==""){
		alert(msg);
		obj.focus();
		return false;
	}
}

//필수입력체크================================================
function nullchk_TEXT(obj,msg){
	alert(obj.html);
	if (obj.html==""){
		alert(msg);
		obj.focus();
		return false;
	}
}


//비밀번호체크================================================
function nullchkleng(obj,msg,min,max){
	if (trim(obj.value)=="" || trim(obj.value).length<min || trim(obj.value).length>max){
		alert(msg);
		obj.focus();
		return false;
	}

}

function nullchecked(obj,msg){
	var that = 0;
	for(var i=0;i<obj.length;i++){
		if (obj[i].checked==true){
			that = 1;
			break;
		}
	}
	if (that!=1){		
		obj[0].focus();
		return false;	
	}
}

function nullchecked1(obj,msg){
	if (obj.checked==false){
		alert(msg);
		obj.focus();
		return false;
	}
}


function checkfile(fext){
 	if(fext != 'jpg'  &&  fext != 'png'  &&  fext != 'gif'  &&  fext != 'bmp'){
		alert('이미지 파일만 등록 가능 합니다.');
 		fext.focus();
		return false;
	} 
}


function checkfileMax(fext){
  	if(document.getElementById(fext).files[0].size > 20971520  || document.getElementById(fext).files[0].size < 3 ){
		alert('첨부파일 사이즈는 20MB 이내로 등록 가능합니다.');
 		fext.focus();
		return false;
	} 
}

//수량체크================================================
function isNumeric(s) 
{
	for (i=0; i<s.length; i++) {
		c = s.substr(i, 1);
		if (c < "0" || c > "9") return false;
	}
	return true;
}

function isNum(numchar)
{
	len = numchar.value.length ;
	ch = numchar.value.charAt(len - 1) ;
	if ( ( ch < '0' ) || ( ch > '9') )
	{
		str = numchar.value ;
		for ( i = 0 ; i < len ; i ++ ){
			numchar.value = str.substr(0, len - 1) ;
		}
	}
}

//?================================================
function isKorean(obj) { 
    //var len = obj.value.length; 
    var len = obj.length; 
    var numUnicode; 

    for(i=0;i < len; i++)
    { 
        //numUnicode = obj.value.charCodeAt(i) 
        numUnicode = obj.charCodeAt(i) 
        if ( 44032 <= numUnicode && numUnicode <= 55203 ) 
        { 
            continue; 
        }else{ 
            return false; 
            break; 
        } 
    } 

    return true; 
} 

//전체체크================================================
function alldel_chk(bool){								
	var obj = document.getElementsByName("delchk[]");
	for (var i=0; i<obj.length; i++) {
		obj[i].checked = bool;
	}
}

//엑셀다운로드
function down_excel(url){
	if (!confirm("엑셀 파일로 다운로드 하시겠습니까?")) return;
	var f = document.excel_down;
	f.action=url+".asp";
	f.submit();
}


function gogo(idx){
	location.href=document.getElementById("go_"+idx).href;
}

//날짜검색=========================================================================================
function setSearchDate(num){
	var now = new Date();
	var enddate = now.getFullYear()+'-'+fncLPAD((now.getMonth()+1))+'-'+fncLPAD(now.getDate());
	var startdate
	now.setDate(now.getDate() - num);
	startdate = now.getFullYear()+'-'+fncLPAD((now.getMonth()+1))+'-'+fncLPAD(now.getDate())
	document.searchfrm.startdate.value=startdate;
	document.searchfrm.enddate.value=enddate;
}

function fncLPAD(num){
	if(num<10) return '0'+num;
	else return ''+num;
}
//날짜검색=========================================================================================
 

//숫자에 콤마 삽입 
function commaNum(num) { 
   var minus = false; 
   if (num < 0) { 
      num *= -1; 
      var minus = true; 
   } 
   var dotPos = (num+"").split(".") 
   var dotU = dotPos[0]; 
   var dotD = dotPos[1]; 
   var commaFlag = dotU.length%3; 
   var out = ""; 
   if (commaFlag) { 
      out = dotU.substring(0, commaFlag); 
      if (dotU.length > 3) out += ","; 
   } 
   for (var i = commaFlag; i < dotU.length; i+=3) { 
      out += dotU.substring(i, i+3); 
      if (i < dotU.length-3) out += ","; 
   } 
   if (minus) out = "-" + out; 
   if (dotD) return out + "," + dotD; 
   else return out; 
} 
 
function is_checked(elements_name){
    var checked = false;
    var chk = document.getElementsByName(elements_name);
    for (var i=0; i<chk.length; i++) {
        if (chk[i].checked) {
            checked = true;
        }
    }
    return checked;
}

//이미지 리사이징================================================
function img_resize(imgi,wid,hei){								
	var img = new Image();
	img.src = document.getElementById(imgi).src;
	
	var height=img.height;
	var width=img.width;
	if (width>height){

		if (width>parseInt(wid)){
			document.getElementById(imgi).width = wid;
		}else{
			document.getElementById(imgi).width=img.width;
		}
		
	}else{
		if (height>hei){
			document.getElementById(imgi).height = hei;
		}else{
			document.getElementById(imgi).height=img.height;
		}
	}
}

function wrestNumeric(fld) 
    { 
        if (fld.value.length > 0) 
        { 
            for (i = 0; i < fld.value.length; i++) 
            { 
                if (fld.value.charAt(i) < '0' || fld.value.charAt(i) > '9') 
                { 
                    alert("숫자만 입력가능합니다."); 
                    fld.value="";
					fld.focus();  
					return false;  
                }
            }
        }
    }
function wrestNumeric2(fld) 
    { 
        if (fld.value.length > 0) 
        { 
            for (i = 0; i < fld.value.length; i++) 
            { 
                if (fld.value.charAt(i) < '1' || fld.value.charAt(i) > '9') 
                { 
                    alert("수량은 1 이상만 가능합니다."); 
                    fld.value="1";
					fld.focus();  
					return false;  
                }
            }
        }
    }
 function number_format(data) 
    {
        
        var tmp = '';
        var number = '';
        var cutlen = 3;
        var comma = ',';
        var i;
       
        len = data.length;
        mod = (len % cutlen);
        k = cutlen - mod;
        for (i=0; i<data.length; i++) 
        {
            number = number + data.charAt(i);
            
            if (i < data.length - 1) 
            {
                k++;
                if ((k % cutlen) == 0) 
                {
                    number = number + comma;
                    k = 0;
                }
            }
        }

        return number;
    }

function getNumberFormat(str){
	str = str + "";
	if(str == "" || /[^0-9,]/.test(str)) return str;
	str = str.replace(/,/g, "");
	for(var i=0; i<parseInt(str.length/3, 10); i++){
		str = str.replace(/([0-9])([0-9]{3})(,|$)/, "$1,$2$3");
	}
	return str;
}

function change2(){
		var f = document.f;
		var mailsel = f.mailsel.value;
										
		if (mailsel == "1"){
			f.email2.value = "";	
			f.email2.focus();
		}else{
			f.email2.value = mailsel;	
		}									
	}
function change(){
		var f = document.order_info;
		var mailsel = f.mailsel.value;
										
		if (mailsel == "1"){
			f.email2.value = "";	
			f.email2.focus();
		}else{
			f.email2.value = mailsel;	
		}									
	}
function down(para){
 	window.open("/module/include/filedownload.php?"+para);
}

function chkword(obj, maxlength) { 
 	var str = obj.value; // 이벤트가 일어난 컨트롤의 value 값    
	var str_length = str.length; // 전체길이       // 변수초기화     
	var max_length = maxlength; // 제한할 글자수 크기     
	var i = 0; // for문에 사용     
	var ko_byte = 0; // 한글일경우는 2 그밗에는 1을 더함     
	var li_len = 0; // substring하기 위해서 사용     
	var one_char = ""; // 한글자씩 검사한다     
	var str2 = ""; // 글자수를 초과하면 제한할수 글자전까지만 보여준다.      
	for (i = 0; i < str_length; i++) {         // 한글자추출         
		one_char = str.charAt(i);            
		ko_byte++;        
	}           // 전체 크기가 max_length를 넘지않으면        
	if (ko_byte <= max_length) {             li_len = i + 1;         }            // 전체길이를 초과하면     
	if (ko_byte > max_length) {         
		alert(max_length + " 글자 이상 입력할 수 없습니다. \n 초과된 내용은 자동으로 삭제 됩니다. "); 
		str2 = str.substr(0, max_length);         
		obj.value = str2;     
	}  
	var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
	if( special_pattern.test(str) == true ){
		alert('특수문자는 사용할 수 없습니다.');
		obj.value = str.replace(special_pattern, "");
 	}




	obj.focus();   
}

function chkword_new(obj, maxlength) { 
 	var str = obj.value; // 이벤트가 일어난 컨트롤의 value 값    
	var str_length = str.length; // 전체길이       // 변수초기화     
	var max_length = maxlength; // 제한할 글자수 크기     
	var i = 0; // for문에 사용     
	var ko_byte = 0; // 한글일경우는 2 그밗에는 1을 더함     
	var li_len = 0; // substring하기 위해서 사용     
	var one_char = ""; // 한글자씩 검사한다     
	var str2 = ""; // 글자수를 초과하면 제한할수 글자전까지만 보여준다.      
	for (i = 0; i < str_length; i++) {         // 한글자추출         
		one_char = str.charAt(i);            
		ko_byte++;        
	}           // 전체 크기가 max_length를 넘지않으면        
	if (ko_byte <= max_length) {             li_len = i + 1;         }            // 전체길이를 초과하면     
	if (ko_byte > max_length) {         
		alert(max_length + " 글자 이상 입력할 수 없습니다. \n 초과된 내용은 자동으로 삭제 됩니다. "); 
		str2 = str.substr(0, max_length);         
		obj.value = str2;     
	}  
	/**
	var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
	if( special_pattern.test(str) == true ){
		alert('특수문자는 사용할 수 없습니다.');
		obj.value = str.replace(special_pattern, "");
 	}
	**/


	obj.focus();   
}


/*      form 태그 공통 함수    */
function fnBbsComGoList(){
	document.search_frm.action = document.search_frm.action;
	document.search_frm.submit();
}

function fnBroswerIE(){
	var agent = navigator.userAgent.toLowerCase();
	var rsVal = "";

	if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
		rsVal = true;
	}else {
		rsVal = false;
	}
	return rsVal;
}



function layer_popup(el){

	var $el = $(el);        //레이어의 id를 $el 변수에 저장
	var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

	$el.addClass("on");
	//isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();
	$('.dim-layer').fadeIn()
	$el.fadeIn();
	$el.center();
 
	$el.find('a.btn-layerClose').click(function(){
		$('.dim-layer').fadeOut();
		$el.fadeOut();  
		$el.removeClass("on");
	   return false;
	});
	$el.find('a.pop-close').click(function(){
		$('.dim-layer').fadeOut();
		$el.fadeOut();  
		$el.removeClass("on");
	   return false;
	});

	$('.layer .dimBg').click(function(){
		$('.dim-layer').fadeOut();
		$el.removeClass("on");
	   return false;
	});
}


$.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}

$(document).ready(function () {
	/**
	 $('.pop-type').click(function(){
		var $href = $(this).attr('id');
		layer_popup($href);
	});
	$('.simple-ajax-popup-align-top').magnificPopup({
	  type: 'ajax',
	  alignTop: true,
	  overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});
	**/

});
