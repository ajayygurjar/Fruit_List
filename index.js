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
const fruit=document.getElementsByClassName("fruit")
fruit[2].style.backgroundColor="yellow"
for(let i=0;i<fruit.length;i++){
  fruit[i].style.fontWeight="bold";
}
