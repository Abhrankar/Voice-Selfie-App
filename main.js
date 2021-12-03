var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function btn_start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "jpeg",
    jpeg_quality: 90
});

var camera = document.getElementById("camera");

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        speak();
    }

    Webcam.attach(camera);
}

function speak() {
    var synth = window.speechSynthesis;
    //var speakData = document.getElementById("textbox").value;
    speakData = "Taking your selfie in 5 seconds.";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);
}

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id = 'selfie' src = " + data_uri + ">";
    })
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}