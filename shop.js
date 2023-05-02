
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

    fetchProduct(2)
	.then((product) => {
	  updateProduct(product, 'product-2');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(3)
	.then((product) => {
	  updateProduct(product, 'product-3');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(4)
	.then((product) => {
	  updateProduct(product, 'product-4');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(5)
	.then((product) => {
	  updateProduct(product, 'product-5');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(6)
	.then((product) => {
	  updateProduct(product, 'product-6');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(7)
	.then((product) => {
	  updateProduct(product, 'product-7');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(8)
	.then((product) => {
	  updateProduct(product, 'product-8');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(9)
	.then((product) => {
	  updateProduct(product, 'product-9');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(10)
	.then((product) => {
	  updateProduct(product, 'product-10');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(11)
	.then((product) => {
	  updateProduct(product, 'product-11');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(12)
	.then((product) => {
	  updateProduct(product, 'product-12');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(13)
	.then((product) => {
	  updateProduct(product, 'product-13');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(14)
	.then((product) => {
	  updateProduct(product, 'product-14');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(15)
	.then((product) => {
	  updateProduct(product, 'product-15');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(16)
	.then((product) => {
	  updateProduct(product, 'product-16');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(17)
	.then((product) => {
	  updateProduct(product, 'product-17');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(18)
	.then((product) => {
	  updateProduct(product, 'product-18');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(19)
	.then((product) => {
	  updateProduct(product, 'product-19');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(20)
	.then((product) => {
	  updateProduct(product, 'product-20');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

	fetchProduct(21)
	.then((product) => {
	  updateProduct(product, 'product-21');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

	fetchProduct(22)
	.then((product) => {
	  updateProduct(product, 'product-22');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

	fetchProduct(23)
	.then((product) => {
	  updateProduct(product, 'product-23');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

	fetchProduct(24)
	.then((product) => {
	  updateProduct(product, 'product-24');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

	fetchProduct(25)
	.then((product) => {
	  updateProduct(product, 'product-25');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

	fetchProduct(26)
	.then((product) => {
	  updateProduct(product, 'product-26');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

	fetchProduct(27)
	.then((product) => {
	  updateProduct(product, 'product-27');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

	fetchProduct(28)
	.then((product) => {
	  updateProduct(product, 'product-28');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

	fetchProduct(29)
	.then((product) => {
	  updateProduct(product, 'product-29');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

	fetchProduct(30)
	.then((product) => {
	  updateProduct(product, 'product-30');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

	fetchProduct(31)
	.then((product) => {
	  updateProduct(product, 'product-31');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

	fetchProduct(32)
	.then((product) => {
	  updateProduct(product, 'product-32');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});