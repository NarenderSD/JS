// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
    
};

// console.log(Math.floor(Math.random() * 16));

const startChangingColor = function(){
    setInterval(changBgColor, 1000);

    function changBgColor(){
        document.body.style.backgroundColor = randomColor();

    }
    
};
const stopChangingColor = function(){};

document.querySelector("#start").addEventListener
('click1', startChangingColor)

document.querySelector("#start").addEventListener
('click1', stopChangingColor)