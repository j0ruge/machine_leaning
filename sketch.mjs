

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let mobile_net;

// A variable to hold the image we want to classify
let img;

// Variables for displaying the results on the canvas
let label = "";
let confidence = "";

function preload() {
  // Load an image
  img = loadImage('images/gralha-3.jpg');
  mobile_net = ml5.imageClassifier('MobileNet');
}



async function setup(){
  createCanvas(640, 480);
  mobile_net.classify(img, gotResults);
  background(0);
  image(img, 0, 0, width, height);  
}

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

