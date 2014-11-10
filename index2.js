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
	
	
	
	var i=2;
function chk1()
{
	i=1;
	i=i+1;
	document.all.myIframe.src = "p1.html";
}
function chk2()
{
	i=2;
	i=i+1;
	document.all.myIframe.src = "p2.html";
}
function chk3()
{
	i=3;
	i=i+1;
	document.all.myIframe.src = "p3.html";
}
function mychk()
{
    if(i>3)
	{
		i=1;
	}
	switch(i)
	{
		case 1: 
			document.all.myIframe.src = "p1.html";
			break;
		case 2:
		    document.all.myIframe.src = "p2.html";
			break;
		case 3:
		    document.all.myIframe.src = "p3.html";
			break;
		default:
		    break;
	}
	i++;
}



$(document).ready(function(){
	
	$('ul li a').hover(function(){
		$(this).stop().animate({'paddingLeft':'25px'},'slow');
		$(this).stop().animate({fontSize:'28px'},900);
		
		},function(){
			
			$(this).stop().animate({'paddingLeft':'5px'},'fast');
		$(this).stop().animate({fontSize:'20px'},800);
			});
	
	});