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
]

const food = [
  {
    name: 'apple',
    health: 20
  },
  
]

