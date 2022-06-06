let user = JSON.parse(localStorage.getItem('user'));
console.log('user:', user.wallet);

let balance = document.getElementById('wallet_balance').innerText =user.wallet;




async function getdata(){
    
    const url ='https://masai-vouchers-api.herokuapp.com/api/vouchers';

    let res = await fetch(url);

    let data = await res.json();
    data = data[0].vouchers;
    // console.log(data);
    append(data)

}

getdata();

let purchase = JSON.parse(localStorage.getItem('purchase')) || [];

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

        let buy = document.createElement('button');
        buy.className = 'buy_voucher';
        buy.innerText='Buy'

        buy.addEventListener('click',function(event){
            if(user.wallet >= ele.price){
                alert("Hurray! purchase successful")
                purchase.push(ele);
                localStorage.setItem('purchase',JSON.stringify(purchase));
                
                user.wallet = user.wallet - ele.price;
                localStorage.setItem('user',JSON.stringify(user));
                
                window.location.reload()
            }
            else{
                alert("Sorry! insufficient balance");
            }

        })




        card.append(image,name,price,buy);

        document.getElementById('voucher_list').append(card);

    })
}