var imgAtual = "img/carroVermelho.png";
var imgVerde = "img/carroVerde.png";
var imgRoxo = "img/carroRoxo.png";
var imgAzul = "img/carroAzul.png";
var imgPreto = "img/Carro.png";
var rodaDourada = "img/rodaDourada.png";
var rodaDourada2 = "img/rodaDourada2.png";
var roda1 = "img/roda1.png";
var roda2 = "img/roda2.png";


var titulo = document.querySelector(".corzinha");
var titulo2 = document.querySelector(".modeloRoda");
var titulo3 = document.querySelector(".motores");
var titulo4 = document.querySelector(".pneus");
var titulo5 = document.querySelector(".volantes");
var titulo6 = document.querySelector(".freios");
var titulo7 = document.querySelector(".suspensao");
var titulo8 = document.querySelector(".freioHidraulico");
var titulo9 = document.querySelector(".virabrequim");


var botao = document.querySelector(".btn1");
var botao2 = document.querySelector(".btn2");
var botao3 = document.querySelector(".btn3");
var botao4 = document.querySelector(".btn4");
var botao5 = document.querySelector(".btn5");
var botaoRoda1 = document.querySelector("#btnRoda1");
var botaoRoda2 = document.querySelector("#btnRoda2");
var botaoRoda3 = document.querySelector("#btnRoda3");
var botaoMotor4 = document.querySelector("#txtCilin4");
var botaoMotor6 = document.querySelector("#txtCilin6");
var botaoPneu1 = document.querySelector("#pneu1");
var botaoPneu3 = document.querySelector("#pneu3");
var botaoVol1 = document.querySelector("#volante1");
var botaoVol2 = document.querySelector("#volante2");
var botaoVol3 = document.querySelector("#volante3");
var botaoFreio1 = document.querySelector("#freio1");
var botaoFreio2 = document.querySelector("#freio2");
var botaoFreio3 = document.querySelector("#freio3");
var botaoSusp1 = document.querySelector("#suspensao1");
var botaoSusp2 = document.querySelector("#suspensao2");
var botaoSusp3 = document.querySelector("#suspensao3");
var botaoFreioHid1 = document.querySelector("#freioHid1");
var botaoFreioHid2 = document.querySelector("#freioHid2");
var botaoFreioHid3 = document.querySelector("#freioHid3");
var botaoVirabrequim1 = document.querySelector("#virabrequim1");
var botaoVirabrequim2 = document.querySelector("#virabrequim2");
var botaoVirabrequim3 = document.querySelector("#virabrequim3");







botao.addEventListener("click", function(){

    titulo.textContent = "Cor: Vermelha";
})

botao2.addEventListener("click", function(){

    titulo.textContent = "Cor: Preto";
})

botao3.addEventListener("click", function(){

    titulo.textContent = "Cor: Azul";
})

botao4.addEventListener("click", function(){

    titulo.textContent = "Cor: Roxo";
})

botao5.addEventListener("click", function(){

    titulo.textContent = "Cor: Verde";
})






botaoRoda1.addEventListener("click", function(){

    titulo2.textContent = "Roda: Modelo 1";
})

botaoRoda2.addEventListener("click", function(){

    titulo2.textContent = "Roda: Modelo 2";
})

botaoRoda3.addEventListener("click", function(){

    titulo2.textContent = "Roda: Modelo 3";
})





botaoMotor4.addEventListener("click", function(){

    titulo3.textContent = "Motor 4 Cilindros";
})

botaoMotor6.addEventListener("click", function(){

    titulo3.textContent = "Motor 6 Cilindros";
})




botaoPneu1.addEventListener("click", function(){

    titulo4.textContent = "Pneu: Zeknova SuperSport RS";
})


botaoPneu3.addEventListener("click", function(){

    titulo4.textContent = "Pneu: Pneu Itaro Aro 18 IT101";
})
botaoVol1.addEventListener("click", function(){

    titulo5.textContent = "Volante: Esportivo";
})

botaoVol2.addEventListener("click", function(){

    titulo5.textContent = "Volante: FTR Aliviado";
})

botaoVol3.addEventListener("click", function(){

    titulo5.textContent = "Volante: TS 400";
})  

botaoFreio1.addEventListener("click", function(){

    titulo6.textContent = "Freio: Kit Freios Dianteiros Wilwood 2006 - 2012";
})
botaoFreio2.addEventListener("click", function(){

    titulo6.textContent = "Freio: Kit Freios Traseiros Wilwood 2002 - 2012";
})
botaoFreio3.addEventListener("click", function(){

    titulo6.textContent = "Freio: Kit Freios Dianteiros Wilwood 2005 - 2014";
})


botaoSusp1.addEventListener("click", function(){

    titulo7.textContent = "Suspensão: Coilover D2 Racing Street Volkswagen Golf Mk7 Tsi";
})


botaoSusp2.addEventListener("click", function(){

    titulo7.textContent = "Suspensão: Coilover D2 Racing Street Bmw E36 6 Cil";
})


botaoSusp3.addEventListener("click", function(){

    titulo7.textContent = "Suspensão: Coilover D2 Racing Street Bmw Série 1 F20 4/6 Cil";
})



botaoFreioHid1.addEventListener("click", function(){

    titulo8.textContent = "Freio de mão Hidráulico: Regulagem Epman - Vermelho";
})
botaoFreioHid2.addEventListener("click", function(){

    titulo8.textContent = "Freio de mão Hidráulico: Universal Modelo Longo Epman";
})
botaoFreioHid3.addEventListener("click", function(){

    titulo8.textContent = "Freio de mão Hidráulico: Epman - Preto";
})

botaoVirabrequim1.addEventListener("click", function(){

    titulo9.textContent = "Virabrequim: Forjado Billet Vw Ea111 1.6 Curso 94,5mm - Imp";
})


botaoVirabrequim2.addEventListener("click", function(){

    titulo9.textContent = "Virabrequim: orjado SUSIN MOTOR JCB 444";
})


botaoVirabrequim3.addEventListener("click", function(){

    titulo9.textContent = "Virabrequim: L200 OUTDOOR 2.5 TD NOVO AÇO FORJADO";
})







function trocar(){    
    document.getElementById("figura").src = imgAtual;
    let aux = imgAtual;
 
}

function trocar2(){    
    document.getElementById("figura").src = imgPreto;
    let aux = imgPreto;
 
}

function trocar3(){    
    document.getElementById("figura").src = imgAzul;
    let aux = imgAzul;
  
}

function trocar4(){    
    document.getElementById("figura").src = imgRoxo;
    let aux = imgRoxo;
  
}

function trocar5(){    
    document.getElementById("figura").src = imgVerde;
    let aux = imgVerde;
  
}
function trocarRoda1(){    
    document.getElementById("roda").src = roda1;
    let aux = roda1;
  
    document.getElementById("roda2").src = roda2;
    let aux1 = roda2;
}

function trocarRoda3(){    
    document.getElementById("roda").src = rodaDourada;
    let aux = rodaDourada;
  
    document.getElementById("roda2").src = rodaDourada2;
    let aux1 = rodaDourada2;
}


function showModal() {
    var element = document.getElementById("modal");
    element.classList.add("show-modal");
    
}

function closeModal() {
    var element = document.getElementById("modal");
    element.classList.remove("show-modal");
}



  function aparecerCarrinho() {
    // let testando = document.querySelector('#modalShopping')
    document.querySelector('#modalShopping').style.visibility = "visible";
    document.querySelector('#modalShopping').style.opacity = "1";
    
 
}


function fecharCarrinho() {
    // let testando = document.querySelector('#modalShopping')
    document.querySelector('#modalShopping').style.visibility = "hidden";
    document.querySelector('#modalShopping').style.opacity = "0";
    
 
}