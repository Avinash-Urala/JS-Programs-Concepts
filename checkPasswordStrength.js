function checkPasswordStrength(password) {
    let strength = 0;
    if(password.split('').length < 8) {
        strength++;
    }  
    if(!/[a-z]/.test(password)) {
        strength++;
    } 
    if(!/[A-Z]/.test(password)) {
        strength++;
    } 
    if(!/[0-9]/.test(password)) {
        strength++;
    }

    if(!/[^a-zA-Z0-9]/.test(password)) {
        strength++;
    }

    return strength;
}

console.log(checkPasswordStrength('Password@123'))