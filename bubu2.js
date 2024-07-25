function moveButton(button) {
    button.style.position = "absolute";
    button.style.top = Math.random() * window.innerHeight + "px";
    button.style.left = Math.random() * window.innerWidth + "px";
}

function goBack() {
    window.location.href = "bubu.html?move=true";
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('move') === 'true') {
        document.getElementById('pkkaNhiButton').classList.add('moving-button');
        document.getElementById('pkkaNhiButton').onmouseover = function() {
            moveButton(this);
        };
    }
};
