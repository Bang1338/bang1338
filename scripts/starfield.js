// Starfield v2, by bang1338

const canvas = document.querySelector('#starfield');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let ammount = 230;

for (let i = 0; i < ammount; i++) {
    let speed;
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            speed = 15; // fast
            break;
        case 1:
            speed = 10; // normal
            break;
        case 2:
            speed = 5; // slow
            break;
    }

    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 2,
        speed: speed
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();

        star.x -= star.speed;
        if (star.x < 0) {
            star.x = canvas.width;
            star.y = Math.random() * canvas.height;
        }
    }

    requestAnimationFrame(draw);
}

draw();

function resizeStars() {
    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
    }
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	resizeStars();
});


