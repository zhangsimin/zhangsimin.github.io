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
	
	//照片墙
	// JavaScript Document
// 代码整理：懒人之家 lanrenzhijia.com
var addEvent = (function () {
  if (document.addEventListener) {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.addEventListener(type, fn, false);
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  } else {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  }
})();

// inner variables
var dragItems;
updateDataTransfer();
var dropAreas = document.querySelectorAll('[droppable=true]');

// preventDefault (stops the browser from redirecting off to the text)
function cancel(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  return false;
}

// update event handlers
function updateDataTransfer() {
    dragItems = document.querySelectorAll('[draggable=true]');
    for (var i = 0; i < dragItems.length; i++) {
        addEvent(dragItems[i], 'dragstart', function (event) {
            event.dataTransfer.setData('obj_id', this.id);
            return false;
        });
    }
}

// dragover event handler
addEvent(dropAreas, 'dragover', function (event) {
    if (event.preventDefault) event.preventDefault();

    // little customization
    this.style.borderColor = "#000";
    return false;
});

// dragleave event handler
addEvent(dropAreas, 'dragleave', function (event) {
    if (event.preventDefault) event.preventDefault();

    // little customization
    this.style.borderColor = "#ccc";
    return false;
});

// dragenter event handler
addEvent(dropAreas, 'dragenter', cancel);

// drop event handler
addEvent(dropAreas, 'drop', function (event) {
    if (event.preventDefault) event.preventDefault();

    // get dropped object
    var iObj = event.dataTransfer.getData('obj_id');
    var oldObj = document.getElementById(iObj);

    // get its image src
    var oldSrc = oldObj.childNodes[0].src;
    oldObj.className += 'hidden';

    var oldThis = this;

    setTimeout(function() {
        oldObj.parentNode.removeChild(oldObj); // remove object from DOM

        // add similar object in another place
        oldThis.innerHTML += '<a id="'+iObj+'" draggable="true"><img src="'+oldSrc+'" /></a>';

        // and update event handlers
        updateDataTransfer();

        // little customization
        oldThis.style.borderColor = "#ccc";
    }, 500);

    return false;
});

// 代码整理：懒人之家 lanrenzhijia.com