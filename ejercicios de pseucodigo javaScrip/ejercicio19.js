// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio 19: elaborarun programa que me muestre los dias de los semanas
// cuando ingreses los siete primeros numeros.
function ejercicio19() {
	var num = new Number();
	num = Number(prompt());
	switch (num) {
	case 1:
		document.write("lunes",'<BR/>');
		break;
	case 2:
		document.write("martes",'<BR/>');
		break;
	case 3:
		document.write("miercoles",'<BR/>');
		break;
	case 4:
		document.write("jueves",'<BR/>');
		break;
	case 5:
		document.write("virnes",'<BR/>');
		break;
	case 6:
		document.write("sabado",'<BR/>');
		break;
	case 7:
		document.write("domingo",'<BR/>');
		break;
	default:
		document.write("error, no exixte el dia para ese numero",'<BR/>');
	}
}

