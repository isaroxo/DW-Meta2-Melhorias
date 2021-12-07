let setaProjetos = document.querySelector(".seta_irProjetos");
let tituloProjetos = document.querySelector(".projetos-titulo>h1");
let filtrosMobile = document.querySelector("#DivBotoesFiltragemMobile");

setaProjetos.addEventListener("click", function () {
    if (tituloProjetos.style.display !== "none") {
        tituloProjetos.scrollIntoView({
            block: "start",
            inline: "center",
            behavior: "smooth"
        });
    }
    //$("body").css({"overflow-y": "scroll", "width": "calc(100vw - 17px)"});
});

let Projeto = function (nome, pesquisa, tipo, realizadoEm, url, texto) {
    this.titulo = nome;
    this.nomePesquisa = pesquisa;
    this.area = tipo;
    this.data = realizadoEm;
    this.ficheiro = url;
    this.descricao = texto;
}

let linksImagens = ["fotos_projetos-01.png", "fotos_projetos-02.png", "fotos_projetos-03.png", "fotos_projetos-04.png", "fotos_projetos-05.png", "fotos_projetos-06.png", "fotos_projetos-07.png", "fotos_projetos-08.png", "fotos_projetos-09.png", "p4_mockup1.png", "5sense.png", "mockup_poster_3.png"];
let linksImagensCarousel = ["fotos_projetos-04.png", "fotos_projetos-06.png", "p4_mockup1.png"];
let carouselImage = document.querySelector(".image-carousel-img");
let firstTime = true;
let deviceWidth = screen.width;

if (firstTime === true) {
    setTimeout(() => carouselImage.style.opacity = "0", 7500);
    adjustImageDimensions();
    firstTime = false;
}

let nImage = 0;

setInterval(function () {
    carouselImage.style.opacity = "100%";
    carouselImage.src = `assets/img/${linksImagensCarousel[nImage]}`;
    setTimeout(() => carouselImage.style.opacity = "0", 7500);
    adjustImageDimensions();
    if (nImage < linksImagensCarousel.length - 1) {
        nImage++;
    } else {
        nImage = 0;
    }
}, 8000);

function adjustImageDimensions() {
    if (deviceWidth <= 768) {
        if (carouselImage.naturalWidth >= carouselImage.naturalHeight) {
            carouselImage.style.width = "100%";
            carouselImage.style.height = "auto";
        } else {
            carouselImage.style.width = "auto";
            carouselImage.style.height = "100%";
        }
    }
}

let projetosDesordenados = [];

projetosDesordenados.push(new Projeto("Mario's Cubway", "Marios-Cubway", "Aplicações", new Date(), linksImagens[0]));
projetosDesordenados.push(new Projeto("Visualizadores de Música", "Visualizadores-Musica", "Aplicações", new Date(), linksImagens[2]));
projetosDesordenados.push(new Projeto("E-120", "E120", "Audiovisual", new Date(), linksImagens[6]));
projetosDesordenados.push(new Projeto("All Summer In a Day", "All-Summer-In-a-Day", "Aplicações", new Date(), linksImagens[1]));
projetosDesordenados.push(new Projeto("5Sense", "5Sense", "Aplicações", new Date(), linksImagens[10]));
projetosDesordenados.push(new Projeto("StepUpArt", "projetoX", "Aplicações", new Date(2021, 7, 22), linksImagens[9]));
projetosDesordenados.push(new Projeto("Padrões", "Padroes", "Design Gráfico", new Date(), linksImagens[5]));
projetosDesordenados.push(new Projeto("CCDM", "CCDM", "Design Gráfico", new Date(), linksImagens[3]));
projetosDesordenados.push(new Projeto("Poema Dinâmico", "Poema-Dinamico", "Audiovisual", new Date(), linksImagens[8]));
projetosDesordenados.push(new Projeto("Moving Poster 1", "Moving-Poster-1", "Motion Graphics", new Date(), linksImagens[4]));
projetosDesordenados.push(new Projeto("Moving Poster 2", "Moving-Poster-2", "Motion Graphics", new Date(), linksImagens[7]));
projetosDesordenados.push(new Projeto("Moving Poster 3", "Moving-Poster-3", "Motion Graphics", new Date(), linksImagens[11]));

let infoColunas = [{
    desktop: "col-md-4",
    mobile: "col-sm-6"
}, {
    desktop: "col-md-3",
    mobile: "col-sm-5"
}, {
    desktop: "col-md-3",
    mobile: "col-sm-5"
}, {
    desktop: "col-md-4",
    mobile: "col-sm-6"
}, {
    desktop: "col-md-3",
    mobile: "col-sm-5"
}, {
    desktop: "col-md-4",
    mobile: "col-sm-6"
}, {
    desktop: "col-md-4",
    mobile: "col-sm-6"
}, {
    desktop: "col-md-3",
    mobile: "col-sm-5"
}, {
    desktop: "col-md-4",
    mobile: "col-sm-6"
}, {
    desktop: "col-md-3",
    mobile: "col-sm-5"
}, {
    desktop: "col-md-3",
    mobile: "col-sm-5"
}, {
    desktop: "col-md-4",
    mobile: "col-sm-6"
}];

let listaProjetos = document.querySelector("#listaProjetos>.row");
let projetos;

function recarregarProjetos(ordenacaoAlfabetica, crescente, pesquisa) {
    if (pesquisa === "") {
    }

    if (ordenacaoAlfabetica === true) {
        projetos = projetosDesordenados.sort(function (a, b) {
            if (a.titulo > b.titulo) {
                if (crescente === true) {
                    return 1;
                } else {
                    return -1;
                }
            } else if (a.titulo < b.titulo) {
                if (crescente === true) {
                    return -1;
                } else {
                    return 1;
                }
            } else {
                if (a.data > b.data) {
                    return -1;
                } else if (a.data < b.data) {
                    return 1;
                } else {
                    return 0;
                }
            }
        });
    } else {
        projetos = projetosDesordenados.sort(function (a, b) {
            if (a.data > b.data) {
                if (crescente === true) {
                    return 1;
                } else {
                    return -1;
                }
            } else if (a.data < b.data) {
                if (crescente === true) {
                    return -1;
                } else {
                    return 1;
                }
            } else {
                if (a.titulo > b.titulo) {
                    return 1;
                } else if (a.titulo < b.titulo) {
                    return -1;
                } else {
                    return 0;
                }
            }
        });
    }


    listaProjetos.innerHTML = "";

    for (let i = 0; i < projetos.length; i++) {
        let divProjeto = document.createElement("div");
        divProjeto.classList.add("projeto");
        divProjeto.classList.add(infoColunas[i % 12].desktop);
        divProjeto.classList.add(infoColunas[i % 12].mobile);

        let link = document.createElement("a");
        link.setAttribute("href", projetos[i].nomePesquisa + ".php");

        let divThumbnail = document.createElement("div");
        divThumbnail.classList.add("thumbnail");

        let divThumbnailImage = document.createElement("div");
        divThumbnailImage.classList.add("thumbnail__img");

        let thumbnail_Img_Overlay = document.createElement("div");
        thumbnail_Img_Overlay.classList.add("thumbnailImgOverlay");
        switch (projetos[i].area) {
            case "Aplicações":
                thumbnail_Img_Overlay.style.backgroundColor = "rgba(225, 17, 167, 0.75)";
                break;
            case "Audiovisual":
                thumbnail_Img_Overlay.style.backgroundColor = "rgba(0, 255, 255, 0.75)";
                break;
            case "Design Gráfico":
                thumbnail_Img_Overlay.style.backgroundColor = "rgba(180, 255, 0, 0.75)";
                break;
            case "Motion Graphics":
                thumbnail_Img_Overlay.style.backgroundColor = "rgba(0, 0, 255, 0.75)";
                break;
            default:
                thumbnail_Img_Overlay.style.backgroundColor = "black";
                break;
        }

        let date_options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        };
        let data_formatada = (projetos[i].data).toLocaleDateString('pt-PT', date_options);

        thumbnail_Img_Overlay.innerHTML = "<p><b>" + projetos[i].area + "</b><br>" + data_formatada + "</p>";

        let divThumbnailTitle = document.createElement("div");
        divThumbnailTitle.classList.add("thumbnail_title");

        let text = document.createElement("p");

        text.innerHTML = "<b>" + projetos[i].titulo + "</b><br>";
        divThumbnailImage.innerHTML = `<img src='assets/img/${projetos[i].ficheiro}' width='' height='' alt=''>`;
        divThumbnailImage.appendChild(thumbnail_Img_Overlay);
        divThumbnailTitle.appendChild(text);
        divThumbnail.appendChild(divThumbnailImage);
        divThumbnail.appendChild(divThumbnailTitle);
        link.appendChild(divThumbnail);
        divProjeto.appendChild(link);

        listaProjetos.appendChild(divProjeto);
    }
}