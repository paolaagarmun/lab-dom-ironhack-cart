// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  //on input we are updating the property value, hence we are getting it here:
  const quantity = product.querySelector('.quantity input').value;

  //here we are referencing the node, we can use const since the reference will not change:
  const subTotal = product.querySelector('.subtotal span')

  //here we change what the innerHTML will show on the browser:
  subTotal.innerHTML = price*quantity
  //console.log(subtotalPrice);

  return price * quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
                                                  //do not need .product on getElementByClassName, on 
                                                  //query selector we do
  const products = document.getElementsByClassName("product");
  
  let sumTotal = 0
  for (let i=0; i<products.length; i++){
    sumTotal += updateSubtotal(products[i]);
  }
    
  // ITERATION 3
  const total = document.querySelector("#total-value span");
  total.innerHTML = sumTotal;


}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});