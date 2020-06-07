// DOM's element
const pswSize = document.querySelector('.psw-size');
const specialChar = document.querySelector('.special-char');
const numbers = document.querySelector('.number');
const caps = document.querySelector('.caps');
const generatorButton = document.querySelector('.generator');
const displayPsw = document.querySelector('.password');
const passwordReturn = document.querySelector('.password-return');
const hiddenPsw = document.querySelector('.hidden-psw');
const saveButton = document.querySelector('.save');
const infoPswSize = document.querySelector('small');

// Variables
const alphabet = "abcdefghijklmnopqrstuvwxz";
const capsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberStr = "0123456789";
const specialCharStr = "@$£+!?#&({[]})";
let password = '';

// Functions
const getRandomIndex = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const generatePswd = () => {

    // Verify that entered password's size is between 8 and 30
    if(!pswSize.value || pswSize.value < 8 || pswSize.value > 30) {
        infoPswSize.classList.add('wrongSize');
        return;
    }

    if(infoPswSize.classList.contains('wrongSize')) {
        infoPswSize.classList.remove('wrongSize');
    }
    
    // Verify wich checkbox has been checked or not 
    if(caps.checked) {
        includeCaps = true;    
    } else {
        includeCaps = false;
    }
    if(numbers.checked) {
        includeNumbers = true;
    } else {
        includeNumbers = false;
    }
    if(specialChar.checked) {
        includeSpeChar = true;
    } else {
        includeSpeChar = false;
    }

    // Set password's value depending on checked settings 
    if(includeCaps && includeNumbers && includeSpeChar) {
        const numberOfIncludes = Math.floor(pswSize.value / 4);

        for(let i = 0; i < numberOfIncludes; i++) {
            password += capsStr.charAt(getRandomIndex(26));
        }
        for(let i = 0; i < numberOfIncludes; i++) {
            password += numberStr.charAt(getRandomIndex(10));
        }
        for(let i = 0; i < numberOfIncludes; i++) {
            password += specialCharStr.charAt(getRandomIndex(14));
        }
        for(let i = 0; i < (pswSize.value - (numberOfIncludes * 3)); i++) {
            password += alphabet.charAt(getRandomIndex(26));
        }
    }

    if(includeCaps && includeNumbers && !includeSpeChar) {
        const numberOfIncludes = Math.floor(pswSize.value / 3);

        for(let i = 0; i < numberOfIncludes; i++) {
            password += capsStr.charAt(getRandomIndex(26));
        }
        for(let i = 0; i < numberOfIncludes; i++) {
            password += numberStr.charAt(getRandomIndex(10));
        }

        for(let i = 0; i < (pswSize.value - (numberOfIncludes * 2)); i++) {
            password += alphabet.charAt(getRandomIndex(26));
        }
    }

    if(includeCaps && includeSpeChar && !includeNumbers) {
        const numberOfIncludes = Math.floor(pswSize.value / 3);

        for(let i = 0; i < numberOfIncludes; i++) {
            password += capsStr.charAt(getRandomIndex(26));
        }
        for(let i = 0; i < numberOfIncludes; i++) {
            password += specialCharStr.charAt(getRandomIndex(14));
        }

        for(let i = 0; i < (pswSize.value - (numberOfIncludes * 2)); i++) {
            password += alphabet.charAt(getRandomIndex(26));
        }
    }

    if(!includeCaps && includeSpeChar && includeNumbers) {
        const numberOfIncludes = Math.floor(pswSize.value / 3);

        for(let i = 0; i < numberOfIncludes; i++) {
            password += numberStr.charAt(getRandomIndex(10));
        }
        for(let i = 0; i < numberOfIncludes; i++) {
            password += specialCharStr.charAt(getRandomIndex(14));
        }

        for(let i = 0; i < (pswSize.value - (numberOfIncludes * 2)); i++) {
            password += alphabet.charAt(getRandomIndex(26));
        }
    }

    if(includeCaps && !includeSpeChar && !includeNumbers) {
        const numberOfIncludes = Math.floor(pswSize.value / 2);

        for(let i = 0; i < numberOfIncludes; i++) {
            password += capsStr.charAt(getRandomIndex(26));
        }

        for(let i = 0; i < (pswSize.value - numberOfIncludes); i++) {
            password += alphabet.charAt(getRandomIndex(26));
        }
    }

    if(!includeCaps && includeSpeChar && !includeNumbers) {
        const numberOfIncludes = Math.floor(pswSize.value / 2);

        for(let i = 0; i < numberOfIncludes; i++) {
            password += specialCharStr.charAt(getRandomIndex(14));
        }

        for(let i = 0; i < (pswSize.value - numberOfIncludes); i++) {
            password += alphabet.charAt(getRandomIndex(26));
        }
    }

    if(!includeCaps && !includeSpeChar && includeNumbers) {
        const numberOfIncludes = Math.floor(pswSize.value / 2);

        for(let i = 0; i < numberOfIncludes; i++) {
            password += numberStr.charAt(getRandomIndex(10));
        }

        for(let i = 0; i < (pswSize.value - numberOfIncludes); i++) {
            password += alphabet.charAt(getRandomIndex(26));
        }
    }

    if(!includeCaps && !includeSpeChar && !includeNumbers) {
        for(let i = 0; i < pswSize.value; i++) {
            password += alphabet.charAt(getRandomIndex(26));
        }
    } else {
        // Function to shuffle $password
    }


    displayPsw.textContent = password;
    generatorButton.textContent = "Générez un nouveau mdp";
    passwordReturn.classList.remove('hide');

    /* Reset password value to be able to generate a new one 
    without adding new value to the previous one */
    password = '';
}

// Event 
generatorButton.addEventListener('click', generatePswd);

