function SetWindowWidth() {
    document.getElementById("i01").setAttribute("width", window.innerWidth);
    const element = document.getElementById("i02")
    const x = 55;
    const y1 = 40;
    const y2 = y1 + 4;
    const y3 = y2 + 1;
    const y4 = y3 + 4;
    const w = window.innerWidth - 40;
    const w2 = w - 5;
    const array = [[x, y1], [w2, y1], [w, y1 - 15], [w, y2], [x + 10, y3], [x + 10, y3], [w2 - 5, y3], [w - 5, y3 - 15], [w - 5, y4], [x, y4], [x, y1]]
    element.setAttribute("points", array);
}

