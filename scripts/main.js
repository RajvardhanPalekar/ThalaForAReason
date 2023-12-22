

function calculateReason() {
    var input = document.getElementById('inputText').value;
    
    let sum = parseInt(input);
    
    if (sum === 7) {
        showCongratulations();
    } else {
        showAlert('Try again!');
        showAlert('No reason found yet!');
    }
}

// Function to show congratulations message
function showCongratulations() {
    var tab = document.getElementById("content");
    tab.innerHTML = '<div class="animate__animated animate__zoomIn">' +
                    'You Guessed It Correct!<br>' +
                    'Thala for a reason❤' +
                    '</div>';
    
    // // Play the success sound
    // var sound = document.getElementById('success-sound');
    // sound.play();

    setTimeout(function() {
        tab.innerHTML = '';
        resetContent();           
                
    }, 5000); // Display the message for 5 seconds
}

// Function to show alert message
function showAlert(message) {
    var tab = document.getElementById("content");
    tab.innerHTML = '<div class="animate__animated animate__shakeX">' +
                    message +
                    '</div>';
    setTimeout(function() {
        tab.innerHTML = '';
        resetContent();
    }, 2000); // Display the alert for 2 seconds
}

function resetContent() {
    // Reset tab content after animation
    document.getElementById("content").innerHTML = '<input type="text" id="inputText" placeholder="Type something..">' +
    '<button onclick="calculateReason()">Submit</button>';   
}
