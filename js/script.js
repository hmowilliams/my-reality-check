// directs user to resources if potential warning signs are detected in input
var warningRE = /suicide/;
var testWarningString = "Does this sentence have the word suicide in it?";

if (warningRE.test(testWarningString)) {
  alert("If this is an emergency, please call 911.");
}

// evaluates checkin values to determine whether or not to ask if they'd like a supporter to get in touch
var mood = -1;
var alone = -1;
var testArray = [];

// evaluates journal length in order to display encouragement graphics
var journalText = "";
var journalLength = journalText.length;



switch (journalLength) {
  case (journalLength < 100):
    break;
  case (journalLength < 200):
    break;
  case (journalLength < 300):
    break;
  case (journalLength < 400):
    break;
  case (journalLength < 500);
    break;
  case (journalLength < 600):
    break;
  case (journalLength < 700):
    break;
  case (journalLength < 800):
    break;
  case (journalLength < 900):
    break;
  case (journalLength < 1000);
    break;
}

var headline = document.getElementById("h1");

headline.innerHTML = "Wow, a new headline!";
