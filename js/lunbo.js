  //用window同时加载两个js代码，避免冲突
        window.onload = function()/*onload事件页面加载完成后执行*/ {
			function a(){
            var container = document.getElementById('lunbo1');
            var list = document.getElementById('list');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
         
            var timer;

            function animate(pyl) {
                //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
                //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
                var newLeft = parseInt(list.style.left) + pyl;
                list.style.left = newLeft + 'px';
                //无限滚动判断

                if (newLeft < -5000) {
                    list.style.left = -1000 + 'px';
                }/*向左放完第六张图片后，转回第一张图片时，*/
				if (newLeft > -1000) {
                    list.style.left = -6000 + 'px';
                }/*向右放完第六张图片后，转回第一张图片*/
            }

            function play() {
                //重复执行的定时器
                timer = setInterval(function() {
                    next.onclick();
                }, 3000)
            }/*使轮播向右滚动*/

            function stop() {
                clearInterval(timer);/*取消setInterval设置的timeout*/
            }/*鼠标停止图片停止*/


            prev.onclick = function() {

                animate(1000);
            };

            next.onclick = function() {
                //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断

                animate(-1000);
               
            };

            lunbo1.onmouseover = stop;/*鼠标指针移到元素时触发*/
            lunbo1.onmouseout = play;/*鼠标指针移出元素时*/
            play();
			}
			
			// JavaScript Document
	// lunbo1的js代码
	





	
function b(){
var btns = document.getElementsByClassName('btn2'),
 imgs = document.getElementsByClassName('box2')[0].getElementsByTagName('img');

//  获取按钮和图片元素，存放数组中
var index = 2,
 front = 0,
 back = 0,
 offset = false,
 timer2 = setInterval(timer2,20000);
  
 
 
for(var i=0;i<btns.length;i++){
(function(i){
 btns[i].onclick = function(){click(i)};
}
)(i);       /*点击左或右按键是触发函数，同时函数声明时立即执行*/
 
btns[i].onmouseover = function(){
 offset = true;
}   /*鼠标移入按键*/
btns[i].onmouseout = function(){
 offset = false;  
}  /*鼠标移出按键*/
}
 
for(var i=0;i<imgs.length;i++){
imgs[i].onmouseover = function(){
 offset = true;
}   /*鼠标移入图片*/
imgs[i].onmouseout = function(){
 offset = false;
} /*鼠标移出图片*/
}
 
function timer2(){
console.log(offset) /*类似于alert()，用于在控制台调试信息，并且不会打断操作*/
if(offset){
 return;
}
else{
 click(1)
}
}
 
function click(x){
imgs[index].setAttribute('class',''); /*setAttribute函数用来添加属性并赋值*/
/*===三个等号不会先转换再比较*/
if(x === 0){   /*x=0代表向左播*/
 if(--index < 0){    /*判断当前图片是否为第一张*/
 index = --imgs.length;
 }
 front = back = index;
 if(++front > --imgs.length){front = 0} /*最左边的图如果在最右边，则回去，否则+1*/
 if(--back < 0){back = --imgs.length}
 imgs[front].style.zIndex = '1';
 imgs[back].style.zIndex = '0';
}
else{  /*x为1时向右播*/
 if(++index > --imgs.length){  /*判断当前图片是否是最后一张*/
 index = 0; 
 }
 front = back = index;
 if(++front > --imgs.length){front = 0}
 if(--back < 0){back = --imgs.length}
 imgs[front].style.zIndex = '0';
 imgs[back].style.zIndex = '1';
}
imgs[index].style.zIndex = '10';  /*中间图片永远最高显示*/
imgs[front].setAttribute('class','front')
imgs[index].setAttribute('class','active')
imgs[back].setAttribute('class','back') 
;
}
} //lunbo2的js代码
a();
b();
        }