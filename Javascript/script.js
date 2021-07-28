var boiteVideo = document.getElementById("boiteVideo");
var showVid = document.getElementById('showVid');
var hideVid = document.getElementById('hideVid');
$(() =>{

    window.addEventListener('load', function(){
        boiteVideo.style.display="none";
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
        url=("Pages/"+this.id+".html");
        $.get(url, function(data) {
            $('.content').html(data);
        })
    })
})

});





