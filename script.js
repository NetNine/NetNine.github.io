// JavaScript Document

//follow cursor on mousemove
document.addEventListener("mousemove", e => {
    let cursor = document.querySelector(".cursor");
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
});

//cursor effect on mouse stopped
document.addEventListener("mousemove", function() {
    clearTimeout(this.cursorTimeout);
    let cursor = document.querySelector(".cursor");
    this.cursorTimeout = setTimeout(function() {
        cursor.style.display = "none";
    }, 1000);
});



