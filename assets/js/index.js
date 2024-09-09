const scriptURL = 'https://script.google.com/macros/s/AKfycbwRtJwtH9GhuszjRdGKzed2mc9BaLBWa1aDzxecdcG-2lYrDuA3ibsZbkXPZMg6xE47/exec';
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
    form.reset();
    alert("Message Sent Succesfully!👍🎉");
});

// let myform=document.getElementById("my-form");
// let btn=document.getElementById("submit-btn");
// btn.addEventListener("click",()=>{
//     form.reset();
// });