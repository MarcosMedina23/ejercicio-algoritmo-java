// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio 1: calcular la cantidad de segundos que estan incluidas en el 
// numero de horas, minutos y segundos ingresados por el usuario 
function sin_titulo() {
	var horas = new Number();
	var minutos = new Number();
	var seg = new Number();
	var horas_seg = new Number();
	var minutos_seg = new Number();
	var total_seg = new Number();
	document.write("digite las horas: ",'<BR/>');
	horas = Number(prompt());
	document.write("digite los minutos: ",'<BR/>');
	minutos = Number(prompt());
	document.write("digite los seg: ",'<BR/>');
	seg = Number(prompt());
	// calcular la equivalente en segundos 
	horas_seg = horas*3600;
	minutos_seg = minutos*60;
	total_seg = horas_seg+minutos_seg+seg;
	document.write("los segundos equivalentes son: ",total_seg,'<BR/>');
}

