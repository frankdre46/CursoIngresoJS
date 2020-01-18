function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Enero":
        alert("que comiences bien el año"); 
        break;

        case "Marzo":
        alert("A clases"); 
        break;
        
        case "Julio":
        alert("Se vienen las vacaciones"); 
        break;

        case "Diciembre":
        alert("Felices Fiestas"); 
        break;

    default: 
    alert("no hay eventos en este mes")
        break;
    
    

}



}//FIN DE LA FUNCIÓN