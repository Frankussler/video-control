let video = document.getElementById("video");
let imgPlayPause = document.getElementById("play")
let btn = document.getElementById("botoes")



function mostrarPlay(){
   
    btn.classList.add("mostrar");
}

function ocultarPlay(){
    
    btn.classList.remove("mostrar");
}





function togglePlayPause (){
if (video.paused) {
    video.play();
    imgPlayPause.setAttribute("src", "./video/stop.png");
}
else {
    video.pause();
    imgPlayPause.setAttribute("src", "./video/play.png");
}
}



