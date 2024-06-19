const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

// Getting All Buttons :
let startBtn = document.querySelector("#start");
let speakOut = document.querySelector("#speakOut");
let stopBtn = document.querySelector("#stop");


// Step : 5 
recognition.onstart = function(){
    console.log("VA is Active");
}

recognition.onresult = function(event){
    console.log(event);
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    console.log(`My Word is ${transcript}`);

        // Giving Commands :

    if(transcript.includes("Hello Friday")) {
        readOut("Hello Sir, How Are You ?");
    } 
     else if(transcript.includes("I am fine and you")) {
        readOut("Yeah I am also well . What I can do for you ?")
    } else if(transcript.includes("Please open the YouTube")) {
        readOut("Opening the YouTube");
        window.open("https://www.youtube.com/");
    } else if(transcript.includes("Open YouTube")) {
        readOut("Opening the YouTube");
        window.open("https://www.youtube.com/");
    } else if(transcript.includes("Please open the YouTube")) {
        readOut("Opening the YouTube");
        window.open("https://www.youtube.com/");
    } else if(transcript.includes("Open YouTube")) {
        readOut("Opening the YouTube");
        window.open("https://www.youtube.com/");
    } else if(transcript.includes("Please Open YouTube")) {
        readOut("Opening the YouTube");
        window.open("https://www.youtube.com/");
    } else if(transcript.includes("Hey Friday, please open the YouTube.")) {
        readOut("Opening the YouTube");
        window.open("https://www.youtube.com/");
    }

    else if(transcript.includes("Please open the Facebook")) {
        readOut("Opening the Facebook");
        window.open("https://www.facebook.com/?ref=homescreenpwa");
    } else if(transcript.includes("Open Facebook")) {
        readOut("Opening the Facebook");
        window.open("https://www.facebook.com/?ref=homescreenpwa");
    } else if(transcript.includes("Please open the Facebook")) {
        readOut("Opening the Facebook");
        window.open("https://www.facebook.com/?ref=homescreenpwa");
    } else if(transcript.includes("Open Facebook")) {
        readOut("Opening the Facebook");
        window.open("https://www.facebook.com/?ref=homescreenpwa");
    } else if(transcript.includes("Please Open Facebook")) {
        readOut("Opening the Facebook");
        window.open("https://www.facebook.com/?ref=homescreenpwa");
    } else if(transcript.includes("My Word is Hey Friday, please open the Facebook.")) {
        readOut("Opening the Facebook");
        window.open("https://www.facebook.com/?ref=homescreenpwa");
    } 
 
    else if(transcript.includes("Please open my Facebook profile")) {
        readOut("Opening the Facebook profile");
        window.open("https://www.facebook.com/profile.php?id=100090085755297");
    } else if(transcript.includes("Open my Facebook profile")) {
        readOut("Opening the Facebook profile");
        window.open("https://www.facebook.com/profile.php?id=100090085755297");
    } else if(transcript.includes("Please open my Facebook profile")) {
        readOut("Opening the Facebook profile");
        window.open("https://www.facebook.com/profile.php?id=100090085755297");
    } else if(transcript.includes("Open my Facebook profile")) {
        readOut("Opening the Facebook profile");
        window.open("https://www.facebook.com/profile.php?id=100090085755297");
    } else if(transcript.includes("Please Open my Facebook profile")) {
        readOut("Opening the Facebook profile");
        window.open("https://www.facebook.com/profile.php?id=100090085755297");
    } else if(transcript.includes("Hey Friday, please open my Facebook profile.")) {
        readOut("Opening the Facebook profile");
        window.open("https://www.facebook.com/profile.php?id=100090085755297");
    }

    else if(transcript.includes("Search for")) {
        readOut("Your result is here");
        let input = transcript.split("");
        input.splice(0, 11);
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.google.com/search?q=${input}`);
    } else if(transcript.includes("Can you tell me")) {
        readOut("Yeah Sure . Your result is here");
        let input = transcript.split("");
        input.splice(0, 15);
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.google.com/search?q=${input}`);
    } else if(transcript.includes("Please")) {
        readOut("Yeah Sure . Your result is here");
        let input = transcript.split("");
        input.splice(0, 6);
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.google.com/search?q=${input}`);
    }

    else if(transcript.includes("Please search on YouTube")) {
        readOut("Yeah Sure . Your result is here");
        let input = transcript.split("");
        input.splice(0, 24);
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.youtube.com/search?q=${input}`);
    } else if(transcript.includes("Search on YouTube")) {
        readOut("Yeah Sure . Your result is here");
        let input = transcript.split("");
        input.splice(0, 17);
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.youtube.com/search?q=${input}`);
    }
    //https://www.facebook.com/profile.php?id=100090085755297
    // readOut(transcript);
}

recognition.onend = function(){
    console.log("VA is De-Active");
}

// recognition.continuous = true;
// Step : 8
startBtn.addEventListener("click", ()=>{
    recognition.start();
});

stopBtn.addEventListener("click", ()=>{
    recognition.stop();
})

// Call A Function That will response when we will speak with our VA :
function readOut(message) {
    const speech = new SpeechSynthesisUtterance();
    const allVoices = speechSynthesis.getVoices();
    speech.text = message;
    speech.voice = allVoices[36];
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("Speaking Out");
}
speakOut.addEventListener("click", ()=>{
    readOut("Aslam Alaikum Ya Ali Madad Alayhi-Salam..");
})