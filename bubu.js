function showHappiness() {
    document.getElementById('question1').classList.add('d-none');
    document.getElementById('happiness').classList.remove('d-none');
}

function moveButton(button) {
    button.style.position = "absolute";
    button.style.top = Math.random() * window.innerHeight + "px";
    button.style.left = Math.random() * window.innerWidth + "px";
}

document.getElementById('pkkaNhiButton').onclick = function() {
    window.location.href = "bubu2.html";
};
