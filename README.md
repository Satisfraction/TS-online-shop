# TS-online-shop

Dieses Projekt ist eine Gruppenarbeit im Rahmen der Weiterbildung bei Techstarter.de

Shop-Webseite:
Diese Webanwendung ist ein einfacher Shop, der es Benutzern ermöglicht, Artikel aus einer Liste auszuwählen, die Anzahl der Artikel zu bestimmen und sie in einen Warenkorb zu legen. Wenn der Benutzer bereit ist, seinen Einkauf abzuschließen, kann er auf den Checkout-Button klicken, um eine Übersicht seiner ausgewählten Artikel und des Gesamtbetrags anzuzeigen.

Funktionen:
shop.js
setupShop(): Diese Funktion initialisiert die Shop-Seite, indem sie die Artikel-Liste erstellt und die Event-Listener für die Schaltflächen zum Hinzufügen von Artikeln zum Warenkorb hinzufügt.

addToCart(): Diese Funktion wird aufgerufen, wenn der Benutzer auf die Schaltfläche "In den Warenkorb" klickt, die sich in der Produktbox befindet. Sie fügt den ausgewählten Artikel mit der entsprechenden Anzahl dem Warenkorb hinzu und aktualisiert das Warenkorb-Popup.

cart.js
openCartPopup(): Diese Funktion wird aufgerufen, wenn der Benutzer auf die Schaltfläche "Checkout" klickt. Sie sammelt alle ausgewählten Artikel und deren Anzahl aus der Seite und zeigt sie in einem Popup-Fenster an, zusammen mit dem Gesamtbetrag des Warenkorbs. Der Benutzer kann Artikel aus dem Warenkorb entfernen, indem er auf die entsprechende Schaltfläche klickt.

removeCartItem(index): Diese Funktion wird aufgerufen, wenn der Benutzer auf die Schaltfläche "Entfernen" neben einem Artikel im Warenkorb klickt. Sie entfernt den Artikel mit dem entsprechenden Index aus dem Warenkorb und aktualisiert das Popup-Fenster mit dem neuen Inhalt.

Nutzung:
Um das System zu nutzen, können Benutzer einfach die Produktseite öffnen und Artikel aus der Liste auswählen, indem sie die Anzahl der Artikel, die sie kaufen möchten, in das entsprechende Textfeld eingeben und auf "In den Warenkorb legen" klicken.

Sobald ein Artikel im Warenkorb ist, kann der Benutzer auf den "Warenkorb" -Button klicken, um eine Popup-Anzeige des aktuellen Warenkorbs zu öffnen. In diesem Popup können Benutzer Artikel entfernen und den Gesamtbetrag des Warenkorbs sehen.

Um den Kauf abzuschließen, können Benutzer einfach auf den "Zur Kasse gehen" -Button klicken, der sie zu einer externen Seite weiterleitet, um den Kauf zu tätigen.

Code:
Die HTML-Seite verwendet eine einfache CSS-Datei zur Formatierung der Seite und eine JavaScript-Datei namens "cart.js", um das Warenkorb-System zu implementieren. Die cart.js-Datei enthält Funktionen zum Öffnen des Warenkorb-Popups, Entfernen von Artikeln aus dem Warenkorb und Berechnen des Gesamtbetrags.

Es gibt keine spezifische Lizenz für dieses Projekt. Es ist jedoch zu beachten, dass es unabhängig von einer Lizenzierung illegal ist, urheberrechtlich geschütztes Material zu verwenden oder zu kopieren.

Bitte beachten Sie, dass der Checkout in diesem Projekt tatsächlich der Cart ist, da der Benutzer den Kauf außerhalb der Anwendung abschließen muss.

Weiterentwicklung:
Dieses Projekt ist ein einfaches Beispiel für ein Warenkorb-System und kann leicht erweitert werden, um weitere Funktionen hinzuzufügen. Zum Beispiel könnten Benutzerkonten implementiert werden, um Warenkörbe zwischen Sitzungen zu speichern, oder die Zahlungsabwicklung könnte in die Anwendung selbst integriert werden.

Wenn Sie dieses Projekt erweitern oder verändern möchten, sind Sie herzlich eingeladen, dies zu tun. Bitte achten Sie jedoch darauf, alle urheberrechtlichen Materialien ordnungsgemäß zu lizenzieren oder zu kennzeichnen.
