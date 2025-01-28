const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input')
const resultSpan = document.getElementById('result')


const checkingPalindrome = (text) =>{
    if (text.replaceAll(/[\s_,.!?+;:\\/()-]/g, '').split('').reverse().join('').toUpperCase() === text.replaceAll(/[\s_,.!?+;:\\/()-]/g,'').toUpperCase()){
        resultSpan.innerText = `${text} is a palindrome`;
    }else {
        resultSpan.innerText = `${text} is not a palindrome`;
    }
}

checkBtn.addEventListener("click", () => {
    if(textInput.value.trim() === ""){
        window.alert("Please input a value");
    } else {
        checkingPalindrome(textInput.value.trim());
    }
});


