// Získání tlačítka a rámců
const youtubeButton = document.getElementById("youtubeButton");
const partInteractionButton = document.getElementById("partInteractionButton");
const youtubeFrame = document.getElementById("youtubeFrame");
const partInteractionFrame = document.getElementById("partInteractionFrame");

// Funkce pro přepínání zobrazení YouTube rámce
youtubeButton.addEventListener("click", function() {
    if (youtubeFrame.style.display === "none" || youtubeFrame.style.display === "") {
        youtubeFrame.style.display = "flex";
    } else {
        youtubeFrame.style.display = "none";
    }
});

// Funkce pro přepínání zobrazení Part Interaction rámce
partInteractionButton.addEventListener("click", function() {
    if (partInteractionFrame.style.display === "none" || partInteractionFrame.style.display === "") {
        partInteractionFrame.style.display = "flex";
    } else {
        partInteractionFrame.style.display = "none";
    }
});

