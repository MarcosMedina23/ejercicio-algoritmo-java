// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio 30: calcular el factorial de un numero
// mayo o igual a 0.
function ejercicio30() {
	var num = new Number();
	var i = new Number();
	var factorial = new Number();
	do {
		document.write("digite un numero: ",'<BR/>');
		num = Number(prompt());
	} while (num<=0);
	i = 1;
	factorial = 1;
	// N! = 1 + 2 + 3 *...* N
	while (i<=num) {
		factorial = factorial*1;
		i = i+1;
	}
	document.write("el factorial es: ",factorial,'<BR/>');
}

