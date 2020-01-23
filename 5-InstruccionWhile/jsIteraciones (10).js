function mostrar()
{

	var contador=0;
	var acumuladorpositivos;
	var acumuladornegativo;
	var respuesta=true;
	var contadorceros;
	var contadorpares;
	var promediopositivos;
	var pormedionegativos;
	var contadorpositivos;
	var contadornegativos;
	var diferenciaentrepositivosynegativos;


	while(respuesta)
	{
		var numero=prompt("ingrese un numero");
		numero=parseInt(numero);

///////validar
        while (isNaN(numero)) {
			numero=prompt("error");
			numero=parseInt(numero);	
		}
if (numero>0) {
	acumuladorpositivos +=numero;
	contadorceros++;
	
} else if (numero<0){
	acumuladornegativo +=numero;

}else{
	contadorceros++;
}
if(numero%2==0){
	contadorespares++;
}
	respuesta=confirm("Desea continuar?");
	}
if (contadorpositivos !=0) {
promediopositivos=acumuladorpositivos/contadorpositivos;	
}
if (contadornegativos !=0) {
	promedionegativos=acumuladornegativo/contadornegativos;
}
diferenciaentrepositivosynegativos=acumuladorpositivos-acumuladornegativo;
document.write
}//FIN DE LA FUNCIÓN