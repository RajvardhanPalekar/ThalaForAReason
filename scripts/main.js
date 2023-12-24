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

function getNumberMessage(number) {
    if (number < 0) {
        return "Nothing negative about Thala!";
    } else if (number === 1) {
        return "Thala is #1";
    } else if (number < 7) {
        return `${number} + ${7 - number} = 7`;
    } else if (number === 7 || number === 77 || number === 777) {
        return "7 is Thala";
    } else if (number < 16) {
        return `${number} - ${number - 7} = 7`;
    }
    return undefined;
}

function checkNumber(input) {
    let message = getNumberMessage(input);
    if (message) {
        return message;
    }
    let num = input;
    let sum = calculateSum(num);
    message = input.toString().split('').join(' + ') + " = " + sum +"; "
    let sumMessage =  getNumberMessage(sum);

    if (sumMessage) {
        return message + sumMessage;
    } else {
        let sum2 = calculateSum(sum);
        message += "</br>" + sum.toString().split('').join(' + ') + " = " + sum2 +"; "
        let sum2Message =  getNumberMessage(sum2);
        return sum2Message? message + sum2Message: NOREASON;
    }
}

function checkString(input) {
    let message;
    let strLength = input.length;
    if (GOOD_WORDS.includes(input.toLowerCase())) {
        message = "Thala is " + input +"!";
        return message;
    }
    if(input.match(/^[a-zA-Z0-9]+$/)) {
        message = `(${input.split('').join(',')}) = ${strLength}; `;
        let stringMessage =  getNumberMessage(strLength);
        if (stringMessage) {
            return message + stringMessage;
        } else {
            let sum =  calculateSum(strLength);
            message += "</br>" + strLength.toString().split('').join(' + ') + " = " + sum +"; "
            let sumMessage =  getNumberMessage(sum);
            return sumMessage? message + sumMessage: NOREASON;
        }
    }
    else if (strLength > 0){
        return SPECIALREASON;
    } 
    return NOREASON;
}

function calculateReason() {
    let input = document.getElementById('inputText').value;
    console.log(input);
    console.log(typeof(input));
    let reason;
    let numeric = parseInt(input, 10);
    console.log(numeric);
    if (numeric) {
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
    var body = document.getElementsByTagName("body");
    body[0].style.backgroundImage = "url('resources/msd.jpg')";
    var tab = document.getElementById("content");
    tab.innerHTML = '<div class="animate__animated animate__zoomIn">' +
                    message +
                    '</br>' +
                    'Thala for a reason &#128293;' +
                    '</div>' +
                    '<button onclick="resetContent()">Reset</button>';
                    
    // Play the success sound
    var sound = document.getElementById('success-sound');
    sound.play();
}


function resetContent() {
    var body = document.getElementsByTagName("body");
    body[0].style.backgroundImage = "none";
    // Reset tab on button press
    document.getElementById("content").innerHTML = "<div id=\"content\">" +
                                                        "<h6>Try different numbers or words and we will try to find the reason</h6>" +
                                                        "<input type=\"text\" id=\"inputText\" placeholder=\"Type something..\">" +
                                                        "<button onclick=\"calculateReason()\">Submit</button>" +
                                                    "</div>"
}


const sharebtn = 
    document.querySelector('.sharebtn')
 
// Creating a bool variable for changing
// the image of share button 
let bool = 0
 
// Adding an event listener
sharebtn.addEventListener('click', () => {
 
    // As we clicked the mouse over
    // the share button the bool value.
    //  get flipped and then working of
    // if-else loop get starts
    bool = !bool
     
    if (bool == 0) {
        sharebtn.innerHTML =
            '<i class="far fa-share-square"></i>'
    } else {
        sharebtn.innerHTML =
            '<i class="fas fa-times"></i>'
    }
})

