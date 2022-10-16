const form = document.getElementById ('form') ;
const email = document.getElementById ('email') ;

form.addEventListener ('submit', e=> {
    e.preventDefault () ;
    validateInputs ();
})


const setError = (element, message) => {
    const inputmail = element.parentElement ;
    const errorDisplay = inputmail.querySelector ('.error') ;

    errorDisplay.innerText = message ;
    inputmail.classList.add ('error') ;
    inputmail.classList.remove ('success') ;

}

const setSuccess = element => {
    const inputmail = element.parentElement ;
    const errorDisplay = inputmail.querySelector ('.error') ;

    errorDisplay.innerText = '' ;
    inputmail.classList.remove ('error') ;
    inputmail.classList.add ('success') ;

}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const validateInputs = () => {
    const emailValue = email.value.trim () ;

    if(emailValue === '') {
        setError (email, 'please enter email') ;
    } 
    else if (!isValidEmail (emailValue)) {
        setError (email, 'check your email please') ;
    }
    else{
        setSuccess (email) ;
    }
}