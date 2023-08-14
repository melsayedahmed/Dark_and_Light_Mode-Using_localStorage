// Check the user's preference from local storage
const currentMode = localStorage.getItem("mode");
if (currentMode) {
    document.body.classList.add(currentMode);
}

// Toggle button click event
const toggleButton = document.getElementById("mode-toggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Store the mode preference in local storage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "dark-mode");
    } else {
        localStorage.setItem("mode", "");
    }
});
