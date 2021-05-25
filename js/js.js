function storePage(e) {
    localStorage.setItem("page", e);
}

if (localStorage.getItem("page")) {
    document.getElementById(localStorage.getItem("page")).checked = true;
} else {
    document.getElementById("page4").checked = true;
}