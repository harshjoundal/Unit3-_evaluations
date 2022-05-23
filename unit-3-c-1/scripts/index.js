//store the products array in localstorage as "products"

let form = document.querySelector('#products');

let product_data = JSON.parse(localStorage.getItem('products')) || [];

form.addEventListener('submit',function(event){
    event.preventDefault();

    let data ={
        type : form.type.value,
        desc : form.desc.value,
        price : form.price.value,
        image :form.image.value
    }
    product_data.push(data);

    localStorage.setItem('products',JSON.stringify(product_data));
    window.location.reload()

    console.log(product_data);
})


document.querySelector('#show_products').addEventListener('click',function(event){
    window.location.href ='./inventory.html'
})
