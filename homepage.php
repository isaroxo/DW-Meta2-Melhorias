<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>...Studio</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- JQuery Script -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <!--https://www.w3schools.com/bootstrap/bootstrap_get_started.asp e
    https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_default&stacked=h
    sites sobre bootstrap-->

    <!-- FontAwesome Script -->
    <script src="https://kit.fontawesome.com/4d4aefe869.js" crossorigin="anonymous"></script>

    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="assets/css/headerFundopreto.css">
    <link rel="stylesheet" type="text/css" href="assets/css/footerFundopreto.css">
    <link rel="stylesheet" type="text/css" href="assets/css/homepage.css">
    <link rel="stylesheet" type="text/css" href="assets/css/main.css">
</head>

<body>
<?php include "header.php" ?>
<?php include "mobile_header.php" ?>

<main>
    <div class="image-carousel">
        <img class="image-carousel-img" src="assets/img/p4_mockup1.png" alt="Imagem de projeto">
    </div>

    <div id="Projetos">
        <div class="projetos-titulo">
            <h1>Projetos</h1>
            <img class="seta_irProjetos" src="assets/img/seta_homepage-02.png" width="208" height="208" alt="seta">
        </div>

        <div id="Filtros">
            <ul>
                <li class="filtro">Aplicações</li>
                <li class="filtro">Audiovisual</li>
                <li class="filtro">Design Gráfico</li>
                <li class="filtro">Motion Graphics</li>
                <li class="filtro">Ver Tudo</li>
            </ul>
        </div>

        <div id="FiltrosOrdenacaoMobile">
            <div id="DivBotoesFiltragemMobile">
                <ul>
                    <li class="botao-filtrar-mobile">Filtrar</li>
                    <li class="botao-filtrar-mobile">Ordenar</li>
                </ul>
            </div>
            <div class="FiltrosMobile">
                <ul>
                    <li class="filtro filtro-mobile">Aplicações</li>
                    <li class="filtro filtro-mobile">Audiovisual</li>
                    <li class="filtro filtro-mobile">Design Gráfico</li>
                    <li class="filtro filtro-mobile">Motion Graphics</li>
                    <li class="filtro filtro-mobile">Ver Tudo</li>
                </ul>
            </div>
            <div class="OrdenacaoMobile">
                <ul>
                    <li class="ordenacao-mobile">De A a Z</li>
                    <li class="ordenacao-mobile">De Z a A</li>
                    <li class="ordenacao-mobile">De Hoje a 2018</li>
                    <li class="ordenacao-mobile">De 2018 a Hoje</li>
                </ul>
            </div>
            <div id="PesquisaMobile">
                <div>
                    <i class="fas fa-search fa-3x"></i>
                </div>
                <div class="BarraPesquisaMobile">
                    <i class="fas fa-search fa-3x"></i>
                    <form action="homepage.php" method="post" onsubmit="return false;">
                        <input type="text" name="textoPesquisa">
                    </form>
                </div>
            </div>
        </div>

        <div id="Ordenacao">
            <div class="ordenacao-alfabetica">
                <p>A</p>
                <div id="animacaoOrdenacaoAlfabetica"></div>
                <p>Z</p>
            </div>
            <div class="ordenacao-temporal">
                <p>Hoje</p>
                <div id="animacaoOrdenacaoTemporal"></div>
                <p>2018</p>
            </div>
            <div id="Pesquisa">
                <div id="contentorAnimacaoLupa"></div>
                <div id="BarraPesquisa">
                    <i class="fas fa-search fa-3x"></i>
                    <p></p>
                </div>
            </div>
        </div>

        <div id="listaProjetos">

            <div class="row thumbnails">

            </div>

        </div>

    </div>
</main>
<?php include "footer.php" ?>

<script type="text/javascript" src="assets/js/lottie.js"></script>
<script type="text/javascript" src="assets/js/mobile_header.js"></script>
<script type="text/javascript" src="assets/js/homepage.js"></script>
<script type="text/javascript" src="assets/js/animations.js"></script>
</body>
</html>