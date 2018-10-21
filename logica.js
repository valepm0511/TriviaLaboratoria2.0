window.logica = {};

window.logica.yes = () => {
    document.getElementById('contentQuestion').classList.remove('displayNone');
    document.getElementById('contentQuestion').classList.add('displayBlock');
    window.logica.question();
}

window.logica.question = () => {
    let questionName = document.getElementById('name').value;
    document.getElementById('contentName').classList.remove('displayNone');
    document.getElementById('contentName').classList.add('displayBlock');
    document.getElementById('contentQuestion').classList.add('displayNone');
    document.getElementById('contentQuestion').classList.remove('displayBlock');
    if (questionName.length == 0) {
        alert("Porfavor ingrese un nombre");
    } else {
        let goPlay = document.getElementById('goPlay');
        goPlay.innerHTML = `
        Bien ${questionName}, entonces empecemos!
        `;
        document.getElementById('welcome').classList.remove('displayBlock');
        document.getElementById('welcome').classList.add('displayNone');
        document.getElementById('contentName').classList.add('displayNone');
        document.getElementById('contentName').classList.remove('displayBlock');
        document.getElementById('contentFormQuestion').classList.remove('displayNone');
        document.getElementById('contentFormQuestion').classList.add('displayBlock');
    }
}

window.logica.answers = () => {
    document.getElementById('contentFormQuestion').classList.remove('displayNone');
    document.getElementById('contentFormQuestion').classList.add('displayBlock');
    let answer1 = document.formQuestion.firstQuestion.value;
    let answer2 = document.formQuestion.secondQuestion.value;
    console.log(answer2);
    console.log(answer1);
    let score1 = 0;
    let score2 = 0;
    document.getElementById('contentAnswer').classList.remove('displayNone');
    document.getElementById('contentAnswer').classList.add('displayBlock');
    document.getElementById('contentAnswer');
    // let answerRight = document.getElementById('answerRight');
    // let answerWrong = document.getElementById('answerWrong');

    let scoreTotal = score1 + score2;
    if (answer1 == "javascript") {
        contentAnswer.innerHTML += `<p>Correcto, enseña JavaScript </p>`;
        score1 += 100;
    } else {
        contentAnswer.innerHTML += `<p>Lastima te equivocaste, enseña JavaScript </p>`;
    }

    if (answer2 == "6") {
        contentAnswer.innerHTML += `<p>Correcto, son 6 meses </p>`;
        score2 += 100;
    } else {
        contentAnswer.innerHTML += `<p>Lastima te equivocaste, son 6 meses </p>`;
    }

}

window.logica.no = () => {
    let contentQuestion = document.getElementById('contentQuestion');
    contentQuestion.innerHTML = `
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