var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function btn_start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    Webcam.attach(camera);
}

recognition.onresult() = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    speak();
}

function speak() {
    var synth = window.speechSynthesis;
    var speakData = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "jpeg",
    jpeg_quality: 90
});

var camera = document.getElementById("camera");