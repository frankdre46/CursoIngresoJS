function mostrar()
{
//tomo la edad  
var edad
edad=document.getElementById("edad").value;
if(edad>17){
    alert("es mayor");
}else{
    if(edad>13){
        alert("es adolescente");
    }else{
        alert("es menor");}

    

}
}