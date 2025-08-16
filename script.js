const startBtn = document.getElementById("button1");
const cancelBtn = document.getElementById("button2");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

startBtn.addEventListener("click", () => {
    console.log("开始做局");
    modal.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
    console.log("取消做局");
    cancelBtn.style.display = "none";
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
