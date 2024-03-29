function mostrarFormulario(id) {
    // Oculta todos los formularios
    document.querySelectorAll('section').forEach(function(el) {
        el.style.display = 'none';
    }
    );
    // Muestra el formulario deseado
    document.getElementById(id).style.display = 'block';
}

function calcularArea() {
    var b1 = document.getElementById("base1").value;
    var a1 = document.getElementById("altura1").value;

     //el .trim es una funcion usado para validar si se ingreso un valor 
    if (b1.trim() === "") {
        document.getElementById("base1").style.borderBottom = "2px solid red";
        alert("No valido, digite un numero en la base del triangulo");
    } else if (a1.trim() === "") {
        document.getElementById("altura1").style.borderBottom = "2px solid red";
        alert("No valido, digite un numero en la altura del triangulo");
    } else {
        document.getElementById("base1").style.borderBottom = "";
        document.getElementById("altura1").style.borderBottom = "";
        var r = a1 * b1 / 2;
        alert("Su resultado es: " + r);
    }
}

function sumaNumeros(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;

    if (num1.trim() === ""){
        document.getElementById("n1").style.borderBottom = "2px solid red";
        alert ("No valido, digite el primer numero que desea sumar");
    } else if (num2.trim() === ""){
        document.getElementById("n2").style.borderBottom = "2px solid red";
        alert ("No valido, digite el segundo numero que desea sumar");
    } else{
        document.getElementById("n1").style.borderBottom = "";
        document.getElementById("n2").style.borderBottom = "";
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        r = (num1+num2);
        alert("Su resultado es: " + r);
    }
    
}
function elevadoCuadrado(){
    var num1=document.getElementById("nu1").value;

    if (num1.trim() === ""){
        document.getElementById("nu1").style.borderBottom = "2px solid red";
        alert ("No valido, digite el numero que desea elevar");
    }
    else{
        document.getElementById("nu1").style.borderBottom = "";
        r = num1**2;
        alert ("Su resultado es: " + r);
    }
}
function euroDolar(){
    var num1=document.getElementById("euro").value;

    if (num1.trim() === ""){
        document.getElementById("euro").style.borderBottom = "2px solid red";
        alert ("No valido, digite el numero que desea convertir a dolar");
    }
    else{
        document.getElementById("euro").style.borderBottom = "";
        r= num1*1.09;
        alert ("El numero convertido a dolar es: " + r);
    }
}
function ladoCuadrado(){
    var num1=document.getElementById("lado").value;

    if (num1.trim() === ""){
        document.getElementById("lado").style.borderBottom = "2px solid red";
        alert ("No valido, digite un numero"); 
    }
    else{
        document.getElementById("lado").style.borderBottom = "";
        num1 = parseFloat(num1);
        perim = num1+num1+num1+num1;
        area = num1**2;
        alert ("El valor del perimetro es: " + perim + "\nEl valor del area es: " + area);
    }
}
function areavolumenCilindro(){
    var alt1=document.getElementById("altura").value;
    var rad1=document.getElementById("radio").value;

    if (alt1.trim() === ""){
        document.getElementById("altura").style.borderBottom = "2px solid red";
        alert ("No valido, verifique el valor de altura")
    }
    else if (rad1.trim() === ""){
        document.getElementById("radio").style.borderBottom = "2px solid red";
        alert ("No valido, verifique el valor de radio")
    }
    else{
        document.getElementById("altura").style.borderBottom = "";
        document.getElementById("radio").style.borderBottom = "";
        alt1 = parseFloat(alt1);
        rad1 = parseFloat(rad1);
        volumen = rad1**2 * 3.1416 * alt1;
        area = 2 * 3.1416 * rad1 * alt1 + 2 * 3.1416 * rad1**2;
        alert ("El valor del volumen es: " + volumen + "\nEl valor del area es: "+ area);
    }
}
function promedioTresnumeros(){
    var n1=document.getElementById("numer1").value;
    var n2=document.getElementById("numer2").value;
    var n3=document.getElementById("numer3").value;

    if (n1.trim() === ""){
        document.getElementById("numer1").style.borderBottom = "2px solid red";
        alert ("No valido, verifique el primer numero")
    }
    else if (n2.trim() === ""){
        document.getElementById("numer2").style.borderBottom = "2px solid red";
        alert ("No valido, verifique el segundo numero")
    }
    else if (n3.trim() === ""){
        document.getElementById("numer3").style.borderBottom = "2px solid red";
        alert ("No valido, verifique el tercer numero")
    }
    else{
        document.getElementById("numer1").style.borderBottom = "";
        document.getElementById("numer2").style.borderBottom = "";
        document.getElementById("numer3").style.borderBottom = "";
        
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
        n3 = parseFloat(n3);

        promedio = (n1+n2+n3)/3;
        alert("Su promedio de 3 numeros es: " + promedio);

    }
}
function positivoNegativo(){
    var numer1=document.getElementById("num1").value;

    if (numer1.trim() === ""){
        document.getElementById("num1").style.borderBottom = "2px solid red";
        alert ("No valido, verifique el numero");
    }
    else if (numer1 > 0){
        document.getElementById("num1").style.borderBottom = "";
        alert ("El numero ingresado es positivo");
    }
    else if (numer1 < 0){
        document.getElementById("num1").style.borderBottom = "";
        alert ("El numero ingresado es negativo");  
    }
    else{
        document.getElementById("num1").style.borderBottom = "";
        alert ("El numero ingresado es neutro");
    }
}
function mayorMenor(){
    var num1=document.getElementById("nnum1").value;
    var num2=document.getElementById("nnum2").value;

    if (num1.trim() === ""){
        document.getElementById("nnum1").style.borderBottom = "2px solid red";
        alert ("No valido, verifique el primer numero")
    }
    else if (num2.trim() === ""){
        document.getElementById("nnum2").style.borderBottom = "2px solid red";
        alert ("No valido, verifique el segundo numero")
    }
    else if (num1 > num2){
        document.getElementById("nnum1").style.borderBottom = "";
        document.getElementById("nnum2").style.borderBottom = "";
        alert ("El numero mayor es: " + num1 + "\nEl numero menor es: "+ num2);
    }
    else if (num2 > num1){
        document.getElementById("nnum1").style.borderBottom = "";
        document.getElementById("nnum2").style.borderBottom = "";
        alert ("El numero mayor es: " + num2 + "\nEl numero menor es: "+ num1);
    }
    else{
        document.getElementById("nnum1").style.borderBottom = "";
        document.getElementById("nnum2").style.borderBottom = "";
        alert ("Los numeros ingresados son iguales");
    }
}
function tresMenorMayor() {
    var n1 = document.getElementById("nnu1").value;
    var n2 = document.getElementById("nnu2").value;
    var n3 = document.getElementById("nnu3").value;

    n1 = parseInt(n1);
    n2 = parseInt(n2);
    n3 = parseInt(n3);

    if (isNaN(n1)) {
        document.getElementById("nnu1").style.borderBottom = "2px solid red";
        alert("Por favor, verifique el primer numero.");
    }
    else if (isNaN(n2)) {
        document.getElementById("nnu2").style.borderBottom = "2px solid red";
        alert("Por favor, verifique el segundo numero.");
    }
    else if (isNaN(n3)) {
        document.getElementById("nnu3").style.borderBottom = "2px solid red";
        alert("Por favor, verifique el tercer numero.");
    }
    else if (n1 <= 0){
        document.getElementById("nnu1").style.borderBottom = "2px solid red";
        alert("El primer numero solo acepta valores positivos.");
    }
    else if (n2 <= 0){
        document.getElementById("nnu2").style.borderBottom = "2px solid red";
        alert("El segundo numero solo acepta valores positivos.");
    }
    else if (n3 <= 0){
        document.getElementById("nnu3").style.borderBottom = "2px solid red";
        alert("El segundo numero solo acepta valores positivos.");
    }
    else if (n1 === n2 && n2 === n3){
        alert("Los tres numeros son iguales.")
    }
    else {
        document.getElementById("nnu1").style.borderBottom = "";
        document.getElementById("nnu2").style.borderBottom = "";
        document.getElementById("nnu3").style.borderBottom = "";
        var mayor = Math.max(n1, n2, n3); //Math max es usada como funcion de numero mayor
        var menor = Math.min(n1, n2, n3); //Math min es usada como funcion de numero menor
        var medio = n1 + n2 + n3 - mayor - menor;
        alert("El numero mayor es: " + mayor + "\nEl numero medio es: " + medio + "\nEl numero menor es: " + menor);
    }
}
