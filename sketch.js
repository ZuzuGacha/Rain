
//new item yPos.push(var)
//acces item yPos[position or index]
//size of array yPos.length
//Math.random()*10 /0-10/

let yPos=[];
let speed=[];
let sizeRain=[]

function setup()
{
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<windowWidth/10; i++)
  {
    yPos.push(0);
    speed.push(Math.random()*10+1);
    sizeRain.push(Math.random()*8+5);
  }
}

function draw() 
{
  background(0, 0, 0);
  for(let i=0; i<windowWidth; i+=10)
  {
    fill(0, 0, 255);
    let index=i/10;
    rect(i, yPos[index], sizeRain[index], 20);
    yPos[index]+=speed[index];
    if(yPos[index]>=windowHeight)
    {
      yPos[index]=0;
    }
  }
}