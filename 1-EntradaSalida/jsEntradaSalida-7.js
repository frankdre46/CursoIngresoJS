/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numeroUnoingresado;
    var numeroDosingresado;
    var numeroUnoparseado;
    var numeroDosparseado;
    var resultado;


    numeroUnoingresado=document.getElementById("numeroUno").value;
    numeroDosingresado=document.getElementById("numeroDos").value;

    numeroUnoparseado=parseInt(numeroUnoingresado);
    numeroDosparseado=parseInt(numeroDosingresado);
   
    //Resultado 
    resultado=numeroUnoparseado+numeroDosparseado;
    resultado="El resultado es "+resultado;
    alert(resultado);
   

	
}

function restar()
{
    var numeroUnoingresado;
    var numeroDosingresado;
    var numeroUnoparseado;
    var numeroDosparseado;
    numeroUnoingresado=document.getElementById("numeroUno").value;
    numeroDosingresado=document.getElementById("numeroDos").value;

    numeroUnoparseado=parseInt(numeroUnoingresado);
    numeroDosparseado=parseInt(numeroDosingresado);
   
    //Resultado 
    resultado=numeroUnoparseado - numeroDosparseado;
    resultado="El resultado es " +resultado;
    alert(resultado);
    
	
}

function multiplicar()
{ 
    var numeroUnoingresado;
    var numeroDosingresado;
    var numeroUnoparseado;
    var numeroDosparseado;
    numeroUnoingresado=document.getElementById("numeroUno").value;
    numeroDosingresado=document.getElementById("numeroDos").value;

    numeroUnoparseado=parseInt(numeroUnoingresado);
    numeroDosparseado=parseInt(numeroDosingresado);
   
    //Resultado 
    resultado=numeroUnoparseado * numeroDosparseado;
    resultado="El resultado es " +resultado;
    alert(resultado);
    

function dividir()
{
    var numeroUnoingresado;
    var numeroDosingresado;
    var numeroUnoparseado;
    var numeroDosparseado;
    numeroUnoingresado=document.getElementById("numeroUno").value;
    numeroDosingresado=document.getElementById("numeroDos").value;

    numeroUnoparseado=parseInt(numeroUnoingresado);
    numeroDosparseado=parseInt(numeroDosingresado);
   
    //Resultado 
    resultado=numeroUnoparseado / numeroDosparseado;
    resultado="El resultado es " +resultado;
    alert(resultado)
}

}