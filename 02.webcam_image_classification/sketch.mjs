

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let mobile_net;

// A variable to hold the image we want to classify
let video;

// Variables for displaying the results on the canvas
let label = "";
let confidence = "";

function preload()
{
  mobile_net = ml5.imageClassifier('MobileNet');
}

async function setup()
{
  createCanvas(640, 480);
  background(0);

// Using webcam feed as video input, hiding html element to avoid duplicate with canvas
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  mobile_net.classifyStart(video, gotResults);
   
}

async function draw()
{
  //setup();
  //circle(200, 200, 200);
  image(video, 0, 0);

  // Printing class with the highest probability on the canvas
  fill(255);
  textSize(32);
  text(label,20,50);
};
//await setup();

// function draw()
// {
//   setup();
//   //circle(200, 200, 200);
// };




// https://youtu.be/yNkAuWz5lnY?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&t=934
function gotResults(results)
{
  console.log(results); 

  // Display the label
  fill(255);
  stroke(0);
  textSize(18);
  label = `Label: ${results[0].label}`;
  confidence = `Confidence: ${nf(results[0].confidence, 0, 2)}`;
  text(`${label}`, 10, 360);
  text(`${confidence}`, 10, 380);
}

