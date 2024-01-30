noseX = "";
noseY = "";
function preload() {
    mustache = loadImage('mustache.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    pose = ml5.poseNet(video, Loaded);
    pose.on("pose", getResult);
}
function getResult(r) {
    if (r.length > 0) {
        //console.log(r);
        noseX = r[0].pose.nose.x
        noseY = r[0].pose.nose.y
        console.log(noseX, noseY)
    }
}
function Loaded() {
    console.log("loaded successfully");
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX-20, noseY, 40, 40);
}

function take_snapshot() {
    save('filter.png');
}