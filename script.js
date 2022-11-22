const ONECENT = 1;
const TWOCENT = 2;
const FIVECENT = 5;
const TENCENT = 10;
const TWENTYCENT = 20;
const FIFTYCENT = 50;
const EURO = 100;

let myfood =[]
const foodText = document.querySelector("#foodText");
const healthText = document.querySelector("#healthText");
const walletText = document.querySelector("#walletText");
const text = document.querySelector("#text");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const grid = document.querySelector('.grid');


let heath = 100;
let wallet = [
  {
    coin: ONECENT,
    quantity: 100
  },
  {
    coin: TWOCENT,
    quantity: 50
  },
  {
    coin: FIVECENT,
    quantity: 20
  },
  {
    coin: TENCENT,
    quantity: 10
  },
  {
    coin: TWENTYCENT,
    quantity: 5
  },
  {
    coin: FIFTYCENT,
    quantity: 2
  },
  {
    coin: EURO,
    quantity: 1
  }
];

const food = [
  {
    name: 'apple',
    health: 20,
    img: "https://w7.pngwing.com/pngs/765/668/png-transparent-charlotte-varenye-apple-fruit-apple-fruit-natural-foods-food-fruit-thumbnail.png",
    location: "Store",
    type: "Fruit"
  },
  {
    name: 'banana',
    health: 30,
    img: "https://image.similarpng.com/very-thumbnail/2022/01/Banana-fruit-isolated-on-transparent-background-PNG.png",
    location: "Store",
    type: "Fruit"
  },
  {
    name: 'kiwi',
    health: 20,
    img:"https://www.pintarmewarnai.com/png/thumb/qVuWdxvMuhPKklt-Kiwi-Fruit-PNG.png",
    location: "Store",
    type: "Fruit"
  },
  {
    name: 'pizza',
    health: 5,
    img: "https://e7.pngegg.com/pngimages/280/611/png-clipart-pizza-hamburger-submarine-sandwich-restaurant-oven-pizza-food-cheese-thumbnail.png",
    location: "Restaurant",
    type: "ItalianFood"
  },
  {
    name: 'pasta',
    health: 10,
    img: "https://image.similarpng.com/very-thumbnail/2022/03/Spaghetti-in-dish-isolated-on-transparent-background-PNG.png",
    location: "Restaurant",
    type: "ItalianFood"
  },
  {
    name: 'fries',
    health: -20,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/French_Fries.png",
    location: "McDonald",
    type: "JunkFood"

  },
  {
    name: 'hamburger',
    health: -10,
    img: "https://image.similarpng.com/very-thumbnail/2020/04/Floating-burger-PNG.png",
    location: "McDonald",
    type: "JunkFood"
  },
  {
    name: 'candies',
    health: -30,
    img: "https://purepng.com/public/uploads/large/purepng.com-button-candyfood-sweet-tasty-taste-candy-941524599400vexkj.png",
    location: "Store",
    type: "Candies"
  },
];

const locations = [
  {
    name: "Store",
    "button text": ["Buy Fruit", "Buy Candies", "Go Home"],
		"button functions": [buyFruit, buyCandies, goHome],
		text: "You enter the store. Do you wat to buy some healthy fruit or some candies?"  
  }
];

function createBoard(foodType) {
  food.forEach(element => {
    if (element.type === foodType){
        const buyFood = document.createElement('img')
        buyFood.setAttribute('src', element.img)
        buyFood.setAttribute('data-id', element.name)
        buyFood.addEventListener('click', flipCard)
        grid.appendChild(buyFood)
    
    }
    
  });  {
    const card = document.createElement('img')
  }
}


function buyFruit () {
  //present fruit
};