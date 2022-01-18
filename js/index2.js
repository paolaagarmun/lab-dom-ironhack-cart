// ITERATION 1

function updateSubtotal(product) {
   // console.log('Calculating subtotal, yey!');
  
   const price = product.querySelector('.price span').innerHTML;
   const quantity = product.querySelector('.quantity input').value;

   let subtotal = price*quantity;

   product.querySelector('.subtotal span').innerHTML = subtotal;

   return subtotal;
  }
  
  function calculateAll() {
   
    // ITERATION 2
    const getProducts = document.getElementsByClassName('product');
    
    //console.log(getProducts);
  
    let totalSum = 0
    for (product of getProducts) {
       totalSum += updateSubtotal(product)
    }

    // ITERATION 3
    const total = document.querySelector('#total-value span');
    total.innerHTML = totalSum

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