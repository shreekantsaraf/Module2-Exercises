var ExerciseData = '{"Exercices":[' +
    '{"Name":"Exercise1","instruction":"Create a new HTML pageName it index.htmlGive it a title of -Game Of Thrones Characters-" }' +
    ',{"Name":"Exercise1","instruction":"Include a header 2 tag with “GOT Characters” followed by…" }' +
    ',{"Name":"Exercise1","instruction":"Include a numbered list of at least 5 GOT Characters in alphabetical order" }' +
    ',{"Name":"Exercise1","instruction":"Include a header 3 tag with -Stark Direwolves- followed by" }' +
    ',{"Name":"Exercise1","instruction":"Create an unordered list of the 6 Stark Direwolves" }' +
    ',{"Name":"Exercise1","instruction":"Add a link to   and give it the text of -HBO Game Of Thrones Webpage-" }' +

    ',{"Name":"Exercise2","instruction":"Create a new HTML page called houses.html" }' +
    ',{"Name":"Exercise2","instruction":"Add a header with the text -Game Of Thrones Houses-" }' +
    ',{"Name":"Exercise2","instruction":"Add a table with at least 4 columns with different Game of Thrones Houses and at least 2 rows of characters of each house" }' +
    ',{"Name":"Exercise2","instruction":"USE TABLE HEADER TAGS!" }' +
    ',{"Name":"Exercise2","instruction":"Add a footer to your table with an image of one of the characters" }' +

    ',{"Name":"Exercise3","instruction":"Create a new html page called newGOTCharacter.html" }' +
    ',{"Name":"Exercise3","instruction":"Add a form to the page with the following:" }' +
    ',{"Name":"Exercise3","instruction":"An input for a new GOT Character Name (it should be a required field)" }' +
    ',{"Name":"Exercise3","instruction":"A drop down list of which house the character belongs to" }' +
    ',{"Name":"Exercise3","instruction":"A checkbox or radio buttons to select the gender of the character" }' +
    ',{"Name":"Exercise3","instruction":"A textarea for a description of the character" }' +
    ',{"Name":"Exercise3","instruction":"A submit button to save the character" }' +

    ',{"Name":"Exercise4","instruction":"Create a new file called styles.css and link it to both your index.html and houses.html documents." }' +
    ',{"Name":"Exercise4","instruction":"Change all paragraph tags to be the color grey." }' +
    ',{"Name":"Exercise4","instruction":"Change the HBO anchor tag to navigate to the houses.html document." }' +
    ',{"Name":"Exercise4","instruction":"Make all of the text in the last column of your houses table appear in green." }' +
    ',{"Name":"Exercise4","instruction":"Make the last item of the last column in the houses table appear in black." }' +

    ',{"Name":"Exercise5","instruction":"Create a nav tag in your index.html with a link to your houses.html and to your newGOTCharacter.html" }' +
    ',{"Name":"Exercise5","instruction":"Pin the navigation to the top of the page using CSS" }' +
    ',{"Name":"Exercise5","instruction":"Change the background color of the table in your houses.html document" }' +
    ',{"Name":"Exercise5","instruction":"Change the font size of the list items on the Stark Direwolves to 1.3em.Add a dotted border to the textarea element on your newGOTCharacter.html document" }' +
    ',{"Name":"Exercise5","instruction":"Make the margin of all inputs 3px in size" }' +


    ',{"Name":"Exercise6","instruction":"On the index.html page make the two lists appear side by side." }' +
    ',{"Name":"Exercise6","instruction":"Change the Direwolves list to use Trebuchet MS font" }' +
    ',{"Name":"Exercise6","instruction":"Change the size of the Character names list to 1.3 emAdd a dotted border to the direwolves ul element" }' +

    ',{"Name":"Exercise7","instruction":"In your index.html page add a script tag in the head element" }' +
    ',{"Name":"Exercise7","instruction":"Add a variable called myFavGOTChar and assign it a string literal value of any Game of Thrones character you wish" }' +
    ',{"Name":"Exercise7","instruction":"Create a function cal-led checkMyFavChar that accepts one parameter and performs the following items:" }' +
    ',{"Name":"Exercise7","instruction":"Add an if statement that checks if the parameter value is -Tyrion Lannister-. If it is, then alert the user any message you wish." }' +
    ',{"Name":"Exercise7","instruction":"Add an else if statement that checks if the parameter value is -Jon Snow-.  If it is, then alert the user any message you wish." }' +
    ',{"Name":"Exercise7","instruction":"Add an else statement that will display a default message if the first two conditions are not met." }' +
    ',{"Name":"Exercise7","instruction":"Call the checkMyFavChar function and pass it the myFavGOTChar variable" }' +
    ',{"Name":"Exercise7","instruction":"Verify the appropriate alert appears based on the value you set for myFavGOTChar" }' +


    ',{"Name":"Exercise8","instruction":"Add a media query to resize the width of the body to 320px whenever the width of the window is larger than 320px." }' +
    ',{"Name":"Exercise8","instruction":"Add another media query so that all of the CSS from Exercise 6 only apply to screens larger than 800px." }' +
    ',{"Name":"Exercise8","instruction":"Set the viewport to have the width of the page to follow the screen-width of the device." }' +
    ',{"Name":"Exercise8","instruction":"In your houses.html page, use a pseudo-element selector to make the 3rd td element of each table row have a background color of green" }' +


    ',{"Name":"Exercise9","instruction":"Remove any previous Javascript from the index.html documentCreate a subfolder called scripts and create a new index.js file inside of the subfolder" }' +
    ',{"Name":"Exercise9","instruction":"Link the index.js file to the index.html documentCreate a button on the page with the text -New List-" }' +
    ',{"Name":"Exercise9","instruction":"Create a click event handler that will: " }' +
    ',{"Name":"Exercise9","instruction":"Put all of  the GOT Characters into an array using the getElementById to get the gotChars div element, and the getElementsByTag function on the gotChars element to get each character" }' +
    ',{"Name":"Exercise9","instruction":"Add a new character to the end of the array "}' +
    ',{"Name":"Exercise9","instruction":"Show the new array of characters inside of a new div on the index.html page" }' +

    ',{"Name":"Exercise10","instruction":"Add a link to JQuery to your index.html page" }' +
    ',{"Name":"Exercise10","instruction":"Add a document ready function that writes to the console." }' +
    ',{"Name":"Exercise10","instruction":"log a message -The page has loaded!-" }' +
    ',{"Name":"Exercise10","instruction":"Add a textbox and button to your index.html page" }' +
    ',{"Name":"Exercise10","instruction":"When the button is clicked, add the value from the textbox to the list of direwolves</li>" }' +


    ',{"Name":"Exercise11","instruction":" Add bootstrap to all of your GOT Character html pages" }' +
    ',{"Name":"Exercise11","instruction":"Change the table on the houses.html from a table to a bootstrap grid with each div 4 columns wide for an sm screen or larger" }' +
    ',{"Name":"Exercise11","instruction":"Remove all of the javascript code in index.js" }' +
    ',{"Name":"Exercise11","instruction":"Use bootstrap to make the nav tag on your index.html page a bar that runs across the top of your page with links that run horizontally across the nav bar" }' +
    ',{"Name":"Exercise11","instruction":"Add an image to the anchor tag in your index.html document that links to the HBO game of thrones page, and make it responsive." }' +


    ',{"Name":"Exercise12","instruction":"Create a new dragons.html page with a title and header of -GOT Dragons-" }' +
    ',{"Name":"Exercise12","instruction":"In a separate dragons.js file, create a object called Dragon with a constructor function that assigns values to the following properties on the Dragon:ColorSizeNameSrc" }' +
    ',{"Name":"Exercise12","instruction":"Create a variable called newDragon and make a new dragon from the constructor function that was created in the first step.  " }' +
    ',{"Name":"Exercise12","instruction":"Pass in an image location as the src. " }' +
    ',{"Name":"Exercise12","instruction":"Create another variable called myDragons and assign it an array of 3 more dragons" }' +
    ',{"Name":"Exercise12","instruction":"Link your dragon.js file to your dragon.html file</li>" }' +


    ',{"Name":"Exercise13","instruction":"Using the array of dragons from the previous exercise do the following:Iterate over the array using a for loop with an indexer of i.  " }' +
    ',{"Name":"Exercise13","instruction":"Within the loop write the currently indexed dragon to the console window.Iterate over the array using a for-of loop.  " }' +
    ',{"Name":"Exercise13","instruction":"Within the loop write the current dragon to the console window." }' +
    ',{"Name":"Exercise13","instruction":"Iterate over each dragon using the forEach method on the myDragons array.  " }' +
    ',{"Name":"Exercise13","instruction":"Pass in a function to the forEach method that will write each dragon to the console window." }' +
    ',{"Name":"Exercise13","instruction":"Create a function that takes a dragon as a parameter and writes it to the console window" }' +
    ',{"Name":"Exercise13","instruction":"Modify each of the array iterator code blocks to use the new function instead of writing to the console window themselves" }' +


    ',{"Name":"Exercise14","instruction":"In your dragons.js file, use jQuery and Bootstrap to create 3 div’s on your dragons.html (each div should be 4 cols wide) with the following myDragons array information:" }' +
    ',{"Name":"Exercise14","instruction":"Use dl, dt, and dd tags to add the name, size, and color of the dragon" }' +
    ',{"Name":"Exercise14","instruction":"Use the img tag and use the src property of the dragon to set the src attribute of the image" }' +
    ',{"Name":"Exercise14","instruction":"Make sure the image fills the width of the divExtra credit for making the image a thumbnail with boostrap" }' +


    ',{"Name":"Exercise15","instruction":"Add a button to your dragons.html page with the text -Show Dragons-" }' +
    ',{"Name":"Exercise15","instruction":"Using jQuery, make the divs with your dragons appear when -Show Dragons- button is clicked and change the text of the button to -Hide Dragons-" }' +
    ',{"Name":"Exercise15","instruction":"Using jQuery, make the divs with your dragons disappear when the -Hide Dragons- button is clicked and change the text of the button to -Show Dragons-" }' +

    ']} ';

function instructions(iNumIn, strInstructionIn) {
    iNum : iNumIn;
    strInstruction: strInstructionIn;
}

function exercise(exNumIn, lstOfInstructions, extitle) {
    exNum: exNumIn;
    lstOfInstructions = lstOfInstructionsIn;
    extitle: extitleIn;
}

function initiateData() {
    let obj = JSON.parse(ExerciseData);
    let strExerciseSeperator = '';
    let strExerciseName = "";
    let strLineSeperator = '<br/>';
    
    var strInstructionsForAllExercises = "";
    let strInstructionsForOneExercise = "";
    for (i = 0; i < obj.Exercices.length; i++) {
        if (strExerciseName.toLowerCase() != obj.Exercices[i].Name.toLowerCase()) {
            strExerciseName = obj.Exercices[i].Name;
            strInstructionsForAllExercises += strInstructionsForOneExercise;

            strInstructionsForAllExercises += strExerciseSeperator + '<h2>'+ strExerciseName + '</h2>';
            strInstructionsForOneExercise = "";
        }
        strInstructionsForOneExercise += obj.Exercices[i].instruction + strLineSeperator;
        
    }
    let strInstructionsForLastExercise = strInstructionsForOneExercise;
    document.getElementById("demo").innerHTML = strInstructionsForAllExercises + strInstructionsForLastExercise;

}