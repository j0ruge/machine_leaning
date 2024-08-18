

let video;
let detector;
let detections = [];

function preload()
{  
  detector = ml5.objectDetector('cocossd');  
}

function gotDetections(error, results)
{
  if(error) console.error(error);   
  detections = results;  
  detector.detect(video, gotDetections);
}

async function setup()
{
  createCanvas(640, 480);  
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  detector.detect(video, gotDetections);   
}

// Need to use draw() to display the webcam feed, refresh the image all the time

function draw()
{
  image(video, 0, 0);  

  for (let index = 0; index < detections.length; index++)
    {
      let object = detections[index];
      stroke(0, 255, 0);
      strokeWeight(4);
      noFill();
      rect(object.x, object.y, object.width, object.height);
      noStroke();
      fill(255);
      textSize(24);
      text(`${object.label} ${nf(object.confidence, 0, 2)}`, object.x + 10, object.y + 24);
    }
}