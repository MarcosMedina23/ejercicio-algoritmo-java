// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function principal() {
	var c, resultado;
	var a = new Number();
	var b = new Number();
	var cresultado = new Number();
	document.write("digite el valor de a: ",'<BR/>');
	a = Number(prompt());
	document.write("digite el valor de b: ",'<BR/>');
	b = Number(prompt());
	document.write("digite el numero de c: ",'<BR/>');
	c = Number(prompt());
	resultado = (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
	document.write("el resultado es: ",resultado,'<BR/>');
}

