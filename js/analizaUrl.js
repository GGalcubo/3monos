//coge una variable dada(por su numero empezando desde 0 o su nombre)			
function cogerVariable(variable){
			
	var tipo = typeof variable;
	var direccion = location.href;
				
	if (tipo == "string"){
		var posicion = direccion.indexOf("?");
		posicion = direccion.indexOf(variable,posicion) + variable.length;
	}
	else if (tipo == "number"){
		var posicion=0;
		for (var contador = 0 ; contador < variable + 1 ; contador++){
			posicion = direccion.indexOf("=",++posicion);
			if (posicion == -1)posicion=999;
		} 
	}
	if (direccion.charAt(posicion) == "="){
		var final = direccion.indexOf("&",posicion);
		if (final == -1){final=direccion.length;};
		return direccion.substring(posicion + 1,final);
	}
}

//Da la cantidad de elementos empezando desde 0
function contarVariables(){
				
	var direccion = self.location.href;
	var posicion = direccion.indexOf("?");
				
	for (var contador = -1 ; posicion != -1 ; ++contador){
		posicion = direccion.indexOf("=",++posicion);
	}
				
	if (contador < 0)contador=0;
				
	return contador;
}

//da el nombre de una variable (haciendose)
function nombreVariable(variable){

	var tipo = typeof variable;
	var direccion = location.href;
				
	if (tipo == "string"){
		var posicion = direccion.indexOf("?");
		if ((posicion > 0) && (direccion.indexOf(variable,posicion) > -1))
			posicion = direccion.indexOf(variable,posicion);
		else
			posicion = 0;
		
		//alert (direccion.substring(posicion));
	}
	else if (tipo == "number"){
		var posicion = 0;
		posicion = direccion.indexOf("?");
		for (var contador = 0 ; ((contador < variable) && (posicion != -1)) ; contador++){
			posicion = direccion.indexOf("&", ++posicion);
		} 
		posicion++;
	}
	if (posicion > 0){
		var final = direccion.indexOf("=",posicion);
		//alert(posicion + " , " + final);
		if (final == -1){final=direccion.length;};
		return direccion.substring(posicion,final);
	}
	
}