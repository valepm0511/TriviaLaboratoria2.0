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
    document.getElementById('contentFormQuestion').classList.remove('displayBlock');
    document.getElementById('contentFormQuestion').classList.add('displayNone');
    let answer1 = document.formQuestion.firstQuestion.value;
    let answer2 = document.formQuestion.secondQuestion.value;
    let answer3 = document.formQuestion.thirdQuestion.value;
    let answer4 = document.formQuestion.fourthQuestion.value;
    let answer5 = document.formQuestion.fifthQuestion.value;
    let answer6 = document.formQuestion.sixthQuestion.value;
    console.log(answer2);
    console.log(answer1);
    let score = 0;
    document.getElementById('contentAnswer').classList.remove('displayNone');
    document.getElementById('contentAnswer').classList.add('displayBlock');
    document.getElementById('contentAnswer');

    if (answer1 == "javascript") {
        contentAnswer.innerHTML += `<p class="text-success">Correcto, enseña JavaScript </p>`;
        score += 100;
    } else {
        contentAnswer.innerHTML += `<p class="text-danger">Lastima te equivocaste, enseña JavaScript </p>`;
    }

    if (answer2 == "6") {
        contentAnswer.innerHTML += `<p class="text-success">Correcto, son 6 meses </p>`;
        score += 100;
    } else {
        contentAnswer.innerHTML += `<p class="text-danger">Lastima te equivocaste, son 6 meses </p>`;
    }

    if (answer3 == "18") {
        contentAnswer.innerHTML += `<p class="text-success">Correcto, es desde los 18 años </p>`;
        score += 100;
    } else {
        contentAnswer.innerHTML += `<p class="text-danger">Lastima te equivocaste, es desde los 18 años</p>`;
    }

    if (answer4 == "mujeres") {
        contentAnswer.innerHTML += `<p class="text-success">Correcto, todas las mujeres desde los 18 años </p>`;
        score += 100;
    } else {
        contentAnswer.innerHTML += `<p class="text-danger">Lastima te equivocaste, todas las mujeres desde los 18 años</p>`;
    }

    if (answer5 == "1") {
        contentAnswer.innerHTML += `<p class="text-success">Correcto, el slogan es "Talento que Transforma" </p>`;
        score += 100;
    } else {
        contentAnswer.innerHTML += `<p class="text-danger">Lastima te equivocaste, el slogan es "Talento que Transforma"</p>`;
    }

    if (answer6 == "5") {
        contentAnswer.innerHTML += `<p class="text-success">Correcto, Laboratoria esta en 5 paises </p>`;
        score += 100;
    } else {
        contentAnswer.innerHTML += `<p class="text-danger">Lastima te equivocaste, Laboratoria esta en 5 paises</p>`;
    }
    contentAnswer.innerHTML += `<p class="lead text-center">Obtviste ${score} puntos </p>`;



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