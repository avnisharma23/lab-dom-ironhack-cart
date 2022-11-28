// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText;
 // console.log(price);
  const value = product.querySelector('.quantity input').value;
  //console.log(value);
  const subTotal = +price * value;
  //console.log(subTotal);

  product.querySelector('.subtotal span').innerText = subTotal;  
  
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product ');
   
       // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  //... your code goes here
  const rows = document.getElementById("cart").rows;
   const rowscount = rows.length;
   let totalPrice = 0;
   for(let i = 1; i< rowscount ; i++)
   {
    totalPrice += updateSubtotal(rows[i]);
      
   }

  // ITERATION 3
  //... your code goes here
  document.getElementById("total-value").innerText ="Total: $" + totalPrice;
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
