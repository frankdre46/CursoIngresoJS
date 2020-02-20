function mostrar()
{

	var contador=0;
	var acumulador=0;
	var suma 

	while (contador<5) {
		contador++;

		var numero=prompt("ingrese un numero");
		
	
	
		//validar
		numero=parseInt(numero);
		while (isNaN(numero)) {
			numero=prompt("ingrese numero valido");
			numero=parseInt(numero);

			
		}
		//acumulamos
		acumulador +=numero;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN