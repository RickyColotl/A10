window.onload = function() {
    var cookieValue = getCookie("userCookie");
    if (!cookieValue) {
        var userInput = prompt("Please enter a value for the cookie:", "");
        if (userInput != null && userInput !== "") {
            setCookie("userCookie", userInput);
        }
    }
    displayCookie();
};
function setCookie(name, value) {
    var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + (5 * 60 * 1000)); // 5 minutes
    expires = "; expires=" + date.toUTCString();

    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0){
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function displayCookie() {
    var cookieValue = getCookie("userCookie");
    if (cookieValue) {
        document.getElementById("cookieDisplay").innerText = "Cookie Value: " + cookieValue;
    } else {
        document.getElementById("cookieDisplay").innerText = "No cookie found.";
    }
}

