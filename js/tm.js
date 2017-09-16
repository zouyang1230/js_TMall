// JavaScript Document	2016   zouyang

window.onload=function()
{
	

	var oDiv = document.getElementById('cont');			
	var oUl = oDiv.getElementsByTagName('ul')[0];		
	var aLi_ul = oUl.getElementsByTagName('li');			
	var oOl = oDiv.getElementsByTagName('ol')[0];		
	var aLi_ol = oOl.getElementsByTagName('li');		
	var aColor = ['#e8e8e8','#385de9','#020202','#7a1e21','#121212'];  
	var oChangeColor = document.getElementById('changeColor');
	var num = 0;
	var timert = null;
	
	
	for(var i=0;i<aLi_ol.length;i++){				
		aLi_ol[i].index = i;
		aLi_ol[i].onmouseover = function(){
			oChangeColor.style.opacity = 0;
			oChangeColor.style.filter = 'alpha(opacity:0)';
			oChangeColor.style.backgroundColor = aColor[this.index];
			startMove(oChangeColor,{opacity:100})								
			for(var i=0;i<aLi_ol.length;i++){
				aLi_ol[i].className = '';
				startMove(aLi_ul[i],{opacity:0});
				aLi_ul[i].style.zIndex = 1;
			}
			
			this.className = 'active';
			aLi_ul[this.index].style.zIndex = 2;		
			startMove(aLi_ul[this.index],{opacity:100});
			num = this.index;			
			
		};
	}
	
	oDiv.onmouseover = function(){
		clearInterval(timert);
	};
	oDiv.onmouseout = function(){
		timert = setInterval(toChanges,2400);
	};
	
	timert = setInterval(toChanges,2400);
	
	function toChanges(){
		if(num == aLi_ol.length-1){
			num = 0;
		}
		else{
			num++;
		}
		
		for(var i=0;i<aLi_ol.length;i++){
			aLi_ol[i].className = '';
			startMove(aLi_ul[i],{opacity:0});
			aLi_ul[i].style.zIndex = 1;
		}
		
		aLi_ol[num].className = 'active';
		aLi_ul[num].style.zIndex = 2;		
		startMove(aLi_ul[num],{opacity:100});
		oChangeColor.style.opacity = 0;
		oChangeColor.style.filter = 'alpha(opacity:0)';
		oChangeColor.style.backgroundColor = aColor[num];			
		startMove(oChangeColor,{opacity:100})							

		
	}


	var oCon = document.getElementById('content');
	var oCon_aLi = oCon.children;
	var oSort = document.getElementById('sort_bg');		
	
	for(var i=0;i<oCon_aLi.length;i++)	
	{
		var a_aLi=oCon_aLi[i].getElementsByTagName('div')[0]   	
		if(a_aLi)
		{
			oCon_aLi[i].onmouseover=function()
			{
				addClass(this,"active");
				var a_Div=this.getElementsByTagName('div')[0];
				a_Div.style.display='block';
			};

			oCon_aLi[i].onmouseout=function()
			{
				removeClass(this,"active");
				var a_Div=this.getElementsByTagName('div')[0];
				a_Div.style.display='none';
			};
		}
	}

		oCon_aLi[oCon_aLi.length-1].onmouseover=function()
		{
			addClass(this,"active");
			oSort.style.display="block";
		}

		oCon_aLi[oCon_aLi.length-1].onmouseout=function()
		{
			removeClass(this,"active");
			oSort.style.display="none";
		}

		oSort.onmouseover=function()
		{
			addClass(oCon_aLi[oCon_aLi.length-1],"active");
			oSort.style.display="block";
		}
		oSort.onmouseout=function()
		{
			removeClass(oCon_aLi[oCon_aLi.length-1],"active");
			oSort.style.display="none";
		}


	var oMall=document.getElementById('mall_m');
	var aCss=getByClass('cs',oMall);
	for(var i=0;i<aCss.length;i++)
	{
		aCss[i].index=i;
		aCss[i].onmouseover=function(){
			var aSpan=this.getElementsByTagName('span')[0];
			aSpan.style.display='block';										
			var aP=this.getElementsByTagName('p');
			for(var i=0;i<aP.length;i++){
				aP[i].style.color='#bd0000';				
			}
		};
		
		aCss[i].onmouseout=function(){
			var aSpan=this.getElementsByTagName('span')[0];
			aSpan.style.display='none';
			var aP=this.getElementsByTagName('p');
			for(var i=0;i<aP.length;i++){
				aP[i].style.color='#aaa9a9';
			}
		};
	}
	
	var oTx=document.getElementById('tx');
	oTx.onmouseover=function()
	{
		var oTspan=this.getElementsByTagName('span')[0];
		var oB=this.getElementsByTagName('b')[0];
		oB.style.color="#fff";
		startMove(oTspan,{top:0});
	}
	oTx.onmouseout=function()
	{
		var oTspan=this.getElementsByTagName('span')[0];
		var oB=this.getElementsByTagName('b')[0];
		oB.style.color="#513a16";
		startMove(oTspan,{top:27});
	}

	var oTxs=document.getElementById('txs');
	var oTspan1=oTxs.getElementsByTagName('span')[0];
	oTxs.onmouseover=function()
	{
		startMove(oTspan1,{top:0});
	}
	oTxs.onmouseout=function()
	{
		startMove(oTspan1,{top:27});
	}

	var alist=getByClass('floor_imges_list2',oMall);
	var alist1=getByClass('floor_imges_list1',oMall);
	for(var i=0;i<alist.length;i++)
	{
		alist[i].onmouseover=alist1[i].onmouseover=function()
		{
			startMove(this,{left:-42});
		}

		alist[i].onmouseout=alist1[i].onmouseout=function()
		{
			startMove(this,{left:110});
		}
	}
	
	var alists=getByClass('floor_logo',oMall);
	var alists1=getByClass('floor_slide',oMall);
	for(var i=0;i<alists.length;i++)
	{
		fnMove(alists[i],'ol','ul','active');
	}
	for(var i=0;i<alists1.length;i++)
	{
		fnMove(alists1[i],'ol','ul','active');
	}
	function fnMove(oList,obj1,obj2,aClass)
	{
		var alists_ol=oList.getElementsByTagName(obj1)[0];
		var alists_ul=oList.getElementsByTagName(obj2)[0];
		var alists_ol_li=alists_ol.getElementsByTagName('li');
		var alists_ul_li=alists_ul.getElementsByTagName('li');
		
		var iWidth = alists_ul_li[0].offsetWidth;
	
		var iOld = 0;
		
		for(var i=1;i<alists_ul_li.length;i++)
		{
			alists_ul_li[i].style.left = iWidth + 'px';
		}
		for(var i=0;i<alists_ol_li.length;i++)
		{
			alists_ol_li[i].index = i;
			alists_ol_li[i].onmouseover = function(){
				for(var i=0;i<alists_ol_li.length;i++){
					alists_ol_li[i].className = '';
				}
				this.className = aClass;
				
				if(this.index>iOld){  //往右移动
					
					alists_ul_li[this.index].style.left = iWidth + 'px';
					startMove(alists_ul_li[iOld],{left : -iWidth});
				}
				else if(this.index<iOld){ //往左移动
					alists_ul_li[this.index].style.left = -iWidth + 'px';
					startMove(alists_ul_li[iOld],{left : iWidth});
				}
				
				startMove(alists_ul_li[this.index],{left : 0});
				
				iOld = this.index;
				
			};
		}
	}

	
	var oMemu=document.getElementById('mall_left');
	var oMemu1=document.getElementById('parent_left');
	var oSn_top=document.getElementById('sn_top');
	window.onscroll=window.onresize=function()
	{
		if( document.body.scrollTop>=93 ){
			oMemu1.style.position = 'fixed';
			startMove(oSn_top,{opacity:100,height:40});
			oSn_top.style.zIndex = 9999;
		}
		else if(document.documentElement.scrollTop>=93)
		{
			oMemu1.style.position = 'fixed';
			startMove(oSn_top,{opacity:100,height:40});
			oSn_top.style.zIndex = 9999;
		}
		else{
			oMemu1.style.position = 'relative';
			clearInterval(oSn_top.timer);
			oSn_top.style.height = 0;
			oSn_top.style.opacity = 0;
			oSn_top.style.filter = 'alpha(opacity:0)';
			oSn_top.style.zIndex = -1;
		}
	}

	var oBut_cn=document.getElementById('but');
	var aBut_cn=oBut_cn.getElementsByTagName('a');
	var oMenu=document.getElementById('mall_left_menu');
	var oMenu_li=oMenu.getElementsByTagName('li');
	var oMenu_p=oMenu.getElementsByTagName('p');
	var acc=true;
	aBut_cn[0].onclick=function()
	{
		for(var i=0;i<oMenu_li.length;i++)
		{
			startMove(oMenu_li[i],{height:69});
		}
		for(var i=0;i<aBut_cn.length;i++)
		{
			aBut_cn[i].style.backgroundColor='#be0000';	
		}
				this.style.backgroundColor='#850000';
		acc=true;
	}
	aBut_cn[1].onclick=function()
	{
		acc=false;
		for(var i=0;i<aBut_cn.length;i++)
		{
			aBut_cn[i].style.backgroundColor='#be0000';	
		}
		this.style.backgroundColor='#850000';
		for(var i=0;i<oMenu_li.length;i++)
		{
			startMove(oMenu_li[i],{height:23});
		}
	}
	
	var oMenuc=document.getElementById('mall_menu_right');
	var iTem=getByClass('item',oMenuc);
	var timer=null;
	var n=0;
	for(var i=0;i<oMenu_li.length;i++)
	{
		oMenu_li[i].index=i;
		oMenu_li[i].onmouseover=function()
		{
			addClass(this,'hover');
			if(acc==false)
			{
				startMove(this,{height:69});
			}
			for(var i=0;i<iTem.length;i++)
			{
				iTem[i].style.display='none';
			}
				iTem[this.index].style.display='block';
			n=this.index;
		}
		oMenu_li[i].onmouseout=function()
		{
			removeClass(this,'hover');
			var aP=this.getElementsByTagName('p');
			if(acc==false)
			{
				startMove(this,{height:23});
			}
		}
	}
	oMemu1.onmouseover=function()
	{
		clearTimeout(this.timer);
	};
	oMemu1.onmouseout=function()
	{
		clearTimeout(this.timer);
		this.timer=setTimeout(function()
		{
			for(var i=0;i<iTem.length;i++)
			{
				iTem[i].style.display='none';
			}
		},100);
	};
	for(var i=0;i<iTem.length;i++)
	{
		iTem[i].onmouseover=function()
		{
			addClass(oMenu_li[n],'hover');
		}
		iTem[i].onmouseout=function()
		{
			removeClass(oMenu_li[n],'hover');
		}
	}
	
	
	var iScroll=document.getElementById('scrollBox');
	bindEvent(window,'scroll',function()
	{
		if(document.body.scrollTop||document.documentElement.scrollTop>250)
		{
			iScroll.style.display='block';
		}
		else
		{
			iScroll.style.display='none';
		}

	})
	
	iScroll.onmouseover=function()
	{
		startMove(iScroll, {opacity:100})
	}
	iScroll.onmouseout=function()
	{
		startMove(iScroll, {opacity:35})
	}
	
	
	
	iScroll.onclick=function()
	{
		
		downMove(0);
	}

	function downMove(target)
	{
		clearInterval(timer);
		timer=setInterval(function()
		{
			var iScrollY=document.body.scrollTop||document.documentElement.scrollTop;
			var iSpeed=(target-iScrollY)/8;
			iSpeed=Math.floor(iSpeed);
			if(iScrollY<=target)
			{
				clearInterval(timer);
			}
			else
			{
				document.body.scrollTop=document.documentElement.scrollTop=iScrollY+iSpeed;
			}
		},30)	
	}
	
	
	

	var show_img=oMall.getElementsByTagName('img');
	var cff=[];
	for(var i=0;i<show_img.length;i++)
	{
		if(show_img[i].getAttribute('_src'))
		{
			cff.push(show_img[i]);
		}
	}
	for(var i=0;i<cff.length;i++)
	{
		cff[i].att=true;
	}

	function toChange()
	{
		var iScroll=document.documentElement.scrollTop||document.body.scrollTop;
		var iClient=document.documentElement.clientHeight;
		for(var i=0;i<cff.length;i++)
		{
			if(posTop(cff[i])<iClient+iScroll&&cff[i].att)
			{
				cff[i].src=cff[i].getAttribute('_src');
				cff[i].style.opacity=0;
				cff[i].style.filter='alpha(opacity:0)';
				startMove(cff[i],{opacity:100});
				cff[i].att=false;
			}
		}
	}
	toChange();

	bindEvent(window,'scroll',function(){
		toChange();
	});
	

	

	var oSj = document.getElementById('club_sj');
	var oSj_img = document.getElementById('c2a');
	var timerSj=null;
	oSj.onmouseover = function()
	{	
		oSj_img.className = 'c2a c2b';
	}
	oSj.onmouseout = function()
	{	
		timerSj=setTimeout(function()			//延迟消失
		{
			oSj_img.className = 'c2a';
		},300);
		
	}
	oSj_img.onmouseover = function()
	{
		 clearTimeout(timerSj);
	}
	oSj_img.onmouseout = function()
	{
		 oSj_img.className = 'c2a';
	}


	var oSub_box1 = document.getElementById('sub_box1');
	var oSub_box2 = document.getElementById('sub_box2');

			oSub_box1.onfocus=function()
		{
			if(this.value=='搜索天猫 商品/品牌/店铺')  
			{
				this.value='';
			}
		}

		
			oSub_box1.onblur=function()
		{
			this.style.color='#999';
			this.style.fontWeight='400';
			this.style.fontSize='14px';
		}
		
		oSub_box1.onkeydown=function()
		{
			if(this.value=='搜索天猫 商品/品牌/店铺')
			{
				this.value='';
			}
		}

		oSub_box1.onkeyup=function()
		{	
			this.style.color='#000';
			this.style.fontWeight='700';
			this.style.fontSize='14px';
		}
		
					oSub_box2.onfocus=function()
		{
			if(this.value=='搜索天猫 商品/品牌/店铺')  
			{
				this.value='';
			}
		}

		
			oSub_box2.onblur=function()
		{
			this.style.color='#999';
			this.style.fontWeight='400';
			this.style.fontSize='14px';
		}
		
		oSub_box2.onkeydown=function()
		{
			if(this.value=='搜索天猫 商品/品牌/店铺')
			{
				this.value='';
			}
		}

		oSub_box2.onkeyup=function()
		{	
			this.style.color='#000';
			this.style.fontWeight='700';
			this.style.fontSize='14px';
		}

	
	
	
	
};
