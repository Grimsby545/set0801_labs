function Question1(){ 

	var a = document.getElementById("pressed3");
	if (a.checked === true) {
		console.log('1111');
		document.getElementById("answerA").style.display = 'block';
		document.getElementById("answerB").style.display = 'none';
	} else {
		console.log('0000')	
		document.getElementById("answerB").style.display = 'block';
		document.getElementById("answerA").style.display = 'none';
	}
}

function show(){ 	
	document.getElementById("explaination").style.display = 'block';

}
function mouseover(){ 	
	document.getElementById("explainationButton").style.backgroundColor = '#FF33CC';

}
function mouseout(){ 	
	document.getElementById("explainationButton").style.backgroundColor = '#FDA5FF';

}