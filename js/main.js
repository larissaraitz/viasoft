

document.getElementById('tabelaDescontos').style.display = "none"; 

function formataDinheiro(n) {
    return "R$ " + n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
}
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function soNumeros(v){
    return v.replace(/\D/g,"")
}
function calcLiquido(){
    var bruto = parseFloat(document.getElementById("bruto").value);
    var percentINSS;
    var IRRF;
    var error = '';

    if (bruto !== null && bruto !== '' && isNaN(bruto) == false){
        if(bruto <= 1830.29){
            percentINSS = 8
        } else if(bruto >= 1830.29 && bruto <= 3050.52){
            percentINSS = 9
        } else{
            percentINSS = 11
        }
        var INSS = parseFloat((bruto*percentINSS)/100)
        var liquido = parseFloat(bruto-INSS)
    
        if(liquido <= 1903.98){
            IRRF = 0
        } else if(liquido >= 1903.98 && liquido <= 2826.65){
            IRRF = 142.80
        } else if(liquido >= 2826.65 && liquido <= 3751.05){
            IRRF = 354.80
        } else if(liquido >= 3751.05 && liquido <= 4664.68){
            IRRF = 636.13
        } else {
            IRRF = 869.36
        }
        liquido = parseFloat(liquido-IRRF)
    
        document.getElementById("resultliquido").innerHTML = formataDinheiro(liquido);
        document.getElementById("inss").innerHTML = formataDinheiro(INSS);
        document.getElementById("irrf").innerHTML = formataDinheiro(IRRF);
        document.getElementById("liquido").innerHTML = formataDinheiro(liquido);
        document.getElementById("error").innerHTML = ""; 
        document.getElementById('tabelaDescontos').style.display = ""; 
    } else{
        document.getElementById("error").innerHTML = "Informe seu salário bruto!";
    }

    document.getElementById('bruto').value ='';
}


