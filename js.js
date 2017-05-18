var tovar=[ 
{
	name:"apple",
	picture:"1.png",
	prise:100,
	size:2
},
{
	name:"lime",
	picture:"2.png",
	prise:200,
	size:3
},
{
	name:"chery",
	picture:"3.png",
	prise:300,
	size:4
}



];





var a=JSON.stringify(tovar);
//var a=tovar;
console.log(a);

localStorage.setItem('tovar',a);

var loctov=JSON.parse(localStorage.getItem('tovar'));
block.innerHTML=loctov[0].name

/*

/*

???????????

var mass=[];
if(localStorage.getItem('tovar')!=undefined){localStorage.getItem('tovar');}
*//*
localStorage.setItem('tovar',mass);
$(function(){
	var str='';
	for(i=0;i<tovar.length;i++){
	str+="<div class='t'><img src='img/"+tovar[i].picture+"'><h2>"+tovar[i].name+"</h2><p>"+tovar[i].prise+" grn.</p><p>"+tovar[i].size+" kg</p><button class='start' data='"+i+"'>Добавить в локал</button></div>";
	
	}
	$('#block').html(str);
	
	
	
	
	$('.start').on('click',function(){
		
		var c=$(this).attr('data');
		mass.push(tovar[c].name);
		
		localStorage.setItem('tovar',mass);
		
	})
	
	
	
	
	
	
	//когда перехожу ена страницу cart
	var tov=localStorage.getItem('tovar');
	
	$('#blockcart').text(tov);
	//
	
	
	
	$('#dellcart').on('click',function(){ 
	
	localStorage.setItem('tovar','корзина пустая');
	
	
	tov=localStorage.getItem('tovar');
	$('#blockcart').text(tov);
	
	})
	
	
	
})
*/