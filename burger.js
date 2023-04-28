
const quantityInputs = document.querySelectorAll('.quantity input');
const plusButtons = document.querySelectorAll('.plus-button');
const minusButtons = document.querySelectorAll('.minus-button');

for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener('click', updateQuantity);
}
for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener('click', updateQuantity);
}

function updateQuantity(event) {
    const button = event.target;
    const box = button.parentElement.parentElement;
    const quantityInput = box.querySelector('input');
    const price = box.querySelector('.price').textContent;
    const priceValue = parseFloat(price.replace(',', '.'));
    let quantityValue = parseInt(quantityInput.value);

    if (button.classList.contains('plus-button')) {
        quantityValue++;
    } else if (button.classList.contains('minus-button')) {
        quantityValue--;
        if (quantityValue < 0) {
            quantityValue = 0;
            priceValue = 0;
        }
    }

    quantityInput.value = quantityValue;

    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
    for (let i = 0; i < quantityInputs.length; i++) {
        const box = quantityInputs[i].parentElement.parentElement;
        const quantityValue = parseInt(quantityInputs[i].value);
        const price = box.querySelector('.price').textContent;
        const priceValue = parseFloat(price.replace(',', '.'));
        totalPrice += quantityValue * priceValue;
    }
    totalPriceElement.textContent = totalPrice.toFixed(2).replace('.', ',') + ' €';
}

function fetchProduct(id) {
	return fetch(`https://dummyjson.com/products/${id}`)
	  .then((res) => res.json());
  }
  
  function updateProduct(product, idPrefix) {
	const titleEl = document.getElementById(`${idPrefix}-title`);
    const descriptionEl = document.getElementById(`${idPrefix}-description`);
	const priceEl = document.getElementById(`${idPrefix}-price`);
	const imageEl = document.getElementById(`${idPrefix}-image`);
  
	titleEl.textContent = product.title;
    descriptionEl.textContent = product.description;
	priceEl.textContent = product.price.toFixed(2) + '€';
	imageEl.src = product.thumbnail;
  }

fetchProduct(1)
	.then((product) => {
	  updateProduct(product, 'product-1');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});