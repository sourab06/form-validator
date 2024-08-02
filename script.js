const submitbutton = document.getElementById('form');
function formdata(e){
e.preventDefault();
console.log(e);
}
submitbutton.addEventListener('submit',formdata);