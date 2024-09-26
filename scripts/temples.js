const yearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;


document.getElementById("toggleButton").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
    
    // Change button text based on menu state
    if (menu.classList.contains("active")) {
        this.textContent = "✖"; 
    } else {
        this.textContent = "☰";
    }
});