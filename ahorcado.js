const palabras= ["LALA","ALURA","MEXICO"]
const palabra= palabras[Math.floor(Math.random() * ((palabras.length) ))];
let palabraConGuiones = palabra.replace(/./g, "_ ");
let countfallo=0;
String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 


document.getElementById('calcular').addEventListener('click', function() {
   const letra = document.querySelector('#letra').value;
    let fallo= true;
    
   for(const i in palabra){
       if (letra == palabra[i]) {
          palabraConGuiones=palabraConGuiones.replaceAt(i*2,letra);
          fallo=false;

        
       }
   }

   if(fallo){
    
    switch (countfallo++) {
        case 0:
         cabeza(); 
       
       break
       case 1:
           cuello();
        break
        case 2:
            brazo_i(); 
        break
          case 3:
              brazo_d();
           break
           case 4:
            torso(); 
           break
          case 5:
              pierna_d();
           break
           case 6:
            pierna_i(); 
        
          break
          default:
              perdiste();           
          break
  }   
   }else{
       if (palabraConGuiones.indexOf('_')==-1) {
           ganar();
       }
   }
 
   document.querySelector('#output').innerHTML=palabraConGuiones;
   document.querySelector('#letra').value='';
   document.querySelector('#letra').focus();
  
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
        contex.moveTo(350,190);
        contex.lineTo(350,210);
        contex.stroke();
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
    const cn = ca.getContext('2d');
    cn.moveTo(350,210);
    cn.lineTo(400,190);
    cn.stroke();
}


function torso() {
    const c = document.getElementById('canvas');
    const ctxs = c.getContext('2d');
    ctxs.moveTo(350,250);
    ctxs.lineTo(350,210);
    ctxs.stroke();
}


function pierna_i() {
    const cv = document.getElementById('canvas');
    const pinc = cv.getContext('2d');
    pinc.moveTo(310,300);
    pinc.lineTo(350,250);
    pinc.stroke();
}



function pierna_d() {
    const cnv = document.getElementById('canvas');
    const  pinl = cnv.getContext('2d');
    pinl.moveTo(380,300);
    pinl.lineTo(350,250);
    pinl.stroke();
}

function perdiste() {
    var canvas = document.getElementById("canvas");
		if (canvas && canvas.getContext) {
		var ctx = canvas.getContext("2d");
			if (ctx) {
						var centerX = canvas.width/2;
                        var centery = canvas.height/2;
						ctx.textAlign="center";
						
						ctx.font="30pt Verdana";
						ctx.fillStyle = "blue";
						ctx.fillText("Perdiste",centerX,centery);
      
					
					}
		}
}
function ganar() {
    var canvas = document.getElementById("canvas");
		if (canvas && canvas.getContext) {
		var ctx = canvas.getContext("2d");
			if (ctx) {
						var centerX = canvas.width/2;
                        var centery = canvas.height/2;
						ctx.textAlign="center";
						
						ctx.font="25pt Verdana";
						ctx.strokeStyle="green";
						ctx.lineWidth = 2;
						ctx.strokeText("Ganaste",centerX,centery);
					
					}
		}

}



document.getElementById('nueva-palabra').addEventListener('click', function() {
const n_palabra=document.getElementById("input-nueva-palabra").value
localStorage.setItem("palabra",n_palabra);
document.querySelector('#input-nueva-palabra').value='';
const n_pal= localStorage.getItem("palabra");

palabras.push(n_pal);

});


