const videoBox = document.getElementById("videoBox");
const showVid = document.getElementById('showVid');
const hideVid = document.getElementById('hideVid');
$(() =>{

    window.addEventListener('load', function(){
        videoBox.style.display="none";
    })
$('#showVid').click(function(){
    $('#videoBox').fadeIn(400);
    //videoBox.style.display="block";
})
$('#hideVid').click(function(){
    $('#videoBox').fadeOut(400);
    //videoBox.style.display="none";
})


});
$('.content').load("experience.html");



