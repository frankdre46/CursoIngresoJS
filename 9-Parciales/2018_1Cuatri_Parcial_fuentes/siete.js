function mostrar()
{
    var nota 
    var sexo
    var acumuladodenotas=0;
    var notamasbaja
    var contador=0;
    var sexonotabaja=11;
    var contadorvarones=0;
    var promediodenotas

while (contador<5) {

    contador++;

    do{
        nota=prompt("ingrese nota");
        nota=parseInt(nota);
    }while (isNaN(nota) || nota<0||nota>10) {
        
    }do{
        sexo=prompt("ingrese sexo");   
    }while (sexo !="f"&&sexo !="m"); {  
        ////punto a
        acumuladodenotas+=nota;
    }
    ///punto b 
if (contador==1){
    notamasbaja=nota;
}  else {if (nota<notamasbaja) {
    notamasbaja=nota;
    sexonotabaja=sexo;
}
    ////punto c 
    if (nota>=6&&sexo=="m") {
        contadorvarones++;
    }
}

}
///Punto A

promediodenotas=acumuladodenotas/contador;



    alert()

}
