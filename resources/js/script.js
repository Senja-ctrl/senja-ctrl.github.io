function SetWindowWidthOnLoad() {
    document.getElementById("i01").setAttribute("width", screen.width);
    SetWindowWidth();
}

function SetWindowWidth() {
    const element = document.getElementById("i02")
    const x = 50;
    const y1 = 55;
    const y2 = y1 + 5;
    const y3 = y2 + 1;
    const y4 = y3 + 5;
    const w = window.innerWidth - x;
    const w2 = w - 5;
    const array = [[x, y1], [w2, y1], [w, y1 - 15], [w, y2], [x + 10, y2], [x + 10, y3], [w2 - 10, y3], [w - 10, y3 - 15], [w - 10, y4], [x, y4], [x, y1]]
    element.setAttribute("points", array);
}

