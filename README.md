# rpgenerator
1. Added html for random password generator 
2. Within the body of the HTML file, the following html has been        added to a container 
  1. Heading: Password Generator 
  2. Between lines 10-18, a text area for the resulting random password with a copy text button underneath to allow the user to copy and paste the password. This button is linked to a function in the JavaScript as outlined belowed. 
  3. Between lines 19-23, an input setting for the length the user needs. 
  4. Between lines 24-27, a checkbox for uppercase letters was added 
  5. Between lines 28-31, a checkbox for lowercase letters was added
  6. Between lines 32-35, a checkbox for numbers was added
  7. Between lines 36-39, a checkbox for symbols was added
3. Within the body there is a link to the JavaScript file using          source equals .script.js
   1. Between the lines 2-9 in the JavaScript file, the following variables were created using API. 
        1.  variable for result using the node 
        2.  variable for length 
        3.  variable for uppercase letters 
        4.  variable for lowercase letters
        5.  variable for numbers 
        6.  variable for symbols 
        7.  variable for generate 
        8. variable for clipboard 
    2. Between lines 12-18, the functions needed to use the copy feature were added 
        1. The function takes the element created in the results, selects it, copies it, and alerts the user that the password has been copied. 
    2. Between lines 21-26, the function called randomFunc that has the object random password within it was created. 
        1. The object within the function is broken down into 4 parts, followed by the command getRandom
            1. lower for lowercase letters
            2. upper for uppercase letters 
            3. number 
            4. symbols 
    3. Between lines 28-33, an eventListener that activates when clicked was created to generator the random password. 
        1. This eventListener takes into considersation which checkboxes were marked to produce the password, using the .checked 
        2. When the event activates, it produces the password using the variables describes above and the using the array lower, upper, number, symbol on repeat until the length the user selected is reached. 
    5. Between lines 47-52, a for loop was created to limit the password to the length entered by the user. It uses the object as described above. 
    6. Between lines 54-56, the variable final password was created and limited from 0 to the length of the array. 
    7. Between lines 58-73, functions for each type of character was created using a string, math random, math floor, and limits for each pieces. For example, a random lower letter is limited by 26 since there are 26 letters in the alphabet. 

     
