const myHtml = document.querySelector("body");
const myImg = document.querySelector("img");
const myHeading = document.querySelector("h1");
const myButton = document.querySelector("button");

function setUserName() {
    let name;
    while(!name) {
        name = prompt("enter your name: ");
    }
    localStorage["userName"] = name;
    myHeading.textContent = "Mozilla is cool, " + name;
}

if(!localStorage["userName"])
    setUserName();
else {
    let name = localStorage["userName"];
    myHeading.textContent = "Mozilla is cool," + name;
}

//myButton.onclick = setUserName;
myButton.addEventListener("click", setUserName);

myImg.addEventListener("click", () => {
    let mysrc = myImg.getAttribute("src");
    if(mysrc == "images/firefox-icon.png")
        myImg["src"] = "images/elephant.jpg";
    else
        myImg["src"] = "images/firefox-icon.png";
});