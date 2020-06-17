let canvas = document.getElementById("canvas");

$( window ).resize( () => {
    canvas.setAttribute('width', innerWidth);
    canvas.setAttribute('height', innerHeight);
})

canvas.setAttribute('width', innerWidth);
canvas.setAttribute('height', innerHeight);
let ctx = canvas.getContext("2d");

let w = 140;
let h = 140;
let image = new Image(w, h);
image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2736535/smoke.png';
let counter = 0;
let stop = 85;

canvas.addEventListener('mousemove', () => {
    let x = event.clientX;
    let y = event.clientY;
    ctx.beginPath();
    ctx.drawImage(image, event.clientX, event.clientY, w, h);
    ctx.stroke();
    show(x, y, w, h)
});

function show(x, y, w, h) {
    let interv = setInterval( () => {
        counter++;
        ctx.beginPath();
        ctx.drawImage(image, x - Math.random() * 100, y - Math.random() * 100, w += 25, h += 25);
        ctx.stroke();
        if (counter > stop) {
            clearInterval(interv);
            counter = 0;
        }
    }, 10);
}

