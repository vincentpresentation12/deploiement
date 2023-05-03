
function name() {
    if (name)
        return name;
}

function surname() {
    if (surname)
        return surname;
}

function age() {
    if (age && age > 13)
     return age;
}

function email() {
    if (email)
        if(split(email, '@',) && split(email, '.com'))
            return email;
    else
        return console.log('email is not valid');
}
true
