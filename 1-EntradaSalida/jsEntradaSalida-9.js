/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var resultado 
    var dato
    var sueldo


    dato=document.getElementById("sueldo").value
    sueldo=parseInt(dato)

    resultado=document.getElementById("resultado").value
    resultado=sueldo%10
    
    resultado="El resultado es"+resultado



    


	
}
