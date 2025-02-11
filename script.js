document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

function addEvent() {
    let name = document.getElementById("eventName").value;
    let date = document.getElementById("eventDate").value;
    if (name && date) {
        let eventList = document.getElementById("eventList");
        let li = document.createElement("li");
        li.innerHTML = `<strong>${name}</strong> - ${date} <button onclick="removeEvent(this)">❌</button>`;
        eventList.appendChild(li);
    } else {
        alert("Please enter event details!");
    }
}

function removeEvent(event) {
    event.parentElement.remove();
}
