 $(document).ready(function(){
//hide
 	$('#hide').click(function(){
 	
 	$('.lorem').hide("slow");

 });
 	//show
 	$('#show').click(function(){
 	
 	$('.lorem').show("fast");

 });
 	//toggle
 	$('#toggle').click(function(){
 	
 	$('.lorem').toggle("fast");

 });
 	//fadeOut
 	$('#fadeOut').click(function(){
 	
 	$('.lorem').fadeOut(1500);

 });

 	//fadeIN
 	$('#fadeIn').click(function(){
 	
 	$('.lorem').fadeIn(1500);

 });
 	//fadeToggle
 	$('#fadeToggle').click(function(){
 	
 	$('.lorem').fadeToggle(2000);

 });

});

// alert("ASSALAMUALAIKUM")

function textChange(){
	document.getElementById("para").innerHTML="Answer: Minhaz Faisal";}


$( function() {
    $( "#draggable" ).draggable();
  } );

function textLarger(){
document.getElementById("p").style.fontSize='50px';	
}


function green(){
	document.getElementById("ada").style.color='green';
}
function red(){
	document.getElementById("ada").style.color='red';
}
function blue(){
	document.getElementById("ada").style.color='blue';
}
function hotpink(){
	document.getElementById("ada").style.color='hotpink';
}
function textHide(){
	document.getElementById("joker").style.display='none';	
}

function textShow(){
	document.getElementById("joker").style.display='block';	
}

function imageChange() {
	document.getElementById("img1").src='image/p2.jpg';
}

