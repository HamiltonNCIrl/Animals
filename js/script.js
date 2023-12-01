function initialiseDivs() {
    document.getElementById("initial").style.display = "block";
    document.getElementById("cats").style.display = "none";
    document.getElementById("dogs").style.display = "none";
    document.getElementById("spiders").style.display = "none";        
}

function displayCats() {
    document.getElementById("cats").style.display = "block";
    document.getElementById("dogs").style.display = "none";
    document.getElementById("spiders").style.display = "none";
    document.getElementById("initial").style.display = "none";
}

function displayDogs() {
    document.getElementById("cats").style.display = "none";
    document.getElementById("dogs").style.display = "block";
    document.getElementById("spiders").style.display = "none";
    document.getElementById("initial").style.display = "none";
}

function displaySpiders() {
    document.getElementById("cats").style.display = "none";
    document.getElementById("dogs").style.display = "none";
    document.getElementById("spiders").style.display = "block";
    document.getElementById("initial").style.display = "none";
}