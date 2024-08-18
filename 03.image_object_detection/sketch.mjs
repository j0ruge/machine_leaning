


let detector;

// A variable to hold the image we want to classify
let img;

// Variables for displaying the results on the canvas
let label = "";
let confidence = "";

function preload()
{
  img = loadImage('../images/dog_cat_01.jpg');
  detector = ml5.objectDetector('cocossd');
  
}


function gotDetections(error, results)
{
  if(error) console.error(error);  
  console.log(results);
  for (let index = 0; index < results.length; index++)
  {
    let object = results[index];
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

async function setup()
{
  createCanvas(640, 480);  
  image(img, 0, 0);
  detector.detect(img, gotDetections);   
}

