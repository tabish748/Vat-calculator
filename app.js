let temporal = 0;
let operacion = '';
var input = document.getElementById('input');

function add(num) {
    if (num == 0) {
        if (input.value[input.value.length - 1] != '0' || input.value.length > 1) {
            input.value = input.value + num;
        }
    } else if (num == '.') {
        if (input.value[input.value.length - 1] != '.' && input.value != '') {
            input.value = input.value + num;
        }
    } else {
        input.value = input.value + num;
    }
}

function operacionFunction(operador) {
    operacion = operador;
    temporal = input.value;
    input.value = '';
}

function igual() {
    if (operacion != '') {
        input.value = eval(temporal + operacion + input.value);
    }
}

function inverso() {
    input.value = input.value * -1;
}

function porciento() {
    input.value = input.value / 100;
}

function cleanInput() {
    if (input.value != '') {
        input.value = '';
    } else {
        temporal = 0;
        operacion = '';
    }
}

// **********
function openvatamount(){
 document.getElementById("amount-popup-area").style.display="block"  ;


 
}

function removevatamount(){
    document.getElementById("amount-popup-area").style.display="none"  ;
    var vatRate= document.getElementById("vatrateinput").value;  
    document.getElementById("showrate").innerText = vatRate ;   
   }
   










   function addvatfunction(){

    var b=document.getElementById("input").value;
   var a= parseFloat(document.getElementById("input").value);
   var vatRate = document.getElementById("showrate").innerText  ;  
   if( b ==  '' )
   {
       alert("Please enter a valid number");
   }
   else{
    document.getElementById("after-calculation-vat-wrapper").style.display="block";
    document.getElementById("calculatorTable").style.display="none";
//    var span_Text = document.getElementById("showrate").innerText;
//     alert(span_Text);
document.getElementById("netamount").innerText = a;

document.getElementById("atvat").innerText= vatRate;

var amountatvatrate =  a*(vatRate /100);

document.getElementById("vatatrate").innerText = amountatvatrate;
var grossamounts=amountatvatrate + a;
document.getElementById("grossamount").innerText=grossamounts;
document.getElementById("basedon").innerText=a;


   }

   }

   function removevatfunction()
   {
    var b=document.getElementById("input").value;

    if( b ==  '' )
    {
        alert("Please enter a valid number");
    }
    else{
        document.getElementById("after-calculation-vat-wrapper").style.display="block";
        document.getElementById("calculatorTable").style.display="none";
    
    
        var a= parseFloat(document.getElementById("input").value);
        var vatRate = document.getElementById("showrate").innerText  ;  
    
        var removeformula=a/(1+ (vatRate/100));
    
         var removevarrate = a - removeformula;
        document.getElementById("netamount").innerText = removeformula;
    
        document.getElementById("atvat").innerText= vatRate;
    
        
        document.getElementById("vatatrate").innerText = removevarrate;
    
        document.getElementById("grossamount").innerText=a;
        document.getElementById("basedon").innerText=a;
    }
  
   }

   function backtocalc(){
    document.getElementById("after-calculation-vat-wrapper").style.display="none";
    document.getElementById("calculatorTable").style.display="block";

   }
   function restartcalc(){
    document.getElementById("after-calculation-vat-wrapper").style.display="none";
    document.getElementById("calculatorTable").style.display="block";
    cleanInput();
   }


   function showsidebarmenu() {
    $(".side-bar-menu-wrapper").removeClass("animate__animated animate__fadeOutRight");
    $(".side-bar-menu-wrapper").addClass("animate__animated animate__fadeInRight");
    $(".side-bar-menu-wrapper").addClass(" animate__delay-0.2s");
   
    $(".side-bar-menu-wrapper").addClass("show");
}

function hidesidebarmenu() {
    $(".side-bar-menu-wrapper").removeClass("animate__animated animate__fadeInRight");
    $(".side-bar-menu-wrapper").addClass("animate__animated animate__fadeOutRight");
    $(".side-bar-menu-wrapper").addClass(" animate__delay-0.2s");


}