/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    //Declaracion
var numeroUnoingresado;
var numeroDosingresado;
var numeroUnoparseado   ;
var numeroDosparseado;
var resultado;

//obtener los valores por id
numeroUnoingresado=document.getElementById("numeroUno").value;
numeroDosingresado=document.getElementById("numeroDos").value;

//parseo de datos 
numeroUnoparseado= parseInt(numeroUnoingresado);
numeroDosparseado= parseInt(numeroDosingresado);



//Operacion
resultado=numeroUnoparseado + numeroDosparseado;
resultado="El resultado es "+ resultado;
//mostrar resultado 

alert(resultado);


}

