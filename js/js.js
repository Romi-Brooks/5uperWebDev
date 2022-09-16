    const canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    /* 定义一个随机整数phi,区间为8-20 */
    phi = Math.floor(Math.random() * 20 + 10),

    h=canvas.height/2,
    
    k=phi*Math.PI/canvas.width;
    
    function draw(ctx,t){
    
    let y,start=h*Math.sin(k*t)/2;
    
    ctx.beginPath();
    
    ctx.moveTo(0,h+start);
    
    for(let x=0;x<canvas.width;x++){
    
    y=h*Math.sin(k*(x+t))/2;
    
    ctx.lineTo(x,y+h);
    
    }
    
    context.stroke();
    
    }
    
    window.onload=function(){
    
    context.lineWidth=2;
    
    context.strokeStyle="#b6abce";
    
    let step=0;
    
    (function drawFrame() {
    
    window.requestAnimationFrame(drawFrame);
    
    context.clearRect(0,0,canvas.width,canvas.height);
    
    draw(context,step);
    
    step+=1;
    
    if(step>canvas.width) step=0;
    
    }());
    
    };
    