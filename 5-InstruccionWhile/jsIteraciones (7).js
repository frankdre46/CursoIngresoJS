function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var iterador=5;

	iterador=prompt("Cuantos....");
	

	while (contador< iterador) {
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

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;


}

}
//FIN DE LA FUNCIÓN