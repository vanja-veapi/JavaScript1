const LEFT = "ArrowLeft";
const RIGHT = "ArrowRight";

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var brojac = 1;
context.font = "30px Arial";
context.fillText(`Score: ${brojac}`, 10, 30);
setInterval(brojacPP,500);

function brojacPP()
{
    brojac++;
}

document.addEventListener("keydown", function(e)
{
    if(e.code === LEFT)
    {
        console.log(LEFT);
        xAxis -= 15;
        context.clearRect(0,415,xAxis+108,500); // Namestiti da prva dva parametra ciste samo deo gde je gajba
        addImage(xAxis);
        console.log("Gajba pozicija x: "  + xAxis);
        console.log("Pivo pozicija y: " + beerY);
    }
    else if(e.code === RIGHT)
    {
        console.log("Desno");
        xAxis += 15;
        context.clearRect(0,415,xAxis+8,500);
        addImage(xAxis);
    }
})

    
var xAxis = 190;
addImage(xAxis);

var beerX = 100;
var beerY = 100;
addBeer();
setInterval(moveBeer,800);
function moveBeer()
{
    beerY += 55;
    context.clearRect(beerX, beerY-55, 71.11, 114.44)
    addBeer();
}
function addBeer()
{
    let img = new Image();
    img.src = "assets/img/bip.png"
    img.onload = function()
    {
        context.drawImage(img, beerX, beerY, img.width / 9, img.height / 9);
    }
}
function addImage(xAxis)
{
    let img = new Image();
    img.src = "assets/img/gajba.png";
    img.onload = function()
    {        
        context.drawImage(img, xAxis, 400, img.width / 3, img.height / 3);
    }
}