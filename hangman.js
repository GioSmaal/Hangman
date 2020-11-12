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


    var count = -1;
    
    //make buttons
        for (var j = 0; j < alphabet.length; j++) {
        var button = document.createElement("button");
        button.id = alphabet[j];
        var letterInButton = document.createTextNode(alphabet[j]); //choose letter
        button.appendChild(letterInButton); //text in button
        
        var buttons = document.getElementById("buttons"); //reach html div
        buttons.appendChild(button); //assign button to html
        var individual = document.getElementById(alphabet[j]); 
        individual.addEventListener("click", checkLetter);
    }
    function checkLetter() {
        if (word.includes(this.id)) { //check if letter pressed is included in the word
            
        word.split(' '); //turn word into array
            for (var k = 0; k < answerArray.length; k++) { 
                if (word[k] == this.id) { //check if letter corresponds to button pressed               
                    answerArray[k] = answerArray[k].replace(answerArray[k], this.id); //replace _ with letter
                }
            }
        document.getElementById("word").innerHTML = "The word is " + answerArray.join(" "); //update text

            if(answerArray.includes("_")) {

            }
            
            else {               
                document.getElementById("word").innerHTML = "The word is " + answerArray.join("");
                document.getElementById("end").innerHTML = "You won!";
                document.getElementById("reset").style.visibility = "visible";
                
            }
        }
        else {
            count++;
            
            document.getElementById("hangman").src = count + ".jpg"; //update Hangman picture
            
            if (count == 6) {
                document.getElementById("end").innerHTML = "You lost! The word was: " + word;
                document.getElementById("reset").style.visibility = "visible";
            }
        }

        this.style.visibility = "hidden";
    }

    
}
function resetPage() {
    location.reload();
}