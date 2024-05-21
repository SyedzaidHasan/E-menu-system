let navbar = document.querySelector('.menu-navigation').querySelectorAll('a');

navbar.forEach(element => {
    element.addEventListener("click",function(){
        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
});


const product = [
    {
        id: 1,
        name: 'Veg Manchurian',
        image: 'asset 1.jpg',
        price: 149
    },
    {
        id: 2,
        name: 'Hara Bhara Kabab',
        image: 'asset 2.jpg',
        price: 149
    },
    {
        id: 3,
        name: 'Chilli Paneer Dry',
        image: 'asset 3.jpg',
        price: 189
    },
    {
        id: 4,
        name: 'Paneer Manchurian',
        image: 'asset 4.jpg',
        price: 189
    },
    {
        id: 5,
        name: 'Paneer Tikka',
        image: 'asset 5.jpg',
        price: 189
    },
    {
        id: 6,
        name: 'Veg Momos',
        image: 'asset 6.jpg',
        price: 189
    },
    {
        id: 7,
        name: 'Chola Bhatura',
        image: 'asset 7.jpg',
        price: 149
    },
    {
        id: 8,
        name: 'Chana Paneer',
        image: 'asset 8.jpg',
        price: 149
    },
    {
        id: 9,
        name: 'Kadai Paneer',
        image: 'asset 9.jpg',
        price: 189
    },
    {
        id: 10,
        name: 'Matar Paneer',
        image: 'asset 10.jpg',
        price: 189
    },
    {
        id: 11,
        name: 'Paneer Lababdar',
        image: 'asset 11.jpg',
        price: 189
    },
    {
        id: 12,
        name: 'Palak Paneer',
        image: 'asset 12.jpg',
        price: 189
    },
    {
        id: 13,
        name: 'Chicken Masala',
        image: 'asset 13.jpg',
        price: 149
    },
    {
        id: 14,
        name: 'Butter Chicken',
        image: 'asset 14.jpg',
        price: 149
    },
    {
        id: 15,
        name: 'Chicken Do Pyaza ',
        image: 'asset 15.jpg',
        price: 189
    },
    {
        id: 16,
        name: 'Chicken Bhuna',
        image: 'asset 16.jpg',
        price: 189
    },
    {
        id: 17,
        name: 'Mutton Curry',
        image: 'asset 17.jpg',
        price: 189
    },
    {
        id: 18,
        name: 'Egg Curry',
        image: 'asset 18.jpg',
        price: 189
    },
    {   
        id: 19,
        name: 'Panner Paratha',
        image: 'asset 19.jpg',
        price: 149
    },
    {
        id: 20,
        name: 'Lachha Paratha',
        image: 'asset 20.jpg',
        price: 149
    },
    {
        id: 21,
        name: 'Methi Paratha',
        image: 'asset 21.jpg',
        price: 189
    },
    {
        id: 22,
        name: 'Butter Naan',
        image: 'asset 22.jpeg',
        price: 189
    },
    {
        id: 23,
        name: 'Aloo Paratha',
        image: 'asset 23.jpg',
        price: 189
    },
    {
        id: 24,
        name: 'Rumali Roti',
        image: 'asset 24.jpg',
        price: 189
    },
    {
        id: 25,
        name: 'Cupcake',
        image: 'asset 25.jpg',
        price: 149
    },
    {
        id: 26,
        name: 'Chocolate Cake',
        image: 'asset 26.jpg',
        price: 149
    },
    {
        id: 27,
        name: 'Cheese Cake',
        image: 'asset 27.jpg',
        price: 189
    },
    {
        id: 28,
        name: 'Strawberry Jello Pie',
        image: 'asset 28.jpg',
        price: 189
    },
    {
        id: 29,
        name: 'Strawberry Cake',
        image: 'asset 29.jpg',
        price: 189
    },
    {
        id: 30,
        name: 'Cookies',
        image: 'asset 30.jpg',
        price: 189
    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]

    let i=0;


document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchData)
        )

    })
    
    displayItem(filteredData)
                    
});



    




const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item)=>{
        let{image, name, price} = item;
        return(
            `<div class="box">
                <div class="img-box">
                    <img src="assets/${image}" class="images">
                </div>
                <div class="bottom">
                    <p>${name}</p>
                    <h2>Rs. ${price}</h2>` + 
                    "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                `</div>
            </div>`
        )
    }).join(' ');
};

displayItem(categories);


var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rs. "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, name, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rs. "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src="assets/${image}">
                </div>
                <p>${name}</p>
                <h2 style='font-size: 12px;'>Rs. ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');

        document.getElementById('lower-sidebar').innerHTML = 
        `<div class="continue-button">
            <h3 id="total" class="total">Rs. ${total}.00</h3>
            <a href="/Payment Gateway/card.html" class="continue">Continue</a>
        </div>`
    }
}
