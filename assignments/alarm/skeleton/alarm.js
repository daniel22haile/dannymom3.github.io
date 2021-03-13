function okayClick() {
    // let btn = document.getElementById("go");
    // btn.className = "awesome";
    setTimeout("red", 3000);
}

window.onload = () => {
    document.getElementById("go").onclick = okayClick;
};