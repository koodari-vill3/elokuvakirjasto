window.addEventListener("load", loadXML);

function loadXML (){
    let ajax = new XMLHttpRequest();
    ajax.onload = function(){
        parseXML(this.responseXML);
    }
    ajax.open("GET", "elokuvat.xml", true);
    ajax.send();
}

function parseXML(xml){
    const elokuvat = xml.getElementsByTagName("elokuva");
    let htmlData = "";

    for (let i = 0; i < elokuvat.lenght; i++){
        htmlData += "<h2>" + elokuvat[i].getElementsByTagName("Ohjaaja")[0].childNodes[0].nodeValue + "</h2>";
        htmlData += "<p>" + elokuvat[i].getElementsByTagName("Nimi")[0].childNodes[0].nodeValue + "</p>";
        
    }

    document.getElementById("elokuvat").innerHTML = htmlData;
}