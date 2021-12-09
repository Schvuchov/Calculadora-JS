function calculadora() {
	const operacao = Number(prompt('Escolha uma operação:\n 1-Soma(+)\n 2-Subtração(-)\n 3-Multiplicação(*)\n 4-Divisão(/)\n 5-Divisão inteira(%)\n 6-Potenciação(**)'));

	if (!operacao || operacao >= 7) {
		alert('Erro - operação invalida!');
		calculadora();
	} else {

		let n1 = Number(prompt('Insira o primeiro valor'));
		let n2 = Number(prompt('Insira o segundo valor'));
		let resultado;

		if (!n1 || !n2) {
			alert('Erro - parâmetros invalidos')
			calculadora();
		} else {

			function soma() {
				resultado = n1 + n2;
				alert(`${n1} + ${n2} = ${resultado}`)
				novaOperacao()
			}
			function sub() {
				resultado = n1 - n2;
				alert(`${n1} - ${n2} = ${resultado}`)
				novaOperacao()
			}
			function multi() {
				resultado = n1 * n2;
				alert(`${n1} * ${n2} = ${resultado}`)
				novaOperacao()
			}
			function div() {
				resultado = n1 / n2;
				alert(`${n1} / ${n2} = ${resultado}`)
				novaOperacao()
			}
			function divint() {
				resultado = n1 % n2;
				alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
				novaOperacao()
			}
			function poten() {
				resultado = n1 ** n2;
				alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
				novaOperacao()
			}

			function novaOperacao() {
				let opcao = prompt('Deseja fazer outra operação?\n 1-Sim\n 2-Não');

				if (opcao == 1) {
					calculadora();
				} else if (opcao == 2) {
					alert('Até mais!')
				} else {
					alert('Digite uma opção válida')
					novaOperacao();
				}
			}
		}
		}

		/*if (operacao == 1) {
			soma();
		} else if(operacao == 2) {
			sub();
		} else if(operacao == 3) {
			multi();
		} else if(operacao == 4) {
			div();
		} else if(operacao == 5) {
			divint();
		} else if(operacao == 6) {
			poten();
		}*/

		switch (operacao) {
			case 1:
				soma();
				break;
			case 2:
				sub();
				break;
			case 3:
				multi();
				break;
			case 4:
				div();
				break;
			case 5:
				divint();
				break;
			case 6:
				poten();
				break;
		}
	}



calculadora();
