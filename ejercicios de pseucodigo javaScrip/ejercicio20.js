// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio 20: elaborar un programa que me muestre el 
// sigmifica un aniversario de cada decada hasta los 60
function ejercicio20() {
	var decada = new Number();
	document.write("digite una decada",'<BR/>');
	decada = Number(prompt());
	switch (decada) {
	case 10:
		document.write("boda de hojalata",'<BR/>');
		break;
	case 20:
		document.write("boda de porcelana",'<BR/>');
		break;
	case 30:
		document.write("boda de perla",'<BR/>');
		break;
	case 40:
		document.write("boda de rubi",'<BR/>');
		break;
	case 50:
		document.write("boda de oro",'<BR/>');
		break;
	case 60:
		document.write("boda de diamante",'<BR/>');
		break;
	default:
		document.write("decada no existente",'<BR/>');
	}
}

