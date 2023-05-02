function openCartPopup() {
  const cartItems = [];
  let total = 0;
  const quantityInputs = document.querySelectorAll('.quantity input');

  // Abrufen aller ausgewählten Produkte
  quantityInputs.forEach(input => {
    const box = input.parentElement.parentElement;
    const quantityValue = parseInt(input.value);

    // Wenn Anzahl größer als 0, zum Warenkorb hinzufügen
    if (quantityValue > 0) {
      const title = box.querySelector('.title').textContent;
      const price = box.querySelector('.price').textContent;
      const priceValue = parseFloat(price.replace(',', '.'));
      const subtotal = priceValue * quantityValue;
      total += subtotal;

      cartItems.push({
        title,
        quantity: quantityValue,
        price: priceValue.toFixed(2),
        subtotal: subtotal.toFixed(2),
      });
    }
  });

  // Popup-Inhalt
  let cartContent = `
    <h2>Warenkorb:</h2>
    ${
      cartItems.length > 0
      ? `<ul>
          ${cartItems.map((item, index) => `
            <li>
              ${item.title} x ${item.quantity} = ${item.subtotal} €
              <button onclick="removeCartItem(${index})">Entfernen</button>
            </li>
          `).join('')}
        </ul>
        <p>Total: ${total.toFixed(2)} €</p>`
      : '<p>Ihr Warenkorb ist leer.</p>'
    }
  `;

  // Öffnet Popup-Fenster
  const popupWindow = window.open('', 'cartPopup', 'width=500,height=400');
  popupWindow.document.write(cartContent);
}

// Entfernen-Funktion für den Warenkorb-Artikel
function removeCartItem(index) {
  const cartItems = [];
  let total = 0;
  const quantityInputs = document.querySelectorAll('.quantity input');

  // Abrufen aller ausgewählten Produkte
  quantityInputs.forEach(input => {
    const box = input.parentElement.parentElement;
    const quantityValue = parseInt(input.value);

    // Wenn Anzahl größer als 0, zum Warenkorb hinzufügen
    if (quantityValue > 0) {
      const title = box.querySelector('.title').textContent;
      const price = box.querySelector('.price').textContent;
      const priceValue = parseFloat(price.replace(',', '.'));
      const subtotal = priceValue * quantityValue;

      cartItems.push({
        title,
        quantity: quantityValue,
        price: priceValue.toFixed(2),
        subtotal: subtotal.toFixed(2),
      });
    }
  });

  // Entfernen des ausgewählten Artikels aus dem Warenkorb
  cartItems.splice(index, 1);

  // Berechnung des neuen Gesamtbetrags
  cartItems.forEach(item => {
    total += parseFloat(item.subtotal);
  });

  // Aktualisieren des Popup-Fensters
  const popupWindow = window.open('', 'cartPopup', 'width=450,height=400');
  popupWindow.document.write(`
    <h2>Warenkorb:</h2>
    ${
      cartItems.length > 0
      ? `<ul>
          ${cartItems.map((item, index) => `
            <li>
              ${item.title} x ${item.quantity} = ${item.subtotal} €
              <button onclick="removeCartItem(${index})">Entfernen</button></li>
              `).join('')}
            </ul>
            <p>Total: ${total.toFixed(2)} €</p>`
          : '<p>Ihr Warenkorb ist leer.</p>'
        }
        `);
}

// Checkout-Button
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', openCartPopup);