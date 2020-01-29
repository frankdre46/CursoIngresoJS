function mostrar()
{
var respuesta;
var numero;
var letra ;
var contadorpares=0;
var contadorimpares=0;
var contadorceros=0;



do {
    ///////
do {
    numero=prompt("ingrese numero");
    numero=parseInt(numero);

} while (isNaN(numero));
do {
    letra=prompt("ingrese una letra");

} while (!isNaN(letra));
////// punto a
if (numero%2==0) {
    contadorpares++;
    if (numero%1==0) {
        contadorimpares++;
    } else {
        contadorceros++;
    }
    
}


    
}














///respuesta=confirm("desea continuar");

//{

/} while (respuesta);

