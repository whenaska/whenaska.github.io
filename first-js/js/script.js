document.querySelector(".buttons").addEventListener("click", function(event) {
    if(event.target.tagName != "BUTTON") return;

    document.querySelector(`#Popup${event.target.id}`).classList.add("Open");
});

function closePopup(event){
    event.target.closest("div").classList.remove("Open");
};