  



function canvas_init() {


    let button= document.getElementById('calcular');
    button.hidden=false;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    ctx.fillStyle="lightgray"
    ctx.fillRect(0,0,500,400);
    ctx.moveTo(90,350);
    ctx.lineTo(250,350);
 
    ctx.moveTo(170,350);
    ctx.lineTo(170,100);
 
    ctx.moveTo(350,100);
    ctx.lineTo(170,100);
 
    ctx.moveTo(350,140);
    ctx.lineTo(350,100);
    ctx.stroke();
    document.getElementById('reset').addEventListener('click', function() {
        ctx.fillStyle="lightgray"
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        button.hidden=true;
      }, false);  
  

return ctx;

}























function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }else if (tecla==13) {
     
    }

    // Patron de entrada, en este caso solo acepta  letras mayusculas
    patron = /[A-Za-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function mayus(e) {
    e.value = e.value.toUpperCase();
}

function show() {
   button.hidden=false;
}