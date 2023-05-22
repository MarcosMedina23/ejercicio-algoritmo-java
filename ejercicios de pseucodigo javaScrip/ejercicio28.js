// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio 28: leer 10 numeros e imprimir cuantos son positivos,
// cuantos negativos y cuantos neutros.
function ejercicio28() {
	var conteo, conteo_negativos, conteo_neutro, negativos;
	var num = new Number();
	var i = new Number();
	var conteo_positivos = new Number();
	var conteo_negativo = new Number();
	var conteo_neutros = new Number();
	conteo_positivos = 0;
	conteo_negativo = 0;
	conteo_neutro = 0;
	document.write(i,",digite el numero: ",'<BR/>');
	num = Number(prompt());
	if (num==0) {
		conteo_neutros = conteo_neutros+1;
	} else {
		if (num>0) {
			conteo_positivos = conteo_positivos+1;
		} else {
			conteo_negativos = conteo-negativos+1;
		}
	}
	document.write("la cantidad de positivos es: ",conteo_positivos,'<BR/>');
	document.write("la cantidad de negativos es: ",conteo_negativos,'<BR/>');
	document.write("la cantidad de neutros es: ",0,'<BR/>');
}

