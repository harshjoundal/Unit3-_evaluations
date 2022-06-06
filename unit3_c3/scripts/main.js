
let form = document.getElementById('submit');

form.addEventListener('click',function(event){
    event.preventDefault();
    let a ={
      name : document.getElementById('name').value,
      email : document.getElementById('email').value,
      address : document.getElementById('address').value,
      wallet : document.getElementById('amount').value,

    }
    console.log(a);
    localStorage.setItem('user',JSON.stringify(a));
    window.location.reload();
})

