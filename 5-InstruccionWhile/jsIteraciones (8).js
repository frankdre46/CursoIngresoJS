function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta=true;

	
	while (respuesta) {
		var numero=prompt("ingrese numero");
		numero=parseInt(numero);



		///validacion del numero 

		while (isNaN(numero)) {
			numero=prompt("error.No es un numero")
			numero=parseInt(numero);
			
		}
		////operaciones
		if (numero>=0) {
			positivo+=numero;
		} else {
			negativo*=numero;
			contador++;
		}

		respuesta=confirm("Desea continuar?");





		
	}
if (contador==0) {
	
} else {
	
}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN