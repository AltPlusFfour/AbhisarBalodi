function changeFont() {
    const paragraph = document.getElementById("myParagraph");
    const paragraph2 = document.getElementById("myParagraph2");
    const fonts = ["Draw", "Times New Roman", "Prociono", "Courier"];
    const randomIndex = Math.floor(Math.random() * fonts.length);
    paragraph.style.fontFamily = fonts[randomIndex];
}

setInterval(changeFont, 500);