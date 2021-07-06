// selectors
const form = document.getElementById('form')
const inputEmail = document.getElementById('inputEmail')
const submitButton = document.getElementById('submitButton')
const errorIcon = document.querySelector('.form__email--eror')
const statusText = document.querySelector('.status-text')

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    setInterval(() => {
        checkEmail()
        clearInterval()
    }, 100);

    
    
})


// functions

// function to check if an input field is empty
const isRequired = value => value === '' ? false : true

// function to check the validity of an email
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const showError = (message) =>{
    inputEmail.classList.toggle('input-error-border')
    statusText.classList.toggle('hidden')
    statusText.textContent = message
    errorIcon.classList.toggle('hidden')
    inputEmail.value = ""
    
}

const setSuccess = () =>{
    inputEmail.classList.toggle('input-error-border')
    statusText.classList.toggle('hidden')
    errorIcon.classList.toggle('hidden')
    inputEmail.value = ""
}

const checkEmail = () =>{
    let valid = false
    const emailValue = inputEmail.value.trim()

    if(!isRequired(emailValue)){
        showError('Email cannot be blank')
        if(isRequired(emailValue)){
            setSuccess()
        }
    } 
    
    else if(!isEmailValid(emailValue)){
        showError('Please provide a valid email')     
        if(isEmailValid(emailValue)){
            setSuccess()
        }
    } 
    
    else{
        setSuccess()
        valid = true
    }

    return valid
}


