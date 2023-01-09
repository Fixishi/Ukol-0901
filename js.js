var box = document.querySelectorAll(".square");
    var h1 = document.querySelector("h1");
    var color = generateRandomColor(8);
    var pickedColor = color[Math.floor(Math.random() * color.length)];
    h1.textContent = pickedColor;
    var playbtn = document.querySelector("#reset");
    var easyBtn = document.querySelector("#easyBtn");
    var midBtn = document.querySelector("#midBtn");
    var hardBtn = document.querySelector("#hardBtn");
    var boxCount = 8;
    var status = document.querySelector("#message");
    status.textContent = "You want to play, let's play!"

    easyBtn.addEventListener("click", function() {
        document.querySelector("h1").style.background = "forestgreen";
        status.textContent = "You want to play, let's play!"
        boxCount = 3;
        color = generateRandomColor(boxCount);
        pickedColor = color[Math.floor(Math.random() * 3)];
        h1.textContent = pickedColor;

        for (var i = 0; i < box.length; i++) {
            if (color[i]) {
                box[i].style.background = color[i];
                
            } else {
                box[i].style.display = "none";
            }
        }
    });

    midBtn.addEventListener("click", function() {
        document.querySelector("h1").style.background = "orange";
        status.textContent = "You want to play, let's play!"
        boxCount = 6;
        color = generateRandomColor(boxCount);
        pickedColor = color[Math.floor(Math.random() * 6)];
        h1.textContent = pickedColor;

        for (var i = 0; i < box.length; i++) {
            if (color[i]) {
                box[i].style.background = color[i];
                box[i].style.display = "inline-block";
            } else {
                box[i].style.display = "none";

            }
        }
    });

    hardBtn.addEventListener("click", function() {
        document.querySelector("h1").style.background = "red";
        status.textContent = "You want to play, let's play!"
        boxCount = 8;
        color = generateRandomColor(boxCount);
        pickedColor = color[Math.floor(Math.random() * 8)];
        h1.textContent = pickedColor;
        for (var i = 0; i < box.length; i++) {
            box[i].style.background = color[i];
            box[i].style.display = "inline-block";
            
        }
    });

    playbtn.addEventListener("click", function() {
        color = generateRandomColor(boxCount);
        pickedColor = color[Math.floor(Math.random() * boxCount)];
        h1.textContent = pickedColor;
        for (var i = 0; i < box.length; i++) {
            box[i].style.background = color[i];
        }
    });

    for (var i = 0; i < box.length; i++) {
        box[i].style.background = color[i];
        box[i].addEventListener("click", function() {
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                win();
            } else {
                lose(this);
            }
        });
    }
    function win() {
        for (var i = 0; i < box.length; i++) {
            box[i].style.background = pickedColor;
        }
        document.querySelector("h1").style.background = pickedColor;
        status.textContent = "You win!"
    }

    function lose() {
        this.style.background = "#232323";
        status.textContent = "Try Again!"
    }

    function generateRandomColor(num) {
        var arr = []
        for (var i = 0; i < num; i++) {
            arr.push(randomColor());
        }
        return arr;
    }

    function randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }