function mostrar()
{

	
	// declarar variables
	
	var contador=0;
	var respuesta=true;
	var primerainteracion=true;
	var maximo;
	var minimo;



	
	while (respuesta) {
		var numero=prompt("ingrese numero");
		numero=parseInt(numero);

		///validacion del numero 

		while (isNaN(numero)) {
			numero=prompt("error.No es un numero")
			numero=parseInt(numero);
			
		}
		///operaciones
        if (primerainteracion) {
			primerainteracion=false;

			minimo=numero;
			maximo=numero;
			
		} else {
			if (numero> maximo) {
			maximo=numero;
		} if (numero<minimo) {
			minimo=numero;
		} 
			
		}
		
		respuesta=confirm("Desea continuar?");
		

	}
	document.getElementById('maximo').value=maximo;
	document.getElementById("minimo").value=minimo;
	
}	

//FIN DE LA FUNCIÓN