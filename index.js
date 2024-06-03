// // Write your code below:
// STEP:-1 getElementById

// const header=document.getElementById("header")
// header.style.backgroundColor="green"
// header.style.borderBottom=" orange"

// const mainHeading=document.getElementById("main-heading")
// mainHeading.textContent="Fruit World"
// mainHeading.style.color="orange"

// const fruitBasket=document.getElementById("basket-heading")
// fruitBasket.style.color="green"

// const thanks=document.getElementById("thanks")
// thanks.innerHTML='<p>Please visit us again</p>'


// STEP:- 2getElementsByClassName

// Write your code below:
// const fruit=document.getElementsByClassName("fruit")
// fruit[2].style.backgroundColor="yellow"
// for(let i=0;i<fruit.length;i++){
//   fruit[i].style.fontWeight="bold";
// }


//STEP:- 3 getElementsByTagName

// Write your code below:
// const listName=document.getElementsByTagName("li");
// listName[4].style.color='blue'
// for(let i=0;i<listName.length;i++){
//   listName[i].style.fontStyle='italic';
// }

//STEP:-4 querySelector & querySelectorAll Methods
// Write the code as shown in th
// const mainHeading=document.querySelector("#main-heading")
// mainHeading.style.textAlign='right'

// const fruit=document.querySelector('.fruits')
// fruit.style.backgroundColor='gray'
// fruit.style.padding='30px'
// fruit.style.width='50%'
// fruit.style.margin='30px'
// fruit.style.borderRadius='5px'
// fruit.style.listStyleType='none'

// const basketHeading=document.querySelector("h2");
// basketHeading.style.color="brown";
// basketHeading.style.marginLeft='30px'

// const listName=document.querySelectorAll('.fruit')
// for(let i=0;i<listName.length;i++){
//   listName[i].style.color='white'
//   listName[i].style.backgroundColor='white'
//   listName[i].style.padding='10px'
//   listName[i].style.margin='10px'
//   listName[i].style.borderRadius='5px'
// }

// const OddlistName=document.querySelectorAll('.fruit:nth-child(odd)');
// for(let i=0;i<OddlistName.length;i++){
//   OddlistName[i].style.backgroundColor='lightgray'
// }
// const EvenlistName=document.querySelectorAll('.fruit:nth-child(even)');
// for(let i=0;i<EvenlistName.length;i++){
//   EvenlistName[i].style.backgroundColor='brown'
// }

//STEP:-5 Creaing Element
// Write your code below:

const heading=document.createElement('h3')
const headingText=document.createTextNode('Buy hig quality orgainic fruits online');
heading.appendChild(headingText)
heading.style.fontStyle='italic'

const div=document.getElementsByTagName('div')
const firstDiv=div[0]
firstDiv.appendChild(heading)

const secondDiv=div[1]
const para=document.createElement('p')
const paraText=document.createTextNode("Total fruits: 4")
para.appendChild(paraText)
para.id='fruits-total'

const list=document.querySelector('.fruits')
secondDiv.insertBefore(para,list)