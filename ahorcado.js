const palabras= ["CLAU","ALURA","MEXICO","TIGER","WHITE","LIGHT","SWITCH"]
const palabra= palabras[Math.floor(Math.random() * ((palabras.length) ))];
let palabraConGuiones = palabra.replace(/./g, "_ ");

String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 


document.getElementById('calcular').addEventListener('click', function() {
   const letra = document.querySelector('#letra').value;
    let fallo= true;
    let countfallo=0;
   for(const i in palabra){
       if (letra == palabra[i]) {
          palabraConGuiones=palabraConGuiones.replaceAt(i*2,letra);
          fallo=false;
       }
   }

   if(fallo){
       countfallo++;
       cabeza();
   }
   document.querySelector('#output').innerHTML=palabraConGuiones;
  });  


function cabeza() {
    const canva = document.getElementById('canvas');
    const context = canva.getContext('2d');
    const radius = 25;
    context.beginPath();
    context.arc(350,165, radius, 0, 2 * Math.PI, false);
    context.lineWidth = 2;
    context.stroke();
  
    }


    

    function cuello() {
        const canv = document.getElementById('canvas');
        const contex = canv.getContext('2d');
        context.moveTo(350,190);
        context.lineTo(350,210);
        context.stroke();
    }


function brazo_i() {
    const can = document.getElementById('canvas');
const conte = can.getContext('2d');
conte.moveTo(350,210);
conte.lineTo(300,190);
conte.stroke();
}


function brazo_d() {
    const ca = document.getElementById('canvas');
    const cn = canv.getContext('2d');
    cn.moveTo(350,210);
    cn.lineTo(400,190);
    cn.stroke();
}


function torso() {
    const c = document.getElementById('canvas');
    const ctxs = canv.getContext('2d');
    ctxs.moveTo(350,250);
    ctxs.lineTo(350,210);
    ctxs.stroke();
}


function pierna_i() {
    const cv = document.getElementById('canvas');
    const pinc = canv.getContext('2d');
    pinc.moveTo(310,300);
    pinc.lineTo(350,250);
    pinc.stroke();
}



function pierna_d() {
    const cnv = document.getElementById('canvas');
    const  pinl = canv.getContext('2d');
    pinl.moveTo(380,300);
    pinl.lineTo(350,250);
    pinl.stroke();
}

