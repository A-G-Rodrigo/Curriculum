roscotexto = "  texto de prueba  ";
angulo = 340/(roscotexto.length);

for (let x=1; x<=roscotexto.length; x++) {
    document.getElementsByTagName("header")[0].innerHTML += `<span id='${"letra"+x}' class='letra'>`+roscotexto[x-1]+"</span>";
    document.getElementById(`letra${x}`).style.cssText =`
    transform: rotate(${angulo*x}deg);

    `;
}