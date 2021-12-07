function showDetalhes() {
    var x = document.getElementById("div_detalhes");
    var y = document.getElementById("subtitle_detalhes");
    if (x.style.height === "auto") {
        x.style.height = "0";
        y.style.display = "block";
    /*    y.scrollIntoView({
            behavior: "auto",
            block: "end",
            inline: "end"
        });*/
    } else {
        x.style.height = "auto";
        y.style.display = "none";
    }
}

function showConceito() {
    var x = document.getElementById("div_conceito");
    var y = document.getElementById("subtitle_conceito");
    var z = document.getElementsByClassName("div_1");
    if (x.style.height === "auto") {
        x.style.height = "0";
        y.style.display = "block";
       /* z.style.marginBottom = "100px";*/
    } else {
        x.style.height = "auto";
        y.style.display = "none";
     /*   z.style.marginBottom = "100px";*/
    }
}

function showReferencias() {
    var x = document.getElementById("div_referencias");
    var y = document.getElementById("subtitle_referencias");
    if (x.style.height === "auto") {
        x.style.height = "0";
        y.style.display = "block";
    } else {
        x.style.height = "auto";
        y.style.display = "none";
    }
}

function showWebsite() {
    var x = document.getElementById("div_website");
    var y = document.getElementById("subtitle_website");
    if (x.style.height === "auto") {
        x.style.height = "0";
        y.style.display = "block";
    } else {
        x.style.height = "auto";
        y.style.display = "none";
    }
}

