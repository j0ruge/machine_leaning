

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let mobile_net;
let classifier;

// A variable to hold the image we want to classify
let video;

// Variables for displaying the results on the canvas
let label = "";
let confidence = "";

// function preload()
// {
//   mobile_net = ml5.featureExtractor('MobileNet', modelReady);
// }

function modelReady()
{
  console.log('Model is ready!!!');  
}

function videoReady()
{
  console.log('Video is ready!!!');  
}

function gotResults(error, results)
{
  if (error) console.error(error);
  else 
  {
    //console.log(results); 
    
    label = results[0].className;
    mobile_net.predict(gotResults);
  }

async function setup()
{
  createCanvas(640, 480);
  background(0);

// Using webcam feed as video input, hiding html element to avoid duplicate with canvas
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  mobile_net = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobile_net.classification(video, videoReady);
   
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



}


