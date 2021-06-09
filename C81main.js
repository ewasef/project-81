canvas=document.getElementById("mycanvas");

ctx=canvas.getContext("2d");

color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(123,234,30,0,2*Math.PI) ;
ctx.stroke();

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color = document.getElementById("color").value;
    console.log=color;
    mouse_X =e .clientx-canvas.offsetLeft;
    mouse_Y = e.clienty-canvas.offsetTop;
    console.log("x="+mouse_X+"y="+mouse_Y);

    circle(mouse_X,mouse_Y);


}
function circle(mouse_X,mouse_Y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(123,234,30,0,2*Math.PI) ;
    ctx.stroke();
}


