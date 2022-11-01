function escreva(){
    for(var i=1; i <= 10; i++){
        for(var j = 1; j <=10; j++){
            document.write(i + " x " + j + " = " + (j*i)+"<br>");
        }
        document.write("<br>");
    }
}

function quadrado(){
    for(var i = 2; i < 11; i++){
        document.write("O quadrado de " + i + " é " + (i*i)+"<br>");
    }
}
function moeda(atual){
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
function total(){
    let val = document.getElementById("valor").value;
    let ju = document.getElementById("juros").value;
    
    let t = document.getElementById("meses").value;
    let resultado = 0;
    let saida = "";
    for(let m = 1; m <= t; m++){
        resultado = (val * ((ju/100)+1));
        val = resultado;
         saida += "Mês " + m + ": " + moeda(val) + "<br>";
       //document.write("Mês " + m + " valor de " + moeda(val) + "<br>");
    }
    document.getElementById("mes").innerHTML = saida;
    document.getElementById("resultado").innerHTML = "Total: " + moeda(resultado);
    // document.write("O total é de: " + moeda(resultado) );
}
