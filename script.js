const submitbutton = document.getElementById('form');
const finalmessage =document.getElementById('finalmessage');

let isvalidate=false;
function storedata(){
    var data={
        name: submitbutton.name.value,
        phone:submitbutton.phonenumber.value,
        email:submitbutton.email.value,
        website:submitbutton.website.value,
        password:submitbutton.password.value,
    }
    console.log(data);
}
function validateform(){
    isvalidate=submitbutton.checkValidity();
    // console.log(isvalidate);
    if(isvalidate == false){
    finalmessage.textContent='Please fill out all fields';
    // finalmessage.style.text-align ='center';
    finalmessage.style.color='red';
    }
    else{
        finalmessage.textContent='Thank you';
    finalmessage.style.color='black';
    storedata();
    }
}
function formdata(e){
e.preventDefault();
// console.log(e);
if(e.srcElement[4].value == e.srcElement[5].value){
validateform();
}
else
{
    finalmessage.textContent='Passwords donot match';
    // finalmessage.style.text-align ='center';
    finalmessage.style.color='red';
}
}

submitbutton.addEventListener('submit',formdata);