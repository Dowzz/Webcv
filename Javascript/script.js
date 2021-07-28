var boiteVideo = document.getElementById("boiteVideo");
var showVid = document.getElementById('showVid');
var hideVid = document.getElementById('hideVid');
$(() =>{

    window.addEventListener('load', function(){
        boiteVideo.style.display="none";
        $('.content').load("Pages/accueil.html")
    })
$('#showVid').click(function(){
    $('#boiteVideo').fadeIn(400);
})
$('#hideVid').click(function(){
    $('#boiteVideo').fadeOut(400);
})
$(function(){
    $(document.getElementsByClassName("titre_Partie")).click(function(e){
        e.preventDefault();
        url=(this.href);
        $.get(url, function(data) {
            $('.content').html(data);
        })
    })
})
function showResponsiveMenu() {
    var menu = document.getElementById("navmenu_reponsive");
    var icon = document.getElementById("nav_hamburger_icon");
    var root = document.getElementById("root");
    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";                    
        icon.className = "";
        root.style.overflowY = "";
    }
}
});





