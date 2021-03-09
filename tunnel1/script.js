var myimages = ["images/testpattern.jpg", "images/wandavision.jpg", "images/mando.jpg", "images/doom-patrol-show.jpg", "images/sabrina.jpg", "images/dark.jpg"];

var endcount = myimages.length;

var currentImage = 0;

function buildImages() {
    for (var i = 0; i < myimages.length; i++) {
       document.getElementById("thepic").src=images[i++];
   }
}

function goHigher() {
  currentImage++;
  currentImage = currentImage%endcount;
  document.getElementById("demo").setAttribute("src",myimages[currentImage]);
}

function goLower() {
  currentImage--;
  if(currentImage<0){currentImage=(endcount-1);}
  else{currentImage = currentImage%endcount;}
  document.getElementById("demo").setAttribute("src",myimages[currentImage]);
}

