var xlmns = "http://www.w3.org/2000/svg"
var svg = document.getElementById("svg");
var circleB = document.getElementById("circ");
var dwB = document.getElementById("dw");
var clearB = document.getElementById("clr");

var rid;

var clear = function(e) {
    document.getElementById("h1").innerHTML = "SVG Animations";
    window.cancelAnimationFrame(rid);
    
    while (svg.lastChild) {
        svg.removeChild(svg.lastChild);
    }
};

var circle = function() {
    var r = 1;
    var v = 1;

    window.cancelAnimationFrame(rid);
    clear();

    document.getElementById("h1").innerHTML = "Circular Expansion";

    var drawCircle = function() {
        var c = document.createElementNS(xlmns, "circle");    
        c.setAttribute("cx", 250);
        c.setAttribute("cy", 250);
        c.setAttribute("r", r);
        c.setAttribute("fill", "#222222");

        svg.appendChild(c);
        rid = window.requestAnimationFrame(animateCircle);
    };
    
    var animateCircle = function() {
        var c = svg.lastChild;
        c.setAttribute("r", r);

        if(r == 250) {
            v *= -1;
        }
        if(r === 0) {
            v *= -1;
        }
        r += v;

        rid = window.requestAnimationFrame(animateCircle);
    };
    
    drawCircle();
};

var dw = function() {
    var vx = 1;
    var vy = 1;

    var width = svg.getBoundingClientRect().width;
    var height = svg.getBoundingClientRect().height;

    var x = Math.random() * (width - 100);
    var y = Math.random() * (height - 100);

    window.cancelAnimationFrame(rid);
    clear();

    document.getElementById("h1").innerHTML = "Hi, I am floating dw head!";

    var drawImage = function() {
        var img = document.createElementNS(xlmns, "image");
        img.setAttribute("height", "100");
        img.setAttribute("width", "100");

        img.setAttribute("href", "jadw.png");

        img.setAttribute("x", x);
        img.setAttribute("y", y);

        svg.appendChild(img);

        rid = requestAnimationFrame(animateImage);
    };

    var animateImage = function() {
        var img = svg.lastChild;
        img.setAttribute( "x", x );
        img.setAttribute( "y", y );

        if (x <= 0 || x + 100 >= width) {
            vx *= -1;
        }
        if (y <= 0 || y + 100 >= height) {
            vy *= -1;
        }
        x += vx;
        y += vy;

        rid = requestAnimationFrame(animateImage);
    };
    drawImage();
};

circleB.addEventListener("click", circle);
dwB.addEventListener("click", dw);
clearB.addEventListener("click", clear);
