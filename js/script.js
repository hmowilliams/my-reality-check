var name = prompt("What is your name?");
alert("Hello, " + name);

var warningRE = /suicide/;

var testWarningString = "Does this sentence have the word suicide in it?";

if (warningRE.test(testWarningString)) {
  alert("If this is an emergency, please call 911.");
}
