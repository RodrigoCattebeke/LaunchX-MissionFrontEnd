function redirigir(){window.open("https://www.hoaxbuster.com/")
}
let pp = document.getElementsByClassName("pp");
let container = document.getElementsByClassName("container-2-ta");
let div = document.getElementsByClassName("te");

function ocultar(i){
    pp[i].classList.toggle("ocultar-texto");
    container[i].classList.toggle("expandir-2");
    div[i].classList.toggle("ocultar-te");
};

function eliminarClase(a){
    for (i = 0; i < a;i++){
        if (container[i].classList.contains("expandir-2")) {
            container[i].classList.remove("expandir-2");
            pp[i].classList.add("ocultar-texto");
            div[i].classList.remove("ocultar-te");
        };
    }

    for (i = a+1 ; i < container.length; i++){
        if (container[i].classList.contains("expandir-2")) {
            container[i].classList.remove("expandir-2");
            pp[i].classList.add("ocultar-texto");
            div[i].classList.remove("ocultar-te");
        };
    };
};

container[0].addEventListener("click" , ()=>{
    eliminarClase(0);
    ocultar(0);
});

container[1].addEventListener("click" , ()=>{
   eliminarClase(1); 
    ocultar(1);
});

container[2].addEventListener("click" , ()=>{
    eliminarClase(2);
    ocultar(2);
});

container[3].addEventListener("click" , ()=>{
    eliminarClase(3);
    ocultar(3);
});

container[4].addEventListener("click" , ()=>{
    eliminarClase(4);
    ocultar(4);
});

// for (i = 0 ; i < container.length ; i++){
//     if (container[i].addEventListener("click" , ()=>{
//         for (i = 0 ; i < container.length; i++){
//             if (container[i].classList.contains("ocultar-texto")){
//                 container[i].classList.remove("ocultar-texto");
//             };
//         });
//         ocultar(i);
//     };
     
// };