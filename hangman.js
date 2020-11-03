window.onload = load;

function load() {
    //All possible words
    var words = ["apple", "snake", "javascript", "hangman"];
    
    //Pick random word
    var word = words[Math.floor(Math.random() * words.length)];

    //How many letters are in the word?
    var answerArray =[];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    document.getElementById("word").innerHTML = "The word is " + answerArray.join(" ");

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    
    //make buttons
        for (var j = 0; j < alphabet.length; j++) {
        var button = document.createElement("button");
        button.id = alphabet[j];
        var letterInButton = document.createTextNode(alphabet[j]); //choose letter
        button.appendChild(letterInButton); //text in button
        
        var buttons = document.getElementById("buttons"); //reach html div
        buttons.appendChild(button); //assign button to html
        buttons.addEventListener("click", checkLetter); //add function to the button
    }
    function checkLetter() {
        alert(button.id);
    }
}
