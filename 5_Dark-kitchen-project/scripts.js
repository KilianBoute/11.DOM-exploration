const menu = [
    {
        name: "French fries",
        price: "€4.00",
        categories: ["vegan", "vegetarian", "fingerfood", "side dish"],
        image: "images/frenchFries.jpg",
    },
    {
        name: "Onion Rings",
        price: "€5.00",
        categories: ["Vegetarian", "Finger Food", "Side Dish"],
        image: "images/onionRings.jpg"
    },
    {
        name: "Chicken Tenders",
        price: "€7.50",
        categories: ["Finger Food", "Main Course"],
        image: "images/chickenTenders.jpg"
    },
    {
        name: "Fried Chicken",
        price: "€8.50",
        categories: ["Main Course"],
        image: "images/friedChicken.jpg"
    },
    {
        name: "Fried Fish",
        price: "€9.00",
        categories: ["Main Course"],
        image: "images/friedFish.jpg"
    },
    {
        name: "Fried Shrimp",
        price: "€10.00",
        categories: ["Main Course", "Seafood"],
        image: "images/friedShrimp.jpg"
    },
    {
        name: "Fried Calamari",
        price: "€11.00",
        categories: ["Appetizer", "Seafood"],
        image: "images/friedCalamari.jpg"
    },
    {
        name: "Mozzarella Sticks",
        price: "€6.50",
        categories: ["Appetizer", "Vegetarian", "Cheese"],
        image: "images/mozzarellaSticks.jpg"
    },
    {
        name: "Fried Pickles",
        price: "€5.50",
        categories: ["Vegetarian", "Appetizer", "Side Dish"],
        image: "images/friedPickles.jpg"
    },
    {
        name: "Tempura",
        price: "€12.00",
        categories: ["Appetizer", "Japanese", "Seafood"],
        image: "images/tempura.jpg"
    },
    {
        name: "Egg Rolls",
        price: "€4.50",
        categories: ["Appetizer", "Chinese"],
        image: "images/eggRolls.jpg"
    },
    {
        name: "Fried Spring Rolls",
        price: "€4.00",
        categories: ["Appetizer", "Vietnamese", "Vegetarian"],
        image: "images/friedSpringRolls.jpg"
    },
    {
        name: "Churros",
        price: "€3.50",
        categories: ["Dessert", "Spanish", "Sweet"],
        image: "images/churros.jpg"
    },
    {
        name: "Donuts",
        price: "€2.00",
        categories: ["Dessert", "Sweet"],
        image: "images/donuts.jpg"
    },
    {
        name: "Fried Oreos",
        price: "€3.50",
        categories: ["Dessert", "Sweet"],
        image: "images/friedOreos.jpg"
    },
    {
        name: "Fried Ice Cream",
        price: "€5.00",
        categories: ["Dessert", "Sweet"],
        image: "images/friedIceCream.jpg"
    },
    {
        name: "Pakoras",
        price: "€4.50",
        categories: ["Appetizer", "Indian", "Vegetarian"],
        image: "images/pakoras.jpg"
    },
    {
        name: "Hush Puppies",
        price: "€3.50",
        categories: ["Side Dish", "American"],
        image: "images/hushPuppies.jpg"
    },
    {
        name: "Fried Plantains",
        price: "€4.00",
        categories: ["Side Dish", "Caribbean"],
        image: "images/friedPlantains.jpg"
    },
    {
        name: "Arancini",
        price: "€6.50",
        categories: ["Appetizer", "Italian", "Rice"],
        image: "images/arancini.jpg"
    }
]

const categories = [];

const menuDiv = document.querySelector('.menu');
const categoryList = document.querySelector('.category-list');
const addMenuItem = (e) => {

    const newCard = document.createElement('div');
    newCard.className = 'card';

        const cardLeft = document.createElement('div');
        cardLeft.className = 'cardLeft';
            const cardName = document.createElement('h3');
            cardName.innerText = e.name;

            const cardPrice = document.createElement('p');
            cardPrice.innerText = e.price;

        cardLeft.appendChild(cardName);
        cardLeft.appendChild(cardPrice);

        e.categories.forEach(cat => {
            const containsCat = categories.includes(cat);
            if(!containsCat){
                const categoryItem = document.createElement('li');
                categoryItem.innerText = cat;
                categoryList.appendChild(categoryItem);
            }
        });

        const cardRight = document.createElement('div');
        cardRight.className = 'cardRight';
            const cardImg = document.createElement('img');
            cardImg.className = 'cardImg';
            cardImg.src = e.image;
            cardImg.alt = "image of " + e.name;
        
        cardRight.appendChild(cardImg);

    newCard.appendChild(cardLeft);
    newCard.appendChild(cardRight);

    menuDiv.appendChild(newCard);
}


menu.forEach(element => {
    addMenuItem(element);
});