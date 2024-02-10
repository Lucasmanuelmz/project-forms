
let button = document.querySelector('button');


button.addEventListener('click',(e) => {
    let firstName = document.querySelector(`#first-name`).value;
    let lastName = document.querySelector(`#last-name`).value;
    let email = document.querySelector(`#email`).value;
    let telphone = document.querySelector('#tel').value;
    let passWord = document.querySelector('#password');
    let confirmPass = document.querySelector('#confirm-password');
    let pass = passWord.value;
    let conf = confirmPass.value;
    let text = document.querySelector('.text-infor');
    let validEmail = /\S+@\S+\.\S+/ ;

    if(firstName !== `` && 
    lastName !== `` && email !== `` 
    && telphone !== `` && pass !== `` 
    && conf !== '' ) { 
        if(pass === conf) {
        text.textContent = 'You have successfully subscribed!';
        text.style.cssText =`background-color: #ddd; 
        color: green; 
        padding: 5px; 
        width: 20rem;`;
       } else {
        text.textContent = 'Your password is different from the first one!';
        text.style.cssText =`background-color: #ddd; 
        color: #ff0000; 
        padding: 5px; 
        width: 20rem;`;
       } 
    } else if(firstName === ``) {
        text.textContent = `The firstname field is empty!`;
        text.style.cssText =`background-color: #ddd; 
        color: #f00000; 
        padding: 5px; 
        width: 20rem;`;
    } else if(lastName === ``) {
        text.textContent = `The lastname field is empty!`;
        text.style.cssText =`background-color: #ddd; 
        color: #f00000; 
        padding: 5px; 
        width: 20rem;`;
    }else if(email === `` ||!validEmail.test(email)) {
        text.textContent = `The email field is empty!`;
        text.style.cssText =`background-color: #ddd; 
        color: #f00000; 
        padding: 5px; 
        width: 20rem;`;
        
    }else if(pass === ``) {
        text.textContent = `The password field is empty!`;
        text.style.cssText =`background-color: #ddd; 
        color: #f00000; 
        padding: 5px; 
        width: 20rem;`;
    } else if(conf === ``) {
        text.textContent = `Confirm you password!`;
        text.style.cssText =`background-color: #ddd; 
        color: #f00000; 
        padding: 5px; 
        width: 20rem;`;
    } else if(telphone === ``) {
        text.textContent = `The fone number field is empty!`;
        text.style.cssText =`background-color: #ddd; 
        color: #f00000; 
        padding: 5px; 
        width: 20rem;`;
    };
    e.preventDefault()
});