

function setup() {
    canvas = createCanvas(400, 400)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(430, 326)
    video.position(20, 200)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function modelLoaded() {
    console.log("Modelo Carregado")
}

function gotPoses(error, result) {
    if(error) {
        console.log(error)
    }
    else if(result.length > 0){
        console.log(result)
    }
}

function draw() {
    background("darkslategray")
}