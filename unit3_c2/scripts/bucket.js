// On clicking remove button the item should be removed from DOM as well as localstorage.

let data = JSON.parse(localStorage.getItem('coffee'));

console.log(data);

function display(data){
    data.forEach(function(ele,ind){
        
        let card = document.createElement('div');
        card.className ='card';

        let image = document.createElement('img');
        image.className = 'image';
        image.src = ele.image;

        let title = document.createElement('p');
        title.className ='title';
        title.innerText = ele.title;

        let price = document.createElement('p');
        price.className = 'price';
        price.innerText = ele.price;

        let remove_el = document.createElement('button');
        remove_el.id ='remove_coffee';
        remove_el.innerText = 'Remove';

        remove_el.addEventListener('click',function(event){
            remove_el.parentNode.remove()
            data.splice(ind,1);
            localStorage.setItem('coffee',JSON.stringify(data));
            window.location.reload();
        })


        
        card.append(image,title,price,remove_el);

        document.getElementById('bucket').append(card);




    })
}

display(data);

let total = 0;
for(let i = 0;i < data.length;i++){
    total += data[i].price;
}
console.log(total)

document.getElementById('total_amount').innerText = total;


document.querySelector('#confirm_checkout').addEventListener('click',function(event){
    window.location.href = './checkout.html';
})
