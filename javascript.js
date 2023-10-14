// JavaScript code
var contactInfo = document.getElementById("contactInfo");
var toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function() {
    if (contactInfo.style.display === "none" || contactInfo.style.display === "") {
        contactInfo.style.display = "block";
        toggleButton.textContent = "Hide Contact Info";
    } else {
        contactInfo.style.display = "none";
        toggleButton.textContent = "Show Contact Info";
    }
});