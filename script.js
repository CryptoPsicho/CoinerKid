let price = 0;
let payment = 0;
let change = 0;

const foodText = document.querySelector("#foodText");
const healthText = document.querySelector("#healthText");
const walletText = document.querySelector("#walletText");
const text = document.querySelector("#text");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const food1 = document.querySelector('#food1');
const food2 = document.querySelector('#food2');
const moneyGrid = document.querySelector('#moneyGrid');
const moneyGrid1 = document.querySelector('#moneyGrid1');
const paymentGrid = document.querySelector('#paymentGrid');
const paymentGrid1 = document.querySelector('#paymentGrid1');


const wallet = [
  {
    coin: "ONECENT",
    value: 1,
    quantity: 100,
    img: "https://www.kindpng.com/picc/m/553-5532338_1-euro-cent-common-1-cent-coin-png.png"
  },
  {
    coin: "TWOCENT",
    value: 2,
    quantity: 50,
    img: "https://www.kindpng.com/picc/m/209-2098026_transparent-50-cent-png-5-euro-cent-clipart.png"
  },
  {
    coin: "FIVECENT",
    value: 5,
    quantity: 20,
    img: "https://img.favpng.com/16/24/4/euro-coins-5-cent-euro-coin-1-cent-euro-coin-10-cent-euro-coin-png-favpng-CKQdX3BssViERnLsgT9dqzADd.jpg"

  },
  {
    coin: "TENCENT",
    value: 10,
    quantity: 10,
    img: "https://img.favpng.com/6/20/23/euro-coins-10-cent-euro-coin-1-cent-euro-coin-50-cent-euro-coin-png-favpng-1G2Kgyp2SXe7JuKJUzHWzqtdL.jpg"
  },
  {
    coin: "TWENTYCENT",
    value: 20,
    quantity: 5,
    img: "https://img.favpng.com/4/12/1/20-cent-euro-coin-euro-coins-png-favpng-veN86KmhvZWMppyYwJEAWDZ0k.jpg"
  },
  {
    coin: "FIFTYCENT",
    value: 50,
    quantity: 2,
    img: "https://img.favpng.com/15/1/23/20-cent-euro-coin-1-cent-euro-coin-20-euro-note-10-cent-euro-coin-png-favpng-MuecrPVH2spFfM1SSTwkNCCB8.jpg"
  },
  {
    coin: "EURO",
    value: 100,
    quantity: 1,
    img: "https://img.favpng.com/21/7/4/coin-circle-font-png-favpng-AXXMSVqDfCFgvLpgPqu2wzFAB.jpg"
  }
];

const food = [
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
    name: "Italian Restaurant",
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

function createWallet() {
  wallet.forEach(element => {
    const coin = document.createElement('img')
    coin.setAttribute('src', element.img)
    coin.setAttribute('data-id', element.coin)
    coin.addEventListener('click', addMoney)
    moneyGrid.appendChild(coin)
  })
};

function createBoard(location) {
  food.forEach(element => {
    if (element.location == location){
        const buyFood = document.createElement('img')
        buyFood.setAttribute('src', element.img)
        buyFood.setAttribute('data-id', element.name)
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
  createBoard(location)
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
  paymentGrid.querySelectorAll('*').forEach( n => n.remove())
};



//write askMoney function
function askMoney () {
  price = Math.floor(Math.random() * 100)
  button1.innerText = "";
  button2.innerText = "PAY";
  button3.innerText = "";
  button1.onclick = nothing();
  button2.onclick = buy();
  button3.onclick = nothing();
  text.innerText = 'You have to pay ${price} cents'
  createWallet()
};

function addMoney () {
  let coinId = this.getAttribute('data-id')
  payment += wallet[coinId].value
  const payedcoin = document.createElement('img')
  coin.setAttribute('src', wallet[coinId].img)
  coin.setAttribute('data-id', wallet[coinId].coin)
  coin.addEventListener('click', removeCoin(coinId))
  paymentGrid.appendChild(coin)

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
  else if (change = 0) {
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