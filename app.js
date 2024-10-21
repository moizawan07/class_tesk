var arr = [];


function signUp(){

    let obj = {
        namee   : document.getElementById("firstname").value,
        surname : document.getElementById("surname").value,
        email   : document.getElementById("Email").value,
        pass    : document.getElementById("Pass").value
    }

    arr.push(obj)
}
console.log(arr);



