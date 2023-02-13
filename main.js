rightWristX = 0;
leftWristX = 0;
leftWristY = 0;
rightWristY = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
    textSize(difference);
    fill("#FFFFFF");
    stroke("#000000");
    strokeWeight(3);
    text('Daiwik', 340, 200);
}

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        leftWristY = results[0].pose.leftWrist.y;
        difference = floor(leftWristX - rightWristX);
        console.log("rightWrist_x = "+ rightWristX + " rightWrist_y = "+ rightWristY);
        console.log("leftWrist_x = "+ leftWristX + " leftWrist_y = "+ leftWristY);
    }
}