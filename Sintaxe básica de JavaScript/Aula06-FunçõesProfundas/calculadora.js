function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1- soma(+)\n 2- subtração(-)\n 3- multiplicação(*)\n 4- divisão(/)\n 5- divisão inteira(%)\n 6- potenciação(**) '));

    if (!operacao || operacao >= 7) {
        alert('ERRO - operação inválida');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if (!n1 || !n2) {
            alert('ERRO - Algo de errado não está certo')
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                nova_operacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                nova_operacao();
            }
            function multiplicao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                nova_operacao();
            }
            function divisao() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                nova_operacao();
            }
            function divisao_inteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                nova_operacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado} `)
                nova_operacao();
            }
        
            function nova_operacao() {
                let opcao = prompt('Deseja fazer uma nova operação?\n 1- Sim\n 2- Não')
        
                if (opcao == 1){
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!')
                } else {
                    alert('Digite uma opção válida')
                    nova_operacao();
                }
            }
        }
    
        
    
        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicao();
        } else if (operacao == 4) {
            divisao();
        } else if (operacao == 5) {
            divisao_inteira();
        } else if (operacao == 6) {
            potenciacao();
        }
    }

    }

calculadora();