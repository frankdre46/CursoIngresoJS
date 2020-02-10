/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{  
    var numerodividendoingresado
    var numerodivisoringresado
    var numerodividendoparseado
    var numerodivisorparseado
    var resultado

numerodividendoingresado=document.getElementById("numeroDividendo").value
numerodivisoringresado=document.getElementById("numeroDivisor").value
///
numerodividendoparseado=parseInt(numerodividendoingresado)
numerodivisorparseado=parseInt(numerodivisoringresado)

//////////////////
    resultado=numerodividendoparseado%numerodivisorparseado
    resultado="El resultado es "+resultado


    alert(resultado)
    


	
}
