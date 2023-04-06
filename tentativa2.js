var digit = window.document.getElementById('telaCalculadora');
var caracteres = 0;
var numero;
var operadorAtivado = false;
var maisAtivado = false;
var menosAtivado = false;
var divididoAtivado = false;
var vezesAtivado = false;
var igualAtivado = false;
var intersecaoMaiseMenos = false;
var numero1 = null;
var numero2 = null;
var resultado = null;
var novoNum = null;



function igualActivate() {  //verificar
    
    if (igualAtivado == true) {
        numero = null;
        numero1 = null;
        numero2 = null;
        resultado = null;
        caracteres = 0;
    }
    
}


function click0() {

    if (caracteres == 0) {
        digit.innerText = "0";
        numero = "0";
        caracteres++;
    } else {
        if (igualAtivado == true) {
            igualActivate();
            caracteres = 0;
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

    if (operadorAtivado == false) {
        if (caracteres == 0) {
            digit.innerText = " + ";
        } else {

            numero1 = Number(numero);
            digit.innerText = numero + " +";
            operadorAtivado = true;
            maisAtivado = true;
            caracteres = 0;
        }
    }

    if (operadorAtivado == true) { //se já existe n1, alguém já clicou em + - * ou / ...
        if (caracteres == 0) {

        } else {

        
            numero2 = Number(numero);
            novoNum = numero1 + numero2;
            numero1 = novoNum;
            numero = String(novoNum);
            digit.innerText = numero + " +";
            operadorAtivado = true;
            maisAtivado = true;
            caracteres = 0;

        }
    }

}


function clickMenos() {
    if (operadorAtivado == false) {
        if (caracteres == 0) {
            digit.innerText = " - ";
        } else {
            numero1 = Number(numero);
            digit.innerText = numero + " -";
            operadorAtivado = true;
            menosAtivado = true;
            caracteres = 0;
        }
    }

    if (operadorAtivado == true) {
        if (caracteres == 0) {

        } else {

           
            if (numero1 != null) {

                if (maisAtivado == true) {
                    novoNum = numero1 + numero2;
                    numero2 = novoNum;
                    numero = String(novoNum);
                    digit.innerText = numero + " -";
                    operadorAtivado = true;
                    menosAtivado = true;
                    maisAtivado = false;
                    caracteres = 0;
                    intersecaoMaiseMenos = true;
                } else {

                    if (igualAtivado == true) {
                        novoNum = resultado;
                        numero = String(novoNum) + " -";
                    } else {

                        
                        if (menosAtivado == true) {

                        if (intersecaoMaiseMenos == true) {

                            numero1 = novoNum;
                            numero2 = Number(numero);
                            novoNum = numero1 - numero2;
                            numero1 = novoNum;
                            numero = String(novoNum);
                            digit.innerText = numero + " -";
                            operadorAtivado = true;
                            menosAtivado = true;
                            caracteres = 0;
                        } else {


                            numero2 = Number(numero);
                            novoNum = numero1 - numero2;
                            numero1 = novoNum;
                            numero = String(novoNum);
                            digit.innerText = numero + " -";
                            operadorAtivado = true;
                            menosAtivado = true;
                            caracteres = 0;
                            
                        }
                    }
                } 
                }
            } else {
                numero1 = Number(numero);
                digit.innerText = numero + " -";
                operadorAtivado = true;
                menosAtivado = true;
                caracteres = 0;
            }
        }
    }
}

function clickIgual() {

        if (caracteres == 0) {
            digit.innerText = " = ";
        } else {
            if (maisAtivado == true) {
                numero2 = Number(numero);
                resultado = numero1 + numero2;
                digit.innerText = resultado;
                maisAtivado = false;
            }

            if (menosAtivado == true) {
                if (intersecaoMaiseMenos == false) {

                    numero2 = Number(numero);
                    resultado = numero1 - numero2;
                    digit.innerText = resultado;
                    menosAtivado = false; 
                } else {
                    novoNum = numero1 - numero2;
                    numero2 = novoNum;
                    digit.innerText = numero2;
                    menosAtivado = false;
                    intersecaoMaiseMenos = false;
                }
            }
            
            
            
            igualAtivado = true;
        }
    


    
}