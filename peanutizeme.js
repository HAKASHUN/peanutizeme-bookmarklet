var stage = document.getElementById("stage");
var downloadButtonEl = document.getElementById("getYourPeanutizeme-Button");
var name = prompt("What is his/her name?");

if (!downloadButtonEl) {
    downloadButtonEl = document.createElement("a");
    downloadButtonEl.textContent = "DOWNLOAD";
    downloadButtonEl.id = "getYourPeanutizeme-Button";
    downloadButtonEl.className = "download circle-button";
    downloadButtonEl.style.position = "absolute";
    downloadButtonEl.style.width = downloadButtonEl.style.height = "90px";
    downloadButtonEl.style.top = "300px";
    downloadButtonEl.style.right = "52px";
    downloadButtonEl.style.fontSize = "14px";
    downloadButtonEl.style.lineHeight = "90px";
    downloadButtonEl.style.color = "#57A4D8";
    var creatorSectionEl = document.querySelectorAll(".creator-section")[0];
    creatorSectionEl.appendChild(downloadButtonEl);
}

downloadButtonEl.download =  name + ".png";
downloadButtonEl.href = stage.toDataURL();