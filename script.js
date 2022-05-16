//relaxing area//
let container = document.querySelector(".container");
let text = document.getElementById("text");
console.log(container)
let totalTime = 12000;

focusAnimation();
function focusAnimation() {
  text.innerText = "Inhale";
  container.className="container grow";
  setTimeout(() => {
    text.innerText = "Hold"
    setTimeout(() => {
      text.innerText = "Exhale"
      container.className = "container shrink"
    }
      , totalTime / 5)

  }, (totalTime / 8) * 2)

}

setInterval(focusAnimation,10000)

//music player//
let musicPlayer=document.querySelector(".music_container");
let audio=document.querySelector(".audio");
let play=document.querySelector(".play");
let previous=document.querySelector(".previous");
let next=document.querySelector(".next");

let songs=["nature","silence","rain"]
let songIndex=2;

console.log(loadSong(songs[songIndex]))
function loadSong(song){
  audio.src=`./${song}.mp3`
}
function playSong(){
  container.classList.add("play");
play.querySelector(".bi").classList.remove("bi-play-circle-fill");
  play.querySelector(".bi").classList.add("bi-pause-circle-fill");
  audio.play()
}


function pauseSong(){
   container.classList.remove("play");
play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
play.querySelector(".bi").classList.add("bi-play-circle-fill");
audio.pause()

}
play.addEventListener("click",()=>{
const isPlaying=container.classList.contains("play")
if(isPlaying){
pauseSong()
}else{
  playSong()
}

  });
previous.addEventListener("click",prevSong);
next.addEventListener("click",nextSong);
function prevSong(){
  songIndex--
if(songIndex<0){
  songIndex=songs.length-1;
}
  loadSong(songs[songIndex]);
playSong()

}
function nextSong(){
  songIndex++
if(songIndex>songs.length-1){
songIndex=0
}
  loadSong(songs[songIndex]);
playSong()

}




//codes for thoughts area//
let form = document.getElementById("note");
let input = document.getElementById("note_area");
let message = document.getElementById("message");
let posted = document.getElementById("content");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  userInput();
})
let userInput = () => {
  if (input.value === "") {
    message.innerHTML = "Don't want to share your thoughts?That's okay comeback when you feel good"
  }
  else {
    message.innerHTML = "";
    postData()
  }

}


let data = {};


let postData = () => {
  data["text"] = input.value;
  console.log(data);
  submitPost()
}
let submitPost = () => {

  posted.innerHTML +=

    ` <div>

          <p>${data.text}</p>
          <span class="modify">
            <i class="bi bi-pencil-fill" onClick="editPost(this)"></i>
            <i class="bi bi-x-circle-fill" onClick="tremovePost(this)" ></i>

          </span>


        </div>`


  input.value = "";


  ;
}
let removePost = (event) => {
  event.parentElement.parentElement.remove()

}
let editPost = (event) => {
  input.value = event.parentElement.previousElementSibling.innerHTML;
  event.parentElement.parentElement.remove()
}
