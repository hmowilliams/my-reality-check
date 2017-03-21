var name = prompt("What is your name?");
alert("Hello, " + name);

var warningRE = new RegExp("suicide");

var testWarningString = "Does this sentence have the word suicide in it?";

if ( warningRE.test(testWarningString)) {
  alert("If this is an emergency, please call 911 or the National Suicide Prevention Lifeline at 1-800-273-8255.
        \n You can also visit their website at\: http\:\/\/suicidepreventionlifeline.org\/");
}
