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
