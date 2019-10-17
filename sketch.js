
// Image analyzer
const analyzer = ml5.featureExtractor('MobileNet', modelLoaded);
const analyzer2 = ml5.featureExtractor('MobileNet', modelLoaded);
// classifier
  const classifier1 = analyzer.classification();
  const classifier2 = analyzer2.classification();
//Boolean to check if model is modelLoaded
let modLoad = false;
// When model is loaded
function modelLoaded() {
  //classifier1
  classifier1.addImage(moth1, 'friend') // Pic ex 1.1
  classifier1.addImage(moth2, 'friend')
  classifier1.addImage(lamp1, 'prey') // Pic ex 2.1
  classifier1.addImage(lamp2, 'prey') // Pic ex 2.2
  classifier2.addImage(moth3, 'strong') // Pic ex 1.1
  classifier2.addImage(moth4, 'strong')
  classifier2.addImage(lamp3, 'weak') // Pic ex 2.1
  classifier2.addImage(lamp4, 'weak') // Pic ex 2.2
  console.log(modelLoaded)
  console.log('Model Loaded')
  modLoad = true;
  //imageAdded();

}

//
let moth1;
let moth2;
let moth3;
let moth4;
let lamp1;
let lamp2;
let lamp3;
let lamp4;
let classifyimg;
let trainBut;
let result1;
let result2;

function setup() {
  createCanvas(windowWidth, windowHeight)
  moth1 = createImg('mothdude.jpg')
  moth2 = createImg('mothdude2.jpg')
  moth2 = createImg('mothdude3.jpg')
  moth3 = createImg('mothdude4.jpg')
  lamp1 = createImg('lampman1.jpg')
  lamp2 = createImg('lampman2.jpg')
  lamp3 = createImg('lampman3.jpg')
  lamp4 = createImg('lampman4.jpg')
  classifyimg = createImg('Canarythorn.jpg');

}

function draw() {
  if (modLoad == true) {
    trainBut = createButton("Train")
    trainBut.mousePressed(imageAdded)
    trainBut.position(100, 100)
  }
}

function imageAdded(loss) {
  console.log("Image added");
  //classifier1
  classifier1.train(function(lossValue) {
    if (lossValue == null) {
      console.log('C1 Training Complete');
      classifier1.classify(classifyimg);
      let result1 = classifier1.classify(classifyimg);
      console.log(result1);
      text(result1, 150, 100);
    } else {
      console.log("C1 Loss=" + lossValue);
    }
  });
  //classifier2

  classifier2.train(function(lossValue) {
    if (lossValue == null) {
      console.log('C2 Training Complete');
      classifier2.classify(classifyimg);
      let result2 = classifier2.classify(classifyimg);
      console.log(result2);
      text(result2, 250, 100);
    } else {
      console.log("C2 Loss=" + lossValue);
    }

  });
}
