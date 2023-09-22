let nome_professor
let nome_aluno
let genero_professor
let genero_aluno
let curso
let disciplina

if (genero_aluno ==""){

    console.log('ESTE CAMPO É OBRIGATÓRIO, PREENCHA-O!')
} else if (genero_aluno != "m" || genero_aluno != "f"){

    console.log('ESTE CARACTER É INVÁLIDO')
}

if (genero_professor ==""){

    console.log('ESTE CAMPO É OBRIGATÓRIO, PREENCHA-O!')
} else if (genero_professor != "m" || genero_professor != "f"){

    console.log('ESTE CARACTER É INVALIDO')
}

if (genero_aluno =="m"){

    let aluno = "aluno"
} else if (genero_aluno =="f"){

    let aluno = "aluna"
} 

if (genero_professor == "m"){

    let professor = "professor"
} else if (genero_professor == "f"){

    let professor = "professora"
}