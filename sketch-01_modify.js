const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const w= 60;
    const  h = 60;
    const  gap = 20;
    let x,y;
    for(let i=0;i<=5;i++){
        for(let j=0;j<=5;j++)
        {
        x= 100 + (w + gap) * i;
        y = 100 + (h + gap) * j;
        context.beginPath();
        context.lineWidth = 4;
        context.rect(x,y,w,h);
        // ,2 * Math.PI );
        // 100, 75, 50, 0, 2 * Math.PI
        context.stroke();
        
        if(Math.random() > 0.5){
            context.beginPath();
            context.arc(x + 30, y + 30, 30 , gap, 0, 2*Math.PI);
            context.stroke();
        }

        }
}
  };
};

canvasSketch(sketch, settings);
