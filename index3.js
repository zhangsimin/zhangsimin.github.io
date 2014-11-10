// JavaScript Document
// JavaScript Document
var nowPicId=1;
	var maxPicId=4;
	var picTime;
	
	function showPic(id){
		if(Number(id)){
			clearTimeout(picTime)
			nowPicId=id;
		}

		for(var i=1;i<maxPicId+1;i++){
			if(i==nowPicId){
				document.getElementById('div'+nowPicId).style.display="block";
				

			}else{
				document.getElementById('div'+i).style.display="none";
				
			}
		}

		if(nowPicId==maxPicId){
			nowPicId=1;
		}else{
			nowPicId++;
		}

		picTime=setTimeout("showPic()",1000);
		
	}

	window.onload=showPic;





$(document).ready(function(){
	
	$('ul li a').hover(function(){
		$(this).stop().animate({'paddingLeft':'25px'},'slow');
		$(this).stop().animate({fontSize:'28px'},900);
		
		},function(){
			
			$(this).stop().animate({'paddingLeft':'5px'},'fast');
		$(this).stop().animate({fontSize:'20px'},800);
			});
	
	});









