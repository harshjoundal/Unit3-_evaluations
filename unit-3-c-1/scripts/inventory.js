
let products = JSON.parse(localStorage.getItem('products'));
console.log(products);

function display(data){

    data.forEach(function(ele,ind){
        console.log(ele,ind);

        let card = document.createElement('div');
        card.className = 'card';

        let image = document.createElement('img');
        image.src = ele.image;

        let type = document.createElement('p');
        type.innerText = ele.type

        let desc = document.createElement('p');
        desc.innerText = ele.desc

        let price = document.createElement('p');
        price.innerText = 'Rs.' + ele.price;

        let remove_ele = document.createElement('Button');
        remove_ele.id ='remove_product';
        remove_ele.innerText = 'Remove';

        remove_ele.addEventListener('click',function(event){
            data.splice(ind,1);

            localStorage.setItem('products',JSON.stringify(data));
            window.location.reload()
            
        })



        card.append(image,type,desc,price,remove_ele);

        document.querySelector('#all_products').append(card)

    })
}

display(products)


document.querySelector('#add_more_product').addEventListener('click',function(event){
    window.location.href = './index.html';
})

