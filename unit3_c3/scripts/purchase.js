let user = JSON.parse(localStorage.getItem('user'));
document.getElementById('wallet_balance').innerText =user.wallet;

let purchase = JSON.parse(localStorage.getItem('purchase'));


function append(data){
    
    data.forEach(function(ele){
        let card = document.createElement('div');
        card.className = 'voucher';

        let image = document.createElement('img');
        image.className = 'image';
        image.src = ele.image;

        let name = document.createElement('p');
        name.className ='name';
        name.innerText = ele.name;

        let price = document.createElement('p');
        price.className = 'price';
        price.innerText = ele.price;

    

        card.append(image,name,price);

        document.getElementById('purchased_vouchers').append(card);

    })
}

append(purchase)