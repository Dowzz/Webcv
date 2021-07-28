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
            myFunction();
        })
    })
})
});
function myFunction() {
    var x = document.getElementById("myLinks");
    console.log(x);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

