let price = 0;
let payment = 0;
let change = 0;

const text = document.querySelector("#text");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const foodGrid = document.querySelector('#foodGrid');
const moneyGrid = document.querySelector('#moneyGrid');
const paymentGrid = document.querySelector('#paymentGrid');


const wallet = [
  {
    coin: "ONECENT",
    value: 1,
    quantity: 100,
    img: 'coin_img/1-cent.png'
  },
  {
    coin: "TWOCENT",
    value: 2,
    quantity: 50,
    img: 'coin_img/2-cent.png'
  },
  {
    coin: "FIVECENT",
    value: 5,
    quantity: 20,
    img: 'coin_img/5-cent.jpg'

  },
  {
    coin: "TENCENT",
    value: 10,
    quantity: 10,
    img: 'coin_img/10-cent.jpg'
  },
  {
    coin: "TWENTYCENT",
    value: 20,
    quantity: 5,
    img: 'coin_img/20-cent.jpg'
  },
  {
    coin: "FIFTYCENT",
    value: 50,
    quantity: 2,
    img: 'coin_img/50-cent.jpg'
  },
  {
    coin: "EURO",
    value: 100,
    quantity: 1,
    img: 'coin_img/euro.jpg'
  }
];

const food = [
  {
    name: 'kiwi',
    health: 20,
    img: 'food_img/kiwi.png',
    location: "Store",
    type: "Fruit"
  },
  {
    name: 'pizza',
    health: 5,
    img: 'food_img/pizza.png',
    location: "Restaurant",
    type: "ItalianFood"
  },
  {
    name: 'pasta',
    health: 10,
    img: 'food_img/pasta.png',
    location: "Restaurant",
    type: "ItalianFood"
  },
  {
    name: 'fries',
    health: -20,
    img: 'food_img/fries.png',
    location: "McDonald",
    type: "JunkFood"

  },
  {
    name: 'hamburger',
    health: -10,
    img: 'food_img/hamburger.png',
    location: "McDonald",
    type: "JunkFood"
  },
  {
    name: 'candies',
    health: -30,
    img: 'food_img/candies.png',
    location: "Store",
    type: "Candies"
  },
];

const locations = [
  {
    name: "Home",
    "button text": ["Go to Store", "Go to Italian Restaurant", "Go to McDonald"],
    "button functions": [goStore, goRestaurant, goMcDonald],
		text: "You are at home. You want to eat something. Let's go out to buy some food!"  
  },  
  {
    name: "Store",
    "button text": ["Buy Fruit", "Buy Candies", "Go Home"],
		"button functions": [buy, buy, goHome],
		text: "You enter the store. Do you wat to buy some healthy fruit or some candies?"  
  },
  {
    name: "Restaurant",
    "button text": ["Buy Pasta", "Buy Pizza", "Go Home"],
    "button functions": [buy, buy, goHome],
		text: "You enter the Italian Restaurant. Do you want to buy some pasta or a pizza?"  
  },
  {
    name: "McDonald",
    "button text": ["Buy Burger", "Buy Fries", "Go Home"],
    "button functions": [buy, buy, goHome],
		text: "You enter McDonald. Do you want to buy a burger or fries?"  
  },
  {
    name: "Change",
    "button text": ["", "Take Change", ""],
    "button functions": [nothing, takeChange, nothing],
		text: ""  
  },
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goRestaurant;
button3.onclick = goMcDonald;
moneyGrid.onclick = addMoney()

function createWallet() {
  wallet.forEach(element => {
    const coin = document.createElement('img')
    coin.setAttribute('src', element.img)
    coin.setAttribute('dataId', element.coin)
    coin.addEventListener('click', addMoney)
    moneyGrid.appendChild(coin)
  })
}

function createBoard(loc) {
  food.forEach(element => {
    if (element.location == loc){
        const buyFood = document.createElement('img')
        buyFood.setAttribute('src', element.img)
        buyFood.setAttribute('dataId', element.name)
        buyFood.addEventListener('click', askMoney)
        foodGrid.appendChild(buyFood)
    }
  });  
};

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
  createBoard(location.name)
};

function goHome() {
  update(locations[0])
};

function goStore() {
  update(locations[1])
};

function goRestaurant() {
  update(locations[2])
};

function goMcDonald() {
  update(locations[3])
};

function goChange() {
  update(location[4])
  createWallet()
  //paymentGrid.querySelectorAll('*').forEach( n => n.remove())
};

function askMoney () {
  price = Math.floor(Math.random() * 100)
  button1.innerText = ""
  button2.innerText = "PAY"
  button3.innerText = ""
  button1.onclick = nothing
  button2.onclick = buy
  button3.onclick = nothing
  text.innerText = 'You have to pay ' + price + ' cents'
  createWallet()
};

function addMoney (event) {
  let coinId = event.currentTarget.attributes.coin
  payment += wallet[coinId].value
  const payedCoin = document.createElement('img')
  payedCoin.setAttribute('src', wallet[coinId].img)
  payedCoin.setAttribute('dataID', wallet[coinId].coin)
  payedCoin.setAttribute('value', wallet[coinId].value)
  //payedCoin.addEventListener('click', removeCoin)
  paymentGrid.appendChild(payedCoin)

  };

function removeCoin(coin) {
  payment -= wallet[coin].value
  paymentGrid.removeChild(coin)
};

function takeChange() {
  if (change == payment) {
    alert("Correct!!")
    goHome()
    price = 0;
    payment = 0;
    change = 0;  
  }
  else if (change < payment) {
    alert("You need to take more change back!")
  } 
  else {
    alert("You're trying to fool me")
  }
}

function buy() {
  change = payment - price
  if (change < 0) {
    alert("You have not payed enough")
  }
  else if (change === 0) {
    alert("Thank you very much! Enjoy your food and have a nice day!")
    payment = 0
    price = 0
    goHome()
  }
  else {
    alert("You gave me too much many. How much change do you want?")
    let payment1 = payment
    let price1 = price
    payment = 0
    price = 0
    goChange()
    text.innerText = "How much is the change of " + payment1 + " - " + price1 + " = "
  }
};

function nothing() {
  console.log("fantara verdulli!")
};