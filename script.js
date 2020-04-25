const createNotes = document.querySelector("#submit");
const textForm = document.querySelector("#form");
let topic;

createNotes.addEventListener("click", function () {
    topic = textForm.elements["title"].value;
    let queryString = "?title=" + topic;
    if (topic.trim() != "") {
        window.location.href = "notes.html" + queryString;
    }
    else{
        alert("Please enter a Topic");
    }
});