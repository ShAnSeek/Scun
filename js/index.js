// 第一阶段...第八阶段Tab切换
var ol=document.getElementById('ol')
var ols=ol.children
var ul=document.getElementById('ul')
var lis=ul.children
for(var i=0;i<ols.length;i++){
	ols[i].setAttribute('data-index',i)
	ols[i].onmouseover=function(){
		for(var i=0;i<ols.length;i++){
			ols[i].className=''
			lis[i].style.display='none'
		}
		this.className='tab';
		var index=this.getAttribute('data-index')
		lis[index].style.display='block'
	}
}

// 大图自动切换背景
 var banner = document.getElementById('banners');
    var imgArray = ['ban_img1.jpg','ban_img2.jpg','ban_img3.jpg','ban_img4.jpg','ban_img5.jpg']
    var i = 0;
    setInterval(function () {
        i++;
        i %= imgArray.length;
        banner.style.backgroundImage = 'url(images/'+ imgArray[i] +')';
    }, 3000);


 // 专业人才量少部分  (轮播图)
$(function(){
	var index=0;
	var $lis=$('#box5-l>.box5-lb>.lb-img>li')
	$('.jt-right').click(function(){
		if(index===$lis.length-1){
			index=-1
		}
		index++;
		$lis.eq(index).stop().fadeIn(200).siblings().stop().fadeOut(200)
	})
	$('.jt-left').click(function(){
		if(index===0){
			index=$lis.length
		}
		index--;
		$lis.eq(index).stop().fadeIn(200).siblings().stop().fadeOut(200)
	})
})
 
