const navegacion = document.querySelector("nav");
/*const abrir = document.querySelector(".abrir");
const cerrar = document.querySelector(".cerrar");*/
const botones = document.querySelectorAll(".abrir,.cerrar");
let desplegado = false

/*abrir*/botones[0].addEventListener("click", function(){
    navegacion.className = "desplegado";
});


/*cerrar*/botones[1].addEventListener("click", function(){
    navegacion.className = "";
});

for(let i = 0; i < botones.length/*2*/; i++){
    botones[i].addEventListener("click", function(){
    navegacion.className = desplegado ? "" : "desplegado";
    desplegado = !desplegado;
    });
}

/*const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".abrir,.cerrar");


for(let i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", function(){
    navegacion.className = i == 0 ? "desplegado" : "";
    });
}*/
//mas corta ultima