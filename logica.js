window.logica = {};

window.logica.yes = () => {
    let contentName = document.getElementById('contentName');
    contentName.innerHTML = `
    <div class="block">
        <p>Ingresa tu nombre:</p>
        <input type="text" class="form-control" id="name">
        <button type="button" class="btn btn-warning mt-2" name="enviar" value="enviar" onclick="window.logica.nameUser()">Enviar</button>
    </div>
    `;
    window.logica.nameUser();
}

window.logica.nameUser = () => {
    let questionName = document.getElementById('name').value;
    if (questionName.length === 0) {
        alert("Porfavor ingrese un nombre");
    } else {
        let contentName = document.getElementById('contentName');
        contentName.innerHTML = `
        <p class = "text-center">${questionName} empecemos a jugar</p>
        <div class="form-check">
            <form name="formQuestion ">
                <div id="question1 ">
                <p>¿Que lenguaje de programacion enseñan en Laboratoria?</p>
                    <input class="form-check-input" type="radio" value="css" name="firstQuestion">
                    <label class="form-check-label">CSS</label> </br>
                    <input class="form-check-input" type="radio" value="javascript" name="firstQuestion">
                    <label class="form-check-label"> Javascript</label> </br>
                    <input class="form-check-input" type="radio" value="php" name="firstQuestion">
                    <label class="form-check-label">PHP</label></br>
                    <input class="form-check-input" type="radio" value="c++" name="firstQuestion">
                    <label class="form-check-label">C++</label></br>
                    <input class="form-check-input" type="radio" value="java" name="firstQuestion">
                    <label class="form-check-label">Java</label></br>
                </div>
                <div id="question2 ">
                <p>¿Cuantos meses dura el bootcamp de Laboratoria?</p>
                    <input class="form-check-input" type="radio" value="2" name="secondQuestion">
                    <label class="form-check-label">2</label></br>
                    <input class="form-check-input" type="radio" value="4" name="secondQuestion">
                    <label class="form-check-label">4</label></br>
                    <input class="form-check-input" type="radio" value="6" name="secondQuestion">
                    <label class="form-check-label">6</label></br>
                    <input class="form-check-input" type="radio" value="8" name="secondQuestion">
                    <label class="form-check-label">8</label></br>
                    <input class="form-check-input" type="radio" value="10" name="secondQuestion">
                    <label class="form-check-label">10</label></br>
                </div>
            </form>
        </div> `;
    }

}

window.logica.no = () => {
    let contentName = document.getElementById('contentName');
    contentName.innerHTML = `
    <p class="text-center display-4 text-success">:'(</p>
    <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-warning mt-2" name="volver" value="volver" onclick="location.reload()">Volver</button>
    </div>
    `;
}


//comprobacion de respuestas
function checkAnswer() {
    document.getElementById("confirmation").style.display = "none";
    var answer1 = document.formQuestion.firstQuestion.value;
    var answer2 = document.formQuestion.secondQuestion.value;
    var score1 = 0;
    var score2 = 0;
    var scoreTotal = score1 + score2;

    if (answer1 == "javascript") {
        document.getElementById("answerRight").innerHTML = document.getElementById("answerRight").innerHTML + "<p>Correcto, enseña JavaScript </p>";
        score1 += 100;
    } else {
        document.getElementById("answerWrong").innerHTML = document.getElementById("answerWrong").innerHTML + "<p>Lastima te equivocaste, enseña JavaScript </p>";
    }

    if (answer2 == "6") {
        document.getElementById("answerRight").innerHTML = document.getElementById("answerRight").innerHTML + "<p>Correcto, son 6 meses </p>";
        score2 += 100;
    } else {
        document.getElementById("answerWrong").innerHTML = document.getElementById("answerWrong").innerHTML + "<p>Lastima te equivocaste, son 6 meses </p>";
    }

    document.getElementById("points").innerHTML = document.getElementById("points").innerHTML + ""
}
//accion al responder que no quiere jugar

function no() {
    document.getElementById("bye").innerHTML = ":'(";
}