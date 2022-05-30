// Add the coffee to local storage with key "coffee"
let bucket = JSON.parse(localStorage.getItem('coffee')) || [];

async function get_data(){
    
    const url = 'https://masai-mock-api.herokuapp.com/coffee/menu';
    let res = await fetch(url)
    
    let data = await res.json();
    data = data.menu.data;
    // console.log(data);
    display(data);


}
get_data()

function display(data){
    
    data.forEach(function(ele,ind){

        let card = document.createElement('div');
        card.className ='card';

        let image =document.createElement('img');
        image.className ='image';
        image.src = ele.image;
        
        let title = document.createElement('p');
        title.className = 'title';
        title.innerText = ele.title;

        // let description = document.createElement('p');
        // description.className ='description';
        // description.innerText = ele.description;

        // let ingredients = document.createElement('p');
        // ingredients.className = 'ingredients';
        // ingredients.innerText = `Ingredients: ${ele.ingredients.join(',')}`;

        // let id = document.createElement('p');
        // id.className = 'id';
        // id.innerText= `ID: ${ele.id}`;

        let price = document.createElement('p');
        price.className ='price';
        price.innerText = ele.price;

        let add = document.createElement('button');
        add.id ='add_to_bucket';
        add.innerText ='Add to bucket';
        add.addEventListener('click',function(event){
            bucket.push(ele);
            localStorage.setItem('coffee',JSON.stringify(bucket));

            document.querySelector('#coffee_count >p').innerText = bucket.length;
        })


        card.append(image,title,price,add);

        document.getElementById('menu').append(card)
    })
    
}
