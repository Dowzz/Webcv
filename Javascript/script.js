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
    $(document.getElementsByTagName("a")).click(function(e){
        liens = this.id;
        e.preventDefault();
        $(".content").load("pages/"+liens+".html");
    })
})

});





