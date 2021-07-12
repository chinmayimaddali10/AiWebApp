var song1 = "";
var song2 = "";

var song1Stat = "";

var leftWScore = 0;
var rightWScore = 0;

leftWX = 0;
leftWY = 0;
rightWY = 0;
rightWX = 0;
scoreLW = 0;

function preload() {
    song1 = loadSound("Imagine Dragons - Believer.mp3");
    song2 = loadSound("Music.mp3");
    song.setVolume(0.5);
    song.rate(1);
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(450, 450);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);
}

function draw() {
    image(video, 25, 25, 450, 450);
    stroke("#FF0000");
    fill("#FF0000");
    
    songStat = song1.isPlaying();
    song1Stat = song2.isPlaying();
    
  

	if(scoreLeftWrist > 0.2)
	{
		circle(leftX,leftWY,20);

			song2.stop();

		if(song2Stat == false)
		{
			song2.play();
			document.getElementById("song").innerHTML = "Imagine Dragons - Beleiver";
		}
	}

}
    


function modelLoaded() {
    console.log("posenet is working");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
    scoreLW = results[0].pose.keypoints[9].score;
    leftWX = results[0].pose.leftWrist.x;
    leftWY = results[0].pose.leftWrist.y;
    rightWY = results[0].pose.rightWrist.y;
    rightWX = results[0].pose.rightWrist.x;
    console.log(" left wrist x = " + leftWX + " left wrist y = " + leftWY + " right wrist y = " + rightWY + " right wrist x = " + rightWX);
}
    }
    song.isPlaying()
    