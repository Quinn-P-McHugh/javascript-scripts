/**
 * Represents a title (e.g. "engineer, "teacher", "intellectual", "acrobat", etc.) to be typed on the website's homepage.
 * 
 * @param text The text to be typed.
 * @param color The color of the text.
 * @param indefiniteArticle The indefinite article to be inserted in front of the title.
 */
function Title(text, color, indefiniteArticle) {
    this.text = text;
    this.color = color;
    this.indefiniteArticle = indefiniteArticle;
}

// Specify titles to be typed out
var titles = [new Title("engineer", "#AA1100", "an"),
                new Title("designer", "#4B0082", "a"),
                new Title("developer", "#55AA00", "a"),
                new Title("adventurer", "#FFBB11", "an"),
                new Title("altruist", "#3585e0", "an")]

// Initialize global variables
var cursorPos = 0;
var titleIndex = 0;
var title = titles[titleIndex];

// Set text colors
document.getElementById("typed-text").style.color = title.color;
document.getElementById("type-cursor").style.color = title.color;

// Clear the current text to make room for newly typed text.
document.getElementById("indefinite-article").innerText = title.indefiniteArticle;
document.getElementById("typed-text").innerText = "";
document.getElementById("type-cursor").innerText = "|";
var showCursor = true;
    
// Main function
window.setTimeout(function() {
    type(title.text, cursorPos);
    loop();
}, 1000);

function loop() {
    window.setInterval(function() {
        // Check if array has been looped through. If so, return to beginning.
        if (titleIndex < titles.length-1) {
            titleIndex++;
        }
        else {
            titleIndex = 0;
        }
        
        cursorPos = 0;
        title = titles[titleIndex];
        document.getElementById("typed-text").style.color = title.color;
        document.getElementById("type-cursor").style.color = title.color;
        document.getElementById("indefinite-article").innerText = title.indefiniteArticle;
        document.getElementById("typed-text").innerText = "";
        type(title.text, cursorPos);
    }, 4000);
    
    window.setInterval(function() {
        if (showCursor) {
            document.getElementById("type-cursor").innerText = "|";
        }
        else {
            document.getElementById("type-cursor").innerText = " ";
        }
        showCursor = !showCursor;
    }, 450);
}
    
/**
 * Simulates the typing effect.
 * 
 * @param text The text to be typed.
 * @param cursorPos The position of the cursor.
 */
function type(text, cursorPos) {
    if (cursorPos < text.length) {
        document.getElementById("typed-text").innerText += text.charAt(cursorPos);
        cursorPos++;
        setTimeout(function() {
            type(text, cursorPos);
        }, 100);
    }
}


