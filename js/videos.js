const body = document.getElementsByTagName("body")[0];


//SHOW VIDEO POP AND CLOSE


var videos = document.querySelectorAll('.video-thumbnail');
Array.from(videos).forEach(video => {
  video.addEventListener('click', () => {
    body.classList.toggle('overflowToggle');

    var popup = video.parentNode.querySelector('.video-popup');
    var elVideo = video.parentNode.querySelector('video');
    console.log(elVideo);
    var closeViewer = video.parentNode.querySelector('.closeViewer');
    var closeViewer = popup.querySelector('.closeViewer');
    popup.classList.add('on');
    elVideo.play();
    closeViewer.addEventListener('click', (e)=>{
        console.log(e.target)
        elVideo.load();
        body.classList.toggle('overflowToggle');
        popup.classList.remove("on");
    }, false);
  })
});




//POWERPOINT POPUP

var pptPopup = document.getElementById('powerpoint-popup');
var pptTN = document.getElementById('powerpoint-thumbnail');

pptTN.addEventListener('click', () => {
  pptPopup.classList.toggle('on');
  body.classList.toggle('overflowToggle');
});





