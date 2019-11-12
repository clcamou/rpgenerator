# rpgenerator
1. Added html for random password generator 
2. Within the body of the file, the following html has been added
    A. added a container 
        1. Within that container there the following 
            a. result-container with a clipboard button 
            b. input setting for the length the user wants (between 8-128)
            c. a checkbox for uppercase letters 
            d. a checkbox for lowercase letters 
            e. a checkbox for numbers 
            f. a checkbox for symbols 
            g. a generate password button 
3. Within the body of the file, the following Javascript has been added and paired with the html in the above text. 
            a. variable for result 
            b. variable for length 
            c. variable for uppercase letters 
            d. variable for lowercase letters
            e. variable for numbers 
            f. variable for symbols 
            g. variable for generate 
            h. variable for clipboard 
                1. clipboard event that is activitated with a click 
                    a. variable for text area 
                    b. variable for password results 
                    c. These allow the user to copy and paste the password
            i. variable for a random function to produce lowercase letters, uppercase letters, numbers, and symbols. 
4. Between lines 75-80
    A. There is an event triggered with a click that will create a random password depending on which checkboxes have been selected. 
5. Between lines 82-88
    A. These section is paired with the above triggered event to produce the random in the order of lower, upper, number, and symbol. 
6. Between lines 90-92
7. Between lines 95-100, 
    There is a for loop that 
