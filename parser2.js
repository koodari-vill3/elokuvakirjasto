window.addEventListener("load", loadXML);

let xmlDoc; //globaali muuttuja xml-tiedostolle
let i = 0; //elokuvan indexi

function loadXML (){
    let ajax = new XMLHttpRequest();
    ajax.onload = function(){
        xmlDoc = this.responseXML;
        parseXML(i);
    }
    ajax.open("GET", "elokuvat.xml", true);
    ajax.send();
}

function next(){
    parseXML(++i);
}

function prev(){
    parseXML(--i);
}

function parseXML(index){

    const elokuvat = xmlDoc.getElementsByTagName("elokuva");

    if (index < 0) {
        index = 0;
        i = 0;
    }

    if (index > elokuvat.length - 1){
        index = elokuvat.length -1;
        i = elokuvat.length - 1;
    }

    let htmlData = "<h2>" + elokuuvat[index].getElementsByTagName("Nimi")[0].childNodes[0].nodeValue + "</h2>";
    htmlData += "<h3>" + elokuuvat[index].getElementsByTagName("Ohjaaja")[0].childNodes[0].nodeValue + "</h3>";
    htmlData += "<p>" + elokuuvat[index].getElementsByTagName("Julkaisuvuosi")[0].childNodes[0].nodeValue + "</p>";
    htmlData += "<p>" + elokuuvat[index].getElementsByTagName("Ikäraja")[0].childNodes[0].nodeValue + "</p>";
    htmlData += "<p>" + elokuuvat[index].getElementsByTagName("Pituus")[0].childNodes[0].nodeValue + "</p>";
    htmlData += "<p>" + elokuuvat[index].getElementsByTagName("Kieli")[0].childNodes[0].nodeValue + "</p>";
    htmlData += "<p>" + elokuuvat[index].getElementsByTagName("Budjetti")[0].childNodes[0].nodeValue + "</p>";
    htmlData += "<p>" + elokuuvat[index].getElementsByTagName("Genre")[0].childNodes[0].nodeValue + "</p>";

    document.getElementById("elokuvat").innerHTML = htmlData;

}