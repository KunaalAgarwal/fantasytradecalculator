const ids = ["sf", "ros", "tc", "results"];
let currPageId = "sf";
setup();

function displayPage(id) {
    // hide certain elements and display the proper ones
    currPageId = id;
    navbarUnderline(id);
    if (currPageId === "sf") {
        document.getElementById("prev").style.display = "none";
    } else {
        document.getElementById("prev").style.display = "block";
    }
    if (currPageId === "results") {
        document.getElementById("next").style.display = "none";
    } else {
        document.getElementById("next").style.display = "block";
    }
}

function navbarUnderline(id) {
    ids.forEach(x => {
        let element = document.getElementById(x);
        if (x === id) {
            element.style.borderBottom = "3px solid black";
        } else {
            element.style.borderBottom = "";
        }
    });
}

function next() {
    const currIndex = ids.indexOf(currPageId);
    if (currIndex + 1 < ids.length) {
        const newPage = ids[currIndex + 1];
        displayPage(newPage);
    }
}

function prev() {
    const currIndex = ids.indexOf(currPageId);
    if (currIndex - 1 >= 0) {
        const newPage = ids[currIndex - 1];
        displayPage(newPage);
    }
}

function setup() {
    displayPage("sf");
}
