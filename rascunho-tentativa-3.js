var digit = window.document.getElementById('telaCalculadora');
var caracteres = 0;
var numero;
var numero1;
var numero2;
var novoNum;
var resultado;
var maisAtivado = false;
var menosAtivado = false;
var vezesAtivado = false;
var divididoAtivado = false;
var igualAtivado = false;
var intersecaoMaiseMenos = false;
var operadorAtivado = false;



function igualActivate() {
    numero = null;
    numero1 = null;
    numero2 = null;
    maisAtivado = false;
    menosAtivado = false;
    vezesAtivado = false;
    divididoAtivado = false;
    caracteres = 0;
}


function click0() {
    if (caracteres == 0) {
        numero = "0";
        digit.innerText = numero;
        caracteres++;
    } else {
        if (igualAtivado) {
            igualActivate();
            numero = "0";
            digit.innerText = numero;
            caracteres++;
        } else {
            numero = numero + "0";
            digit.innerText = numero;
            caracteres++;
        }
    }

    igualAtivado = false;

}


function click1() {
    if (caracteres == 0) {
        numero = "1";
        digit.innerText = numero;
        caracteres++
    } else {
        if (igualAtivado == true) {
            igualActivate();
            caracteres = 0;
            numero = "1";
            digit.innerText = numero;
            caracteres++;
        } else {

            numero = numero + "1";
            digit.innerText = numero;
            caracteres++;
        }

    }

    igualAtivado = false;

}

function click2() {
    if (caracteres == 0) {
        numero = "2";
        digit.innerText = numero;
        caracteres++
    } else {
        if (igualAtivado == true) {
            igualActivate();
            caracteres = 0;
            numero = "2";
            digit.innerText = numero;
            caracteres++;
        } else {

            numero = numero + "2";
            digit.innerText = numero;
            caracteres++;
        }
    }

    igualAtivado = false;
}

function click3() {

    if (caracteres == 0) {
        numero = "3";
        digit.innerText = numero;
        caracteres++;
    } else {
        if (igualAtivado == true) {
            igualActivate();
            caracteres = 0;
            numero = "3";
            digit.innerText = numero;
            caracteres++;

        } else {

            numero = numero + "3";
            digit.innerText = numero;
            caracteres++;

        }



    }

    igualAtivado = false;

}

function click4() {

    if (caracteres == 0) {
        numero = "4";
        digit.innerText = numero;
        caracteres++
    } else {
        if (igualAtivado == true) {
            igualActivate();
            caracteres = 0;
            numero = "4";
            digit.innerText = numero;
            caracteres++;
        } else {

            numero = numero + "4";
            digit.innerText = numero
            caracteres++;
        }
    }

    igualAtivado = false;
}


function click5() {

    if (caracteres == 0) {
        numero = "5";
        digit.innerText = numero;
        caracteres++
    } else {
        if (igualAtivado == true) {
            igualActivate();
            caracteres = 0;
            numero = "5";
            digit.innerText = numero;
            caracteres++;
        } else {

            numero = numero + "5";
            digit.innerText = numero;
            caracteres++;
        }

    }

    igualAtivado = false;
}

function click6() {

    if (caracteres == 0) {
        numero = "6";
        digit.innerText = numero;
        caracteres++
    } else {
        if (igualAtivado == true) {
            igualActivate();
            caracteres = 0;
            numero = "6";
            digit.innerText = numero;
            caracteres++;
        } else {

            numero = numero + "6";
            digit.innerText = numero;
            caracteres++;
        }
    }

    igualAtivado = false;

}

function click7() {

    if (caracteres == 0) {
        numero = "7";
        digit.innerText = numero;
        caracteres++
    } else {
        if (igualAtivado == true) {
            igualActivate();
            caracteres = 0;
            numero = "7";
            digit.innerText = numero;
            caracteres++;
        } else {

            numero = numero + "7";
            digit.innerText = numero;
            caracteres++;
        }
    }

    igualAtivado = false;

}

function click8() {

    if (caracteres == 0) {
        numero = "8";
        digit.innerText = numero;
        caracteres++
    } else {
        if (igualAtivado == true) {
            igualActivate();
            caracteres = 0;
            numero = "8";
            digit.innerText = numero;
            caracteres++;
        } else {

            numero = numero + "8";
            digit.innerText = numero;
            caracteres++;
        }
    }

    igualAtivado = false;

}

function click9() {

    if (caracteres == 0) {
        numero = "9";
        digit.innerText = numero;
        caracteres++;
    } else {
        if (igualAtivado == true) {
            igualActivate();
            caracteres = 0;
            numero = "9";
            digit.innerText = numero;
            caracteres++;
        } else {

            numero = numero + "9";
            digit.innerText = numero;
            caracteres++;
        }
    }

    igualAtivado = false;

}





function clickMais() {
    if (caracteres == 0) {
        digit.innerText = " + ";
    } else {
        if (operadorAtivado) {

            if (menosAtivado) { //Caso alguém já tenha feito operações de menos e agora esteja fazendo operações de mais também.
                intersecaoMaiseMenos = true;
                maisComMenos();

            }

            if (vezesAtivado) {
                maisComVezes();

            }


        } else {
            if (menosAtivado) {
                intersecaoMaiseMenos = true;
                    maisComMenos();
            }
            if (maisAtivado) {
                if (menosAtivado) {
                    intersecaoMaiseMenos = true;
                    maisComMenos();
                } else {

                    maisConsecutivo();
                }
            } else {
                maisSimples();
            }
        }
    }
}

function maisSimples() { //É o mais(+) simples, já tem um número, recebe outro e soma.
    numero1 = Number(numero);
    numero = numero + " +";
    digit.innerText = numero;
    maisAtivado = true;
    caracteres = 0;
}

function maisConsecutivo() { //Quando o usuário vai somando sem clicar no igual, soma depois soma de novo e assim por diante.
    numero2 = Number(numero);
    novoNum = numero1 + numero2;
    numero1 = novoNum;
    numero = novoNum;
    digit.innerText = numero + " +";
    caracteres = 0;
}

function maisComMenos() {
    numero2 = Number(numero);
    novoNum = numero1 - numero2;
    numero1 = novoNum;
    numero = novoNum;
    digit.innerText = numero + " +";
    caracteres = 0;
    menosAtivado = false;
    maisAtivado = true;
}

function maisComVezes() { //Revisar
    numero2 = resultado;
    numero = numero2;
    digit.innerText = numero + " +";
}


function clickMenos() {
    if (caracteres == 0) {
        digit.innerText = " - ";
    } else {
        if (maisAtivado) { //Caso alguém já tenha feito operações de mais e agora esteja fazendo operações de menos também.
            intersecaoMaiseMenos = true;
            menosComMais();
            numero1 = novoNum;
            numero = novoNum;
            digit.innerText = numero + " -";
            caracteres = 0;
            maisAtivado = false;
            menosAtivado = true;
        } else {
            if (menosAtivado) {
                menosConsecutivo();
            } else {
                menosSimples();
            }
        }
    }
}

function menosSimples() {//É o menos(-) simples, já tem um número, recebe outro e subtrai.
    numero1 = Number(numero);
    numero = numero + " -";
    digit.innerText = numero;
    menosAtivado = true;
    caracteres = 0;
}


function menosConsecutivo() { //Quando o usuário vai subtraindo sem clicar no igual, subtrai depois subtrai de novo e assim por diante.
    numero2 = Number(numero);
    novoNum = numero1 - numero2;
    numero1 = novoNum;
    numero = novoNum;
    digit.innerText = numero + " -";
    caracteres = 0;
}


function menosComMais() {
    numero2 = Number(numero);
    novoNum = numero1 + numero2;
}


function clickVezes() {
    if (caracteres == 0) {
        digit.innerText = " X ";
    } else {
        if (vezesAtivado) {
            vezesConsecutivo();
        } else {
            vezesSimples();
        }

        operadorAtivado = true;

    }
}

function vezesSimples() {//é o vezes(*) simples, já tem um número, recebe outro e multiplica.
    numero1 = Number(numero);
    numero = numero + " X";
    digit.innerText = numero;
    vezesAtivado = true;
    caracteres = 0;

}

function vezesConsecutivo() { //Quando o usuário vai multiplicando sem clicar no igual, multiplica. depois multiplica de novo e assim por diante.
    numero2 = Number(numero);
    novoNum = numero1 * numero2;
    numero1 = novoNum;
    numero = novoNum;
    digit.innerText = numero + " X";
    caracteres = 0;

}


function clickIgual() {
    if (caracteres == 0) {
        digit.innerText = " = ";
    } else {
        if (maisAtivado) { //Quando é a operação de Mais(+)
            numero2 = Number(numero);
            resultado = numero1 + numero2;
            digit.innerText = resultado;

        }

        if (menosAtivado) { //Quando é operação de subtração(-)
            numero2 = Number(numero);
            resultado = numero1 - numero2;
            digit.innerText = resultado;
        }

        if (vezesAtivado) {
            numero2 = Number(numero);
            resultado = numero1 * numero2;
            digit.innerText = resultado;
        }

        igualAtivado = true;

    }
}

function clickPonto() {
    if (caracteres == 0) {
        digit.innerText = " . ";
    } else {
        numero = numero + ".";
        digit.innerText = numero;
        caracteres++;
    }
}


