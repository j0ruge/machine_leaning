

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let mobile_net;
let classifier;

// A variable to hold the image we want to classify
let video;

// Variables for displaying the results on the canvas
let label = "";
let confidence = "";

// Buttons for adding images to the classifier
let classifierButton_01;
let classifierButton_02;
let classifierButton_03;
let trainButton;


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

function whileTraining(loss)
{
  if (loss == null)
  { 
    console.log('Training Complete!!!');
    classifier.classify(gotResults);}
  else console.log(loss);
}

function gotResults(error, results)
{
  if (error) console.error(error);
  else 
  {
    console.log(results); 
    
    label = results[0].label;
    classifier.classify(gotResults);
  }
}

function setup()
{
  createCanvas(640, 480);
  background(0);

// Using webcam feed as video input, hiding html element to avoid duplicate with canvas
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  mobile_net = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobile_net.classification(video, videoReady);
  
  // Add the new image with a label
  classifierButton_01 = createButton('Bill');
  classifierButton_01.mousePressed(function()
  {
    classifier.addImage('Bill');
    console.log('Bill');
  });

  // Add the new image with a label
  classifierButton_02 = createButton('JorUge');
  classifierButton_02.mousePressed(function()
  {    
    classifier.addImage('JorUge');
    console.log('JorUge');
  });

  // Add the new image with a label
  classifierButton_03 = createButton('none');
  classifierButton_03.mousePressed(function()
  {
    classifier.addImage('none');
    console.log('none');
  });

  // Train the classifier
  trainButton = createButton('Train');
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });
}

async function draw()
{
  //setup();
  //circle(200, 200, 200);
  background(0);
  image(video, 0, 0, 640, 480);

  // Printing class with the highest probability on the canvas
  fill(255);
  textSize(32);
  text(label,10, height - 10);
};


