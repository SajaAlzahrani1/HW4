
var myForm = document.getElementById('emailForm');

if (myForm) {
    myForm.onsubmit = function (event) {
        var nameValue = document.getElementById('name').value;
        var emailValue = document.getElementById('email').value;

        if (nameValue === "" || emailValue === "") {
            alert("Please fill out all required field.");
            event.preventDefault();
        }
    };
}

function toggleDescription(descriptionId) {
    var description = document.getElementById(descriptionId);
    var currentDisplay = window.getComputedStyle(description).display;

    if (currentDisplay === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

var allQuotes = document.querySelectorAll('.interactive-quote');

allQuotes.forEach(function (quote) {
    quote.addEventListener('mouseover', function () {
        quote.style.backgroundColor = "#f4e8ef";
        quote.style.borderLeft = "5px solid #8d5780";
        quote.style.paddingLeft = "15px";
        quote.style.transition = "all 0.3s ease";
    });

    quote.addEventListener('mouseout', function () {
        quote.style.backgroundColor = "transparent";
        quote.style.borderLeft = "2px solid #cccaca";
        quote.style.paddingLeft = "10px";
    });
});

window.onload = function () {
    var newParagraph = document.createElement("p");
    var currentDateTime = new Date();
    var statusText = document.createTextNode("Page loaded on: " + currentDateTime.toLocaleString());

    newParagraph.appendChild(statusText);

    var footer = document.getElementsByTagName("footer")[0];
    if (footer) {
        footer.appendChild(newParagraph);
    }
};