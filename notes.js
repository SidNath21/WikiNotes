const container = document.querySelector("#container");

let titleString = decodeURIComponent(window.location.search);
titleString = titleString.substring(titleString.indexOf("=") + 1);

container.textContent = titleString;
