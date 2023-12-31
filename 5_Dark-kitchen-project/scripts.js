const menu = [
    {
        name: "French fries",
        price: 4.00,
        categories: ["Vegetarian", "Finger Food", "Side Dish"],
        image: "images/frenchFries.jpg",
        description: "Crispy and delicious French fries, perfect for snacking."
    },
    {
        name: "Onion Rings",
        price: 5.00,
        categories: ["Vegetarian", "Finger Food", "Side Dish"],
        image: "images/onionRings.jpg",
        description: "Golden-brown and crunchy onion rings with a savory flavor."
    },
    {
        name: "Chicken Tenders",
        price: 7.50,
        categories: ["Finger Food"],
        image: "images/chickenTenders.jpg",
        description: "Tender and flavorful chicken tenders, a classic favorite."
    },
    {
        name: "Fried Shrimp",
        price: 10.00,
        categories: ["Main Course"],
        image: "images/friedShrimp.jpg",
        description: "Delicious fried shrimp, a seafood delight."
    },
    {
        name: "Fried Calamari",
        price: 11.00,
        categories: ["Appetizer"],
        image: "images/friedCalamari.jpg",
        description: "Savory fried calamari, a perfect appetizer."
    },
    {
        name: "Mozzarella Sticks",
        price: 6.50,
        categories: ["Appetizer", "Vegetarian"],
        image: "images/mozzarellaSticks.jpg",
        description: "Melted mozzarella sticks, a delightful vegetarian choice."
    },
    {
        name: "Fried Pickles",
        price: 5.50,
        categories: ["Vegetarian", "Appetizer", "Side Dish"],
        image: "images/friedPickles.jpg",
        description: "Crispy fried pickles, a unique and tasty appetizer."
    },
    {
        name: "Tempura",
        price: 12.00,
        categories: ["Appetizer"],
        image: "images/tempura.jpg",
        description: "Japanese-style tempura with a touch of seafood."
    },
    {
        name: "Egg Rolls",
        price: 4.50,
        categories: ["Appetizer"],
        image: "images/eggRolls.jpg",
        description: "Classic Chinese egg rolls, a great choice for appetizers."
    },
    {
        name: "Fried Spring Rolls",
        price: 4.00,
        categories: ["Appetizer", "Vegetarian"],
        image: "images/friedSpringRolls.jpg",
        description: "Vegetarian spring rolls with a crispy exterior."
    },
    {
        name: "Churros",
        price: 3.50,
        categories: ["Dessert"],
        image: "images/churros.jpg",
        description: "Sweet and delectable Spanish churros."
    },
    {
        name: "Donuts",
        price: 2.00,
        categories: ["Dessert"],
        image: "images/donuts.jpg",
        description: "Classic donuts, a delightful dessert choice."
    },
    {
        name: "Fried Oreos",
        price: 3.50,
        categories: ["Dessert"],
        image: "images/friedOreos.jpg",
        description: "Decadent fried Oreos for a delightful treat."
    },
    {
        name: "Fried Ice Cream",
        price: 5.00,
        categories: ["Dessert"],
        image: "images/friedIceCream.jpg",
        description: "A unique dessert with fried ice cream."
    },
    {
        name: "Pakoras",
        price: 4.50,
        categories: ["Appetizer", "Vegetarian"],
        image: "images/pakoras.jpg",
        description: "Indian-style pakoras with a vegetarian twist."
    },
    {
        name: "Hush Puppies",
        price: 3.50,
        categories: ["Side Dish"],
        image: "images/hushPuppies.jpg",
        description: "Classic hush puppies, a tasty side dish."
    },
    {
        name: "Fried Plantains",
        price: 4.00,
        categories: ["Side Dish"],
        image: "images/friedPlantains.jpg",
        description: "Savory fried plantains, a delicious side."
    }
];



menu.sort(function(a, b){return 0.5 - Math.random()});

const categories = [];
const cartList = [];
const r = document.querySelector(':root');
const menuDiv = document.querySelector('.menu');
const categoryList = document.querySelector('.category-list');
const btnAll = document.querySelector('#allButton');
const cart = document.querySelector('.cart-list');
const cartLink = document.querySelector('#cartLink');
const colorModeCheckbox = document.getElementById('colorModeCheckbox');

const getEuroAmount = (priceAmount) => {
    return "€" + Number(priceAmount).toFixed(2);
}

const makeCartItem = (element) => {

    const cartListItem = document.createElement('li');
    const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
    const cartMinus = document.createElement('button');
        cartMinus.textContent = "-";
        cartMinus.className = "cart-edit-button";
        cartMinus.addEventListener('click', () => {
            const findItem = cartList.find((cartItem) => cartItem.name === element.name);
            findItem.amount--;
            findItem.price -= element.price;
            
            if(findItem.amount === 0){
                cartList.pop(findItem);     
//Something is wrong with the updating of the price, probably need a big rework.
            }
            updateCart();
            
        });
    const cartItemAmount = document.createElement('p');
        cartItemAmount.textContent = element.amount;
    const cartPlus = document.createElement('button');
        cartPlus.textContent = "+";
        cartPlus.className = "cart-edit-button";
        cartPlus.addEventListener('click', () => {
            addToCart(element);
        });
    const cartItemName = document.createElement('p');
        cartItemName.textContent = element.name;
    const cartItemPrice = document.createElement('p');
        cartItemPrice.textContent = getEuroAmount(element.price);

    const cartLeft = document.createElement("div");
        cartLeft.className = 'cart-left';
    
    
    cartLeft.appendChild(cartMinus);
    cartLeft.appendChild(cartItemAmount);
    cartLeft.appendChild(cartPlus);
    cartLeft.appendChild(cartItemName);
    cartItem.appendChild(cartLeft);
    cartItem.appendChild(cartItemPrice);
    cartListItem.append(cartItem);
    cart.appendChild(cartListItem);
}

const updateCart = () => {
    cart.innerHTML = "";
    let totalPrice = 0;

    cartList.forEach(element => {
        makeCartItem(element);
        totalPrice += element.price;
    });

    const totalCartPrice = document.getElementById('totalCartPrice');
    totalCartPrice.textContent = getEuroAmount(totalPrice);
}

const addToCart = (item) => {
    const findItem = cartList.find((cartItem) => cartItem.name === item.name);

    if (!findItem) {
        const newItem = { amount: 1, name: item.name, price: item.price };
        cartList.push(newItem);
    } else {
        findItem.amount++;
        findItem.price += item.price;
    }

    updateCart();
}

const addCategory = (e) => {
    e.categories.forEach(cat => {
        const containsCat = categories.includes(cat);
        if(!containsCat){
            const categoryItem = document.createElement('li');
            categoryItem.className = "catItem";
            const catLink = document.createElement('button');
            catLink.type = "button";
            catLink.innerText = cat;
            catLink.className = "catButton";
            catLink.value = cat;
            catLink.addEventListener('click', (c) => {
                const listOfCategory = menu.filter((cat) => cat.categories.includes(c.target.value));
                menuDiv.innerHTML = "";
                listOfCategory.forEach(element => {
                    addMenuItem(element);
                });
            });
            categoryItem.appendChild(catLink);
            categoryList.appendChild(categoryItem);
            categories.push(cat)
        }
    });
}

const addMenuItem = (e) => {

    const newCard = document.createElement('div');
    newCard.className = 'card';

        const cardLeft = document.createElement('div');
        cardLeft.className = 'cardLeft';
            const cardName = document.createElement('h3');
            cardName.innerText = e.name;

            const cardDescription = document.createElement("p");
            cardDescription.innerText = e.description;

            const cardPrice = document.createElement('p');
            cardPrice.innerText = getEuroAmount(e.price);

        cardLeft.appendChild(cardName);
        cardLeft.appendChild(cardDescription);
        cardLeft.appendChild(cardPrice);

        addCategory(e);

        const cardRight = document.createElement('div');
        cardRight.className = 'cardRight';
            const cardImg = document.createElement('img');
            cardImg.className = 'cardImg';
            cardImg.src = e.image;
            cardImg.alt = "image of " + e.name;
        
        cardRight.appendChild(cardImg);

    newCard.appendChild(cardLeft);
    newCard.appendChild(cardRight);
    newCard.addEventListener('click', () => {addToCart(e)});

    menuDiv.appendChild(newCard);
}

const fillMenu = () => {
    menuDiv.innerHTML = "";
    menu.forEach(element => {
        addMenuItem(element);
    });
}

const toggleCart = () => {
    const currentCart = document.getElementById('cart');
    const emptyCart = document.getElementById('empty-cart');
    // if(cartList.length === 0){
    //     emptyCart.style.display = ('block');
    // } else {
    //     emptyCart.style.display = ('none');
    // }
    if(currentCart.style.display === 'none'){
        currentCart.style.display = 'block';
    } else {
        currentCart.style.display = 'none';
    }

}

const toggleColors = () => {
    // --color-primairy: white;
    // --color-secondairy: black;
    // --color-tertiary: #EF1E20;
    // --color-border: #a9a7a7;
    if(!colorModeCheckbox.checked){
    r.style.setProperty('--color-primairy', 'black');
    r.style.setProperty('--color-secondairy', 'white');
    } else {
        r.style.setProperty('--color-primairy', 'white');
        r.style.setProperty('--color-secondairy', 'black');
    }
}

fillMenu();
btnAll.addEventListener('click', fillMenu);
cartLink.addEventListener('click', toggleCart);
colorModeCheckbox.addEventListener('change', toggleColors);