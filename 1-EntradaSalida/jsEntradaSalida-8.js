/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{   var  numerodividendo;
    var numerodivisor;
    var numerodividendoparseado;
    var numerodivisorparseado;
    var resultado;


    numerodividendo=document.getElementById("numeroDividendo").value;
    numerodivisor=document.getElementById("numeroDivisor").value;

    numerodividendoparseado=parseInt(numerodividendo);
    numerodivisorparseado=parseInt(numerodivisor);

    //resultado 
    resultado=numerodividendoparseado % numerodivisorparseado;
    resultado="El resultado es "+resultado;
    
    alert(resultado);
    


	
}
