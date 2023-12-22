const NOREASON = "No reasons found yet! But remember, r,e,a,s,o,n,s = 7!";
const SPECIALREASON = "Looks like you added special characters! But remember, s,p,e,c,i,a,l = 7!";

const GOOD_WORDS = ["thala", "mahi", "dhoni", "seven", "msd", "csk", "india", "bharat", "mahendra singh dhoni", "indian",
                    "king", "chennai super kings", "captain", "captain cool", "maahi", "god", "op"];


document.getElementById("inputText")
.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.key === "Enter") {
    document.getElementById("submit").click();
  }
});

function calculateSum(num) {
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function checkNumber(input) {
    if (input === 7 || input === 77 || input === 777) {
        return "7 is Thala"
    }
    let num = input;
    let sum = calculateSum(num);
    message = input.toString().split('').join(' + ') + " = " + sum +"; "
    if (sum === 7) {
        return message;
    } else if (calculateSum(sum) === 7) {
        message += sum.toString().split('').join(' + ') + " = " + 7
        return message;
    }
    return NOREASON;
}

function checkString(input) {
    let message;
    if (GOOD_WORDS.includes(input.toLowerCase())) {
        message = "Thala is " + input +"!";
        return message;
    }
    if(input.match(/^[a-zA-Z0-9]+$/)) {
        if(input.length === 7) {
            message = input.split('').join(',') + " = " + 7
            return message;
        } 
    }
    else if (input.length > 0){
        return SPECIALREASON;
    } 
    return NOREASON;
}

function calculateReason() {
    let input = document.getElementById('inputText').value;
    let reason;
    let numeric = parseInt(input);
    if (numeric) {
        console.log("numeric")
        reason = checkNumber(numeric);
        showReason(reason);
        return;
    } else {
        reason = checkString(input);
        showReason(reason);
        return;
    }
}

// Function to show the reason
function showReason(message) {
    var tab = document.getElementById("content");
    tab.innerHTML = '<div class="animate__animated animate__zoomIn">' +
                    message +
                    '</br>' +
                    'Thala for a reason &#128293;' +
                    '</div>' +
                    '<button onclick="resetContent()">Reset</button>';
}


function resetContent() {
    // Reset tab on button press
    document.getElementById("content").innerHTML = "<div id=\"content\">" +
                                                        "<h6>Type anything and we will try to find the reason</h6>" +
                                                        "<h6>( Work in progress )</h6>" +
                                                        "<input type=\"text\" id=\"inputText\" placeholder=\"Type something..\">" +
                                                        "<button onclick=\"calculateReason()\">Submit</button>" +
                                                    "</div>"
}
