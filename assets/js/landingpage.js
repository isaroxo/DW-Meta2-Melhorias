var ponto1 = document.getElementById('ponto1');
var ponto2 = document.getElementById('ponto2');
var ponto3 = document.getElementById('ponto3');
var studio = document.getElementById('studio');

window.addEventListener('load', function(){
    setTimeout(function (){
        ponto1.style.color = '#E111A7';
        ponto1.style.display = 'inline';
    }, 500);
    setTimeout(function (){
        ponto2.style.color = '#00FFFF';
        ponto2.style.display = 'inline';
    }, 1500);
    setTimeout(function (){
        ponto3.style.color = '#B4FF00';
        ponto3.style.display = 'inline';
    }, 2500);
    setTimeout(function (){
        ponto1.style.display = 'none';
        ponto2.style.display = 'none';
        ponto3.style.display = 'none';
    }, 3500);
    setTimeout(function (){
        ponto1.style.color = 'white';
        ponto1.style.display = 'inline';
    }, 4500);
    setTimeout(function (){
        ponto2.style.color = 'white';
        ponto2.style.display = 'inline';
    }, 5500);
    setTimeout(function (){
        ponto3.style.color = 'white';
        ponto3.style.display = 'inline';
    }, 6500);
    setTimeout(function (){
        studio.style.opacity = '1';
    }, 7500);
    setTimeout(function (){
        location.href = "homepage.php";
    }, 8500);

},false);

window.addEventListener('click', function(){
    location.href = "homepage.php";
},false);


