//The Github repo link is https://github.com/JulieZhang0102/hw7-2021-main.git
//The web page can be accessed at https://juliezhang0102.github.io/hw7-2021-main/

var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	console.log("Play Video")
	var volume = document.getElementById("slider").value
	document.getElementById("volume").innerHTML = volume + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause Video")
});

document.querySelector("#slower").addEventListener("click", function() {
	var playRate = video.playbackRate
	video.playbackRate = playRate * 0.95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	var playRate = video.playbackRate
	video.playbackRate = playRate / 0.95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	var position = video.currentTime
	if (position + 15 >= video.duration) {
		console.log("Original location " + position)
		video.currentTime = 0
		console.log("Going back to beginning")
	} else {
		video.currentTime = position + 15
		console.log("Original location " + position)
	}
	video.play()
	console.log("New location " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false
		document.getElementById("mute").innerHTML = "Mute"
		console.log("Unmute Video")
	} else {
		video.muted = true
		document.getElementById("mute").innerHTML = "Unmute"
		console.log("Mute Video")
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	var volume = document.getElementById("slider").value
	document.getElementById("volume").innerHTML = volume + "%"
	video.volume = volume / 100
	console.log(video.volume)
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
	console.log("Add oldSchool Class")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
	console.log("Remove oldSchool Class")
});

