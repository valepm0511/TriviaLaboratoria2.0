// consultando nombre del usuario y preguntado si quiere jugar
function nameUser(){
	var questionName = document.getElementById("name").value;
	questionName = document.getElementById("hello").innerHTML = "Hola " + questionName + ", quieres jugar?";
	document.getElementById("welcome").style.display = "none";
}
//accion al responder que si quiere jugar
function yes(){
	document.getElementById("confirmation").style.display = "none";
	document.getElementById("questions").style.display = "block";
}
//comprobacion de respuestas
function checkAnswer(){
	document.getElementById("confirmation").style.display = "none";
	var answer1 = document.formQuestion.firstQuestion.value;
	var answer2 = document.formQuestion.secondQuestion.value;
	var score1 = 0;
	var score2 = 0;
	var scoreTotal = score1 + score2;

	if (answer1 == "javascript") {
		document.getElementById("answerRight").innerHTML = document.getElementById("answerRight").innerHTML + "<p>Correcto, enseña JavaScript </p>";
		score1 += 100;
	}else{
		document.getElementById("answerWrong").innerHTML = document.getElementById("answerWrong").innerHTML + "<p>Lastima te equivocaste, enseña JavaScript </p>";
	}

	if (answer2 == "6") {
		document.getElementById("answerRight").innerHTML = document.getElementById("answerRight").innerHTML + "<p>Correcto, son 6 meses </p>";
		score2 += 100;
	}else{
		document.getElementById("answerWrong").innerHTML = document.getElementById("answerWrong").innerHTML + "<p>Lastima te equivocaste, son 6 meses </p>";
	}

	document.getElementById("points").innerHTML = document.getElementById("points").innerHTML + ""
}
//accion al responder que no quiere jugar

function no(){
	document.getElementById("bye").innerHTML = ":'(";
}

