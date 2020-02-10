/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUnoingresado
    var numeroDosingresado
    var numeroUnoparseado
    var numeroDosparseado
    var resultado
    ///////
numeroUnoingresado=document.getElementById("numeroUno").value;
numeroDosingresado=document.getElementById("numeroDos").value;

/////////
numeroUnoparseado=parseInt(numeroUnoingresado);
numeroDosparseado=parseInt(numeroDosingresado);
//////
resultado=numeroUnoparseado+numeroDosparseado
resultado="El resultado es " + resultado;


alert(resultado);
}

