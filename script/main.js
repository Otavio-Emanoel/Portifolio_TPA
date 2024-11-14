//Exercicio 1 - Bimestre 1
// Declarações
const exercicio_1_bim1 = document.getElementById("modal_bim1_ex1")
const exercicio_1_bim1_open = document.getElementById("atividade_1_bim_1")
const exercicio_1_bim1_start = document.getElementById("bim1_ex1_see")
const exercicio_1_bim1_close = document.getElementById("bim1_ex1_close")


exercicio_1_bim1_start.addEventListener("click", () => {
    let num1 = Number(document.getElementById("bim1_ex1_input1").value)
    let num2 = Number(document.getElementById("bim1_ex1_input2").value)
    let num3 = Number(document.getElementById("bim1_ex1_input3").value)
    let num4 = Number(document.getElementById("bim1_ex1_input4").value)
    let num5 = Number(document.getElementById("bim1_ex1_input5").value)
    let pot1 = num1 * num1;
    let pot2 = num2 * num2;
    let pot3 = num3 * num3;
    let pot4 = num4 * num4;
    let pot5 = num5 * num5;
    let som = num1 + num2 + num3 + num4 + num5;
    let potsom = pot1 + pot2 + pot3 + pot4 + pot5;
    document.getElementById("bim1_ex1_res").innerHTML = `
    Potência 1: ${pot1} <br>
    Potência 2: ${pot2} <br>
    Potência 3: ${pot3} <br>
    Potência 4: ${pot4} <br>
    Potência 5: ${pot5} <br>
    Soma: ${som} <br>
    Soma das Potências: ${potsom}`;
})
exercicio_1_bim1_close.addEventListener("click", () => {
    exercicio_1_bim1.style.opacity = "0"
    setTimeout(() => {
        exercicio_1_bim1.style.display = "none"
        document.getElementById("bim1_ex1_res").innerHTML = ""
    }, 1000);
})
exercicio_1_bim1_open.addEventListener("click", () => {
    exercicio_1_bim1.style.opacity = "1"
    exercicio_1_bim1.style.display = "flex"
})

//Exercicio 2 - Bimestre 1

const exercicio_2_bim1 = document.getElementById("modal_bim1_ex2")
const exercicio_2_bim1_open = document.getElementById("atividade_2_bim_1")
const exercicio_2_bim1_start = document.getElementById("bim1_ex2_see")
const exercicio_2_bim1_close = document.getElementById("bim1_ex2_close")

exercicio_2_bim1_close.addEventListener("click", () => {
    exercicio_2_bim1.style.opacity = "0"
    setTimeout(() => {
        exercicio_2_bim1.style.display = "none"
        document.getElementById("bim1_ex2_res").innerHTML = ""
    }, 1000);
});

exercicio_2_bim1_open.addEventListener("click", () => {
    exercicio_2_bim1.style.opacity = "1"
    exercicio_2_bim1.style.display = "flex"
});

exercicio_2_bim1_start.addEventListener('click', () => {
    let num1 = Number(document.getElementById("bim1_ex2_input1").value);
    let num2 = Number(document.getElementById("bim1_ex2_input2").value);
    let num3 = Number(document.getElementById("bim1_ex2_input3").value);
    let soma = num1 + num2 + num3;
    let subtração = num1 - num2 - num3;
    let mult = num1 * num2 * num3;
    let media = soma / 3;
    document.getElementById("bim1_ex2_res").innerHTML = `
    Soma: ${soma} <br>
    Subtração: ${subtração} <br>
    Multiplicação: ${mult} <br>
    Média: ${media}`
});

// Exercicio 3

const exercicio_3_bim1 = document.getElementById("modal_bim1_ex3");
const exercicio_3_bim1_open = document.getElementById("atividade_3_bim_1");
const exercicio_3_bim1_close = document.getElementById("bim1_ex3_close");

exercicio_3_bim1_close.addEventListener("click", () => {
    exercicio_3_bim1.style.opacity = "0";
    setTimeout(() => {
        exercicio_3_bim1.style.display = "none";
    }, 1000);
});

exercicio_3_bim1_open.addEventListener("click", () => {
    exercicio_3_bim1.style.opacity = "1";
    exercicio_3_bim1.style.display = "flex";
});



// Exercicio 4

const exercicio_4_bim1 = document.getElementById("modal_bim1_ex4");
const exercicio_4_bim1_open = document.getElementById("atividade_4_bim_1");
const exercicio_4_bim1_close = document.getElementById("bim1_ex4_close");

exercicio_4_bim1_close.addEventListener("click", () => {
    exercicio_4_bim1.style.opacity = "0";
    setTimeout(() => {
        exercicio_4_bim1.style.display = "none";
    }, 1000);
});

exercicio_4_bim1_open.addEventListener("click", () => {
    exercicio_4_bim1.style.opacity = "1";
    exercicio_4_bim1.style.display = "flex";
});

// Exercicio 5

const exercicio_5_bim1 = document.getElementById("modal_bim1_ex5");
const exercicio_5_bim1_open = document.getElementById("atividade_5_bim_1");
const exercicio_5_bim1_close = document.getElementById("bim1_ex5_close");

exercicio_5_bim1_close.addEventListener("click", () => {
    exercicio_5_bim1.style.opacity = "0";
    setTimeout(() => {
        exercicio_5_bim1.style.display = "none";
    }, 1000);
});

exercicio_5_bim1_open.addEventListener("click", () => {
    exercicio_5_bim1.style.opacity = "1";
    exercicio_5_bim1.style.display = "flex";
});



// 2° Bimestre

// Exercicio 1

const exercicio_1_bim2 = document.getElementById("modal_bim2_ex1")
const exercicio_1_bim2_open = document.getElementById("atividade_1_bim_2")
const exercicio_1_bim2_start = document.getElementById("bim2_ex1_see")
const exercicio_1_bim2_close = document.getElementById("bim2_ex1_close")


exercicio_1_bim2_start.addEventListener("click", () => {
    let primos = [];
    for (let numero = 2; numero <= 100; numero++) {
        let ehPrimo = true;

        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) {
            primos.push(numero);
        }
    }
    document.getElementById("bim2_ex1_res").innerHTML = primos.join(', ');
})

exercicio_1_bim2_close.addEventListener("click", () => {
    exercicio_1_bim2.style.opacity = "0"
    setTimeout(() => {
        exercicio_1_bim2.style.display = "none"
        document.getElementById("bim2_ex1_res").innerHTML = ""
    }, 1000);
})

exercicio_1_bim2_open.addEventListener("click", () => {
    exercicio_1_bim2.style.opacity = "1"
    exercicio_1_bim2.style.display = "flex"
})

// Exercicio 2

const exercicio_2_bim2 = document.getElementById("modal_bim2_ex2")
const exercicio_2_bim2_open = document.getElementById("atividade_2_bim_2")
const exercicio_2_bim2_start = document.getElementById("bim2_ex2_see")
const exercicio_2_bim2_close = document.getElementById("bim2_ex2_close")

exercicio_2_bim2_close.addEventListener("click", () => {
    exercicio_2_bim2.style.opacity = "0"
    setTimeout(() => {
        exercicio_2_bim2.style.display = "none"
        document.getElementById("bim2_ex2_res").innerHTML = ""
    }, 1000);
});

exercicio_2_bim2_open.addEventListener("click", () => {
    exercicio_2_bim2.style.opacity = "1"
    exercicio_2_bim2.style.display = "flex"
});

exercicio_2_bim2_start.addEventListener('click', () => {
    let num = Number(document.getElementById("bim2_ex2_input1").value);
    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }
    document.getElementById("bim2_ex2_res").innerHTML = `${fatorial}`
});

// Exercicio 3

const exercicio_3_bim2 = document.getElementById("modal_bim2_ex3");
const exercicio_3_bim2_open = document.getElementById("atividade_3_bim_2");
const exercicio_3_bim2_close = document.getElementById("bim2_ex3_close");

exercicio_3_bim2_close.addEventListener("click", () => {
    exercicio_3_bim2.style.opacity = "0";
    setTimeout(() => {
        exercicio_3_bim2.style.display = "none";
    }, 1000);
});

exercicio_3_bim2_open.addEventListener("click", () => {
    exercicio_3_bim2.style.opacity = "1";
    exercicio_3_bim2.style.display = "flex";
});



// Exercicio 4

const exercicio_4_bim2 = document.getElementById("modal_bim2_ex4");
const exercicio_4_bim2_open = document.getElementById("atividade_4_bim_2");
const exercicio_4_bim2_close = document.getElementById("bim2_ex4_close");

exercicio_4_bim2_close.addEventListener("click", () => {
    exercicio_4_bim2.style.opacity = "0";
    setTimeout(() => {
        exercicio_4_bim2.style.display = "none";
    }, 1000);
});

exercicio_4_bim2_open.addEventListener("click", () => {
    exercicio_4_bim2.style.opacity = "1";
    exercicio_4_bim2.style.display = "flex";
});

// Exercicio 5

const exercicio_5_bim2 = document.getElementById("modal_bim2_ex5");
const exercicio_5_bim2_open = document.getElementById("atividade_5_bim_2");
const exercicio_5_bim2_close = document.getElementById("bim2_ex5_close");

exercicio_5_bim2_close.addEventListener("click", () => {
    exercicio_5_bim2.style.opacity = "0";
    setTimeout(() => {
        exercicio_5_bim2.style.display = "none";
    }, 1000);
});

exercicio_5_bim2_open.addEventListener("click", () => {
    exercicio_5_bim2.style.opacity = "1";
    exercicio_5_bim2.style.display = "flex";
});

// Bimestre 3

// Exercicio 1

const exercicio_1_bim3 = document.getElementById("modal_bim3_ex1")
const exercicio_1_bim3_open = document.getElementById("atividade_1_bim_3")
const exercicio_1_bim3_start = document.getElementById("bim3_ex1_see")
const exercicio_1_bim3_close = document.getElementById("bim3_ex1_close")


exercicio_1_bim3_start.addEventListener("click", () => {
    let numero1 = Number(document.getElementById("bim3_ex1_input1").value)
    let numero2 = Number(document.getElementById("bim3_ex1_input2").value)
    let numero3 = Number(document.getElementById("bim3_ex1_input3").value)
    let numero4 = Number(document.getElementById("bim3_ex1_input4").value)
    let numero5 = Number(document.getElementById("bim3_ex1_input5").value)
    let numeros = [numero1, numero2, numero3, numero4, numero5]
    let soma = 0
    for (let repeticao = 0; repeticao < numeros.length; repeticao++) {
        soma += numeros.at(repeticao)
    }
    document.getElementById("bim3_ex1_res").innerHTML = `${numero1} + ${numero2} + ${numero3} + ${numero4} + ${numero5} = ${soma}`
})

exercicio_1_bim3_close.addEventListener("click", () => {
    exercicio_1_bim3.style.opacity = "0"
    setTimeout(() => {
        exercicio_1_bim3.style.display = "none"
        document.getElementById("bim3_ex1_res").innerHTML = ""
    }, 1000);
})

exercicio_1_bim3_open.addEventListener("click", () => {
    exercicio_1_bim3.style.opacity = "1"
    exercicio_1_bim3.style.display = "flex"
})

// Exercicio 2

const exercicio_2_bim3 = document.getElementById("modal_bim3_ex2")
const exercicio_2_bim3_open = document.getElementById("atividade_2_bim_3")
const exercicio_2_bim3_start = document.getElementById("bim3_ex2_see")
const exercicio_2_bim3_close = document.getElementById("bim3_ex2_close")

exercicio_2_bim3_close.addEventListener("click", () => {
    exercicio_2_bim3.style.opacity = "0"
    setTimeout(() => {
        exercicio_2_bim3.style.display = "none"
        document.getElementById("bim2_ex2_res").innerHTML = ""
    }, 1000);
});

exercicio_2_bim3_open.addEventListener("click", () => {
    exercicio_2_bim3.style.opacity = "1"
    exercicio_2_bim3.style.display = "flex"
});

exercicio_2_bim3_start.addEventListener('click', () => {
    let palavra1 = document.getElementById("bim3_ex2_input1").value
    let palavra2 = document.getElementById("bim3_ex2_input2").value
    let palavra3 = document.getElementById("bim3_ex2_input3").value
    let palavra4 = document.getElementById("bim3_ex2_input4").value
    let palavras = [palavra1, palavra2, palavra3, palavra4]
    palavras.sort()
    let resultado = document.getElementById("bim3_ex2_res")
    resultado.innerHTML = ""
    for (let repeticao = 0; repeticao < palavras.length; repeticao++) {
        resultado.innerHTML += `${palavras.at(repeticao)}; `
    }
});

// Exercicio 3

const exercicio_3_bim3 = document.getElementById("modal_bim3_ex3");
const exercicio_3_bim3_open = document.getElementById("atividade_3_bim_3");
const exercicio_3_bim3_close = document.getElementById("bim3_ex3_close");
const exercicio_3_bim3_start = document.getElementById("bim3_ex3_see")

exercicio_3_bim3_close.addEventListener("click", () => {
    exercicio_3_bim3.style.opacity = "0";
    setTimeout(() => {
        exercicio_3_bim3.style.display = "none";
    }, 1000);
});

exercicio_3_bim3_open.addEventListener("click", () => {
    exercicio_3_bim3.style.opacity = "1";
    exercicio_3_bim3.style.display = "flex";
});

exercicio_3_bim3_start.addEventListener("click", () => {
    let numero1 = Number(document.getElementById("bim3_ex3_input1").value)
    let numero2 = Number(document.getElementById("bim3_ex3_input2").value)
    let numero3 = Number(document.getElementById("bim3_ex3_input3").value)
    let numero4 = Number(document.getElementById("bim3_ex3_input4").value)
    let numero5 = Number(document.getElementById("bim3_ex3_input5").value)
    let numeros = [numero1, numero2, numero3, numero4, numero5]
    document.getElementById("bim3_ex3_res").innerHTML = ""
    numeros.sort((a, b) => b - a)
    for (let repeticao = 0; repeticao < numeros.length; repeticao++) {
        document.getElementById("bim3_ex3_res").innerHTML += `${numeros.at(repeticao)}; `
    }
})

// Exercicio 4

const exercicio_4_bim3 = document.getElementById("modal_bim3_ex4");
const exercicio_4_bim3_open = document.getElementById("atividade_4_bim_3");
const exercicio_4_bim3_close = document.getElementById("bim3_ex4_close");
const exercicio_4_bim3_start = document.getElementById("bim3_ex4_see")

exercicio_4_bim3_close.addEventListener("click", () => {
    exercicio_4_bim3.style.opacity = "0";
    setTimeout(() => {
        exercicio_4_bim3.style.display = "none";
    }, 1000);
});

exercicio_4_bim3_open.addEventListener("click", () => {
    exercicio_4_bim3.style.opacity = "1";
    exercicio_4_bim3.style.display = "flex";
});

exercicio_4_bim3_start.addEventListener("click", () => {
    let palavra1 = document.getElementById("bim3_ex4_input1").value;
    let palavra2 = document.getElementById("bim3_ex4_input2").value;
    let palavra3 = document.getElementById("bim3_ex4_input3").value;
    let palavra4 = document.getElementById("bim3_ex4_input4").value;
    let palavra5 = document.getElementById("bim3_ex4_input5").value;
    let palavras = [palavra1, palavra2, palavra3, palavra4, palavra5]
    let maiorPalavra = palavras.at(0)
    for (let i = 1; i < palavras.length; i++) {
        if (palavras.at(i).length > maiorPalavra.length) {
            maiorPalavra = palavras.at(i)
        }
    }
    document.getElementById("bim3_ex4_res").innerHTML = `A palavra '${maiorPalavra}' tem ${maiorPalavra.length} caracteres.`
})

// Exercicio 5

const exercicio_5_bim3 = document.getElementById("modal_bim3_ex5");
const exercicio_5_bim3_open = document.getElementById("atividade_5_bim_3");
const exercicio_5_bim3_close = document.getElementById("bim3_ex5_close");
const exercicio_5_bim3_start = document.getElementById("bim3_ex5_see")

exercicio_5_bim3_close.addEventListener("click", () => {
    exercicio_5_bim3.style.opacity = "0";
    setTimeout(() => {
        exercicio_5_bim3.style.display = "none";
    }, 1000);
});

exercicio_5_bim3_open.addEventListener("click", () => {
    exercicio_5_bim3.style.opacity = "1";
    exercicio_5_bim3.style.display = "flex";
});

exercicio_5_bim3_start.addEventListener("click", () => {
    document.getElementById("bim3_ex5_res").innerHTML = ` Base Curricular: <br> `
    let base_curricular = []
    base_curricular.push("Língua Portuguesa", "Língua Inglesa", "Arte", "Educação Fisica", "Matemática", "Física", "Química", "Biologia", "História", "Geografia", "Filosofia", "Sociologia")
    for (let i = 0; i < base_curricular.length; i++) {
        document.getElementById("bim3_ex5_res").innerHTML += base_curricular.at(i) + "<br>"
    }
    document.getElementById("bim3_ex5_res").innerHTML += `<br> Base Tecnica: <br>`
    let base_tecnica = []
    base_tecnica.push("Programação Web", "APS", "Design Digital", "Fundamentos da Informatica", "TPA", "Banco de Dados")
    for (let i = 0; i < base_tecnica.length; i++) {
        document.getElementById("bim3_ex5_res").innerHTML += base_tecnica.at(i) + "<br>"
    }
})