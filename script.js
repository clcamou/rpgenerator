 //variables//
    var resultEl = document.getElementById('result');
    var lengthEl = document.getElementById('length');
    var uppercaseEl = document.getElementById('uppercase');
    var lowercaseEl = document.getElementById('lowercase');
    var numbersEl = document.getElementById('numbers');
    var symbolsEl = document.getElementById('symbols');
    var generateEl = document.getElementById('generate');
	var clipboard = document.getElementById('clipboard');
	
//Clipboard function 
 	function myFunction() {
		 var copyText = document.getElementById("result");
		 copyText.select();
		 document.execCommand("copy");
		 alert("Copied the text: " + copyText.value);
		 console.log("clicked the copy text");
	 }

//functions//
    var randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
	}

    generate.addEventListener('click', () => {
	var length = +lengthEl.value;
	var hasLower = lowercaseEl.checked;
	var hasUpper = uppercaseEl.checked;
	var hasNumber = numbersEl.checked;
	var hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
    });

    function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	var typesCount = lower + upper + number + symbol;
	var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

	if(typesCount === 0) {
	return 'Needs to be between 8-128';
	}

	for(let i=0; i<length; i+=typesCount) {
	    typesArr.forEach(type => {
	    const funcName = Object.keys(type)[0];
	    generatedPassword += randomFunc[funcName]();
	    });
    	}
	
	var finalPassword = generatedPassword.slice(0, length);
	    return finalPassword;
        }
    
    function getRandomLower() {
	    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
         }

    function getRandomUpper() {
	    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        }

    function getRandomNumber() {
	    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
         }   

    function getRandomSymbol() {
	    var symbols = '!@#$%^&*(){}[]=<>/,.'
	    return symbols[Math.floor(Math.random() * symbols.length)];
         }



	

      