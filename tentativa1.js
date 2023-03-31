
    var digit = window.document.getElementById('telaCalculadora');
            digit.scrollTop = digit.scrollWidth;  //mantem o scroll horizontal no final do textArea quando sai da janela e volta. As vezes da certo e as vezes não uai.
            var caracteres = 0;
            var numero;
            var operadorAtivado = false;
            var maisAtivado = false;
            var menosAtivado = false;
            var divididoAtivado = false;
            var vezesAtivado = false;
            var igualAtivado = false;
            var numero1 = null;
            var numero2 = null;
            var resultado = null;
            var novoNum = null;
    
    
    
    
            function click0() {
                    if (caracteres == 0) {
                        digit.innerText = "0";
                        numero = "0";
                        caracteres++;
                    } else {
                        numero = numero + "0";
                        digit.innerText = numero;
                        caracteres++;
                    }
    
            }
    
            function click1() {
                if (caracteres == 0) {
                    digit.innerText = "1";
                    numero = "1";
                    caracteres++
                } else {
                    numero = numero + "1";
                    digit.innerText = numero;
                    caracteres++;
    
                }
    
            }
    
            function click2() {
                if (caracteres == 0) {
                    digit.innerText = "2";
                    numero = "2";
                    caracteres++
                } else {
                    numero = numero + "2";
                    digit.innerText = numero;
                    caracteres++;
                }
    
            }
    
            function click3() {
                if (caracteres == 0) {
                    digit.innerText = "3";
                    numero = "3";
                    caracteres++;
                } else {
                    numero = numero + "3";
                    digit.innerText = numero;
                    caracteres++;
                }
    
            }
    
            function click4() {
                if (caracteres == 0) {
                    digit.innerText = "4";
                    numero = "4";
                    caracteres++
                } else {
                    numero = numero + "4";
                    digit.innerText = numero
                    caracteres++;
                }
            }
    
    
            function click5() {
                if (caracteres == 0) {
                    digit.innerText = "5";
                    numero = "5";
                    caracteres++
                } else {
                    numero = numero + "5";
                    digit.innerText = numero;
                    caracteres++;
    
                }
    
            }
    
            function click6() {
                if (caracteres == 0) {
                    digit.innerText = "6";
                    numero = "6";
                    caracteres++
                } else {
                    numero = numero + "6";
                    digit.innerText = numero;
                    caracteres++;
                }
    
            }
    
            function click7() {
                if (caracteres == 0) {
                    digit.innerText = "7";
                    numero = "7";
                    caracteres++
                } else {
                    numero = numero + "7";
                    digit.innerText = numero;
                    caracteres++
                }
    
            }
    
            function click8() {
                if (caracteres == 0) {
                    digit.innerText = "8";
                    numero = "8";
                    caracteres++
                } else {
                    numero = numero + "8";
                    digit.innerText = numero;
                    caracteres++
                }
    
            }
    
            function click9() {
                if (operadorAtivado == false) {
                    if (caracteres == 0) {  //se não tiver nenhum algarismo digitado ainda
                        digit.innerText = "9";
                        numero = "9";
                        caracteres++
                    } else {               //se já tiver algum algarismo digitado
                        numero = numero + "9";
                        digit.innerText = numero;
                        caracteres++;
                    }
                }
    
                if (operadorAtivado == true) {  //se já foi ativado o / * - ou +
                    if (caracteres == 0) {    //se não tiver nenhum algarismo digitado ainda
                        numero = "9";
                        digit.innerText = numero;
                        caracteres++;
                    } else {                   //se já tiver algum algarismo digitado
                        numero = numero + "9";
                        digit.innerText = numero;
                        caracteres++;
                    }
    
                }
            }
    
            function clickPonto() {
                if (caracteres == 0) {
                    digit.innerText = " . ";
                } else {
                    numero = numero + ".";
                    digit.innerText = numero;
                }
    
            }
    
            function clickDividido() {
                if (caracteres == 0) {
                    digit.innerText = " / "
                } else {
                    numero1 = Number(numero);
                    numero = numero + " /"
                    digit.innerText = numero;
                    operadorAtivado = true;
                    divididoAtivado = true;
                    numero = null;
                    caracteres = 0;
                }
    
            }
    
            function clickMenos() {
                if (operadorAtivado == false) {
                    if (caracteres == 0) {
                        digit.innerText = " - ";
                    } else {
                        numero1 = Number(numero);
                        numero = numero + " -";
                        digit.innerText = numero;
                        operadorAtivado = true;
                        menosAtivado = true;
                        numero = null;
                        caracteres = 0;
                    }
                }
    
                if (operadorAtivado == true) {
                    if (caracteres = 0) {
    
                    } else {
                        numero2 = Number(numero);
                        novoNum = numero1 - numero2;
                        numero1 = novoNum;
                        numero = String(novoNum);
                        numero = numero + " -";
                        digit.innerText = numero;
                        operadorAtivado = true;
                        menosAtivado = true;
                        caracteres = 0;
                    }
                }
    
    
            }
    
            function clickVezes() {
                if (operadorAtivado == false) {
                    if (caracteres == 0) {
                        digit.innerText = " X ";
                    } else {
                        numero1 = Number(numero);
                        numero = numero + " X";
                        digit.innerText = numero;
                        operadorAtivado = true;
                        vezesAtivado = true;
                        numero = null;
                        caracteres = 0;
                    }
                }
    
                if (operadorAtivado == true) {
                    if (caracteres == 0) {
    
                    } else {
                        numero2 = Number(numero);
                        novoNum = numero1 * numero2;
                        numero1 = novoNum;
                        numero = String(novoNum);
                        numero = numero + " X";
                        digit.innerText = numero;
                        operadorAtivado = true;
                        vezesAtivado = true;
                        caracteres = 0;
                    }
                }
    
    
            }
    
            function clickMais() {
                if (operadorAtivado == false) {
                    if (caracteres == 0) {
                        digit.innerText = " + ";
                    } else {
                        numero1 = Number(numero);
                        numero = numero + " +";
                        digit.innerText = numero;
                        operadorAtivado = true;
                        maisAtivado = true;
                        numero = null;
                        caracteres = 0;
                    }
                }
    
                if (operadorAtivado == true) {
                    if (caracteres == 0) {  //não sei porquê dá certo, mas dá certo!
    
                    } else {
                        numero2 = Number(numero);
                        novoNum = numero1 + numero2;
                        numero1 = novoNum;
                        numero = String(novoNum);
                        numero = numero + " +";
                        digit.innerText = numero;
                        operadorAtivado = true;
                        maisAtivado = true;
                        caracteres = 0;
                    }
                }
    
            }
    
            //Refazendo
            /*
            function clickMais() {
                if (igualAtivado == false) {
                    if (caracteres == 0) {
                        digit.innerText = " +";
                    } else {
    
                    }
    
                }
            }
            */
    
            function clickIgual() {
                if (caracteres == 0) {
                    digit.innerText = " = ";
                } else {
                    if (operadorAtivado == false) {
                        digit.innerText = numero;
                    } else {
    
                        numero2 = Number(numero);
    
                        if (divididoAtivado == true) {
                            resultado = numero1 / numero2;
                            digit.innerText = resultado;
                            divididoAtivado = false;
                        }
    
                        if (menosAtivado == true) {
                            resultado = numero1 - numero2;
                            digit.innerText = resultado;
                            menosAtivado = false;
                        }
    
                        if (vezesAtivado == true) {
                            resultado = numero1 * numero2;
                            digit.innerText = resultado;
                            vezesAtivado = false;
                        }
    
                        if (maisAtivado == true) {
                            resultado = numero1 + numero2;
                            digit.innerText = resultado;
                            maisAtivado = false;
                        }
    
                        igualAtivado = true;
                    }
    
    
                }
            }
    
            function clickLimpar() {
    
            }
    

