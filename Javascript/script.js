var boiteVideo = document.getElementById("boiteVideo");
var showVid = document.getElementById('showVid');
var hideVid = document.getElementById('hideVid');
$(() =>{
    window.onload =function(){
        $('.content').load("Pages/accueil.html")
    }
$(function(){
    $(document.getElementsByClassName("titre_Partie")).click(function(e){
        e.preventDefault();
        url=(this.href);
        $.get(url, function(data) {
            $('.content').addClass('detract')
            console.log(url)
            $('.content').html(data);
            if (window.matchMedia("(max-width: 1250px)").matches) {
                document.getElementById('check')
                .dispatchEvent(new MouseEvent('click', {shiftKey: true}));   
            }
        })
    })
})
});
function remove(id){
    if(id === (document.getElementById(id))){       
        return
    }else{
        $('.content').removeClass('detract');
    }
}
function toggleMenu() {
    var x = document.getElementById("myLinks");
    $(x).fadeToggle();
}


