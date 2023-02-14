function openPopup(){
    let popup = document.getElementById("popup");

    popup.classList.add("active");
    setTimeout(() => popup.classList.remove("active"), 5000);
}