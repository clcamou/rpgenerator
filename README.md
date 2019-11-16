# rpgenerator
1. Added html for random password generator 
2. Within the body of the HTML file, the following html has been added
    A. A container 
        1. Within that container there the following: 
            a. result-container with a clipboard button 
            b. input setting for the length the user wants (between 8-128)
            c. a checkbox for uppercase letters 
            d. a checkbox for lowercase letters 
            e. a checkbox for numbers 
            f. a checkbox for symbols 
            g. a generate password button 
    B. A link to the JavaScript file
        1. Created the following variables using API. 
            a. variable for result using the node 
            b. variable for length 
            c. variable for uppercase letters 
            d. variable for lowercase letters
            e. variable for numbers 
            f. variable for symbols 
            g. variable for generate 
            h. variable for clipboard 
        2. Created the function called randomFunc that has an object within it. 
            a. The object within the function is broken down into 4 parts, followed by the command getRandom
                1. lower (lowerCase) 
                2. upper (upperCase)
                3. number 
                4. symbols 
         3. Created an eventListenerr that activates when clicked to generate the password when the box is clicked *the button was created using bootstrap within the HTML*
            a. This eventListener takes into considersation which checkboxes were marked to produce the password, using the .checked 
            b. created a function that works within a specific scope to only get the results within the array and object. 
        4. Added the result textbox here to show the password once it is generated. 
        5. Created a conditional statement to return 
     
