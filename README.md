# 💱 Currency Converter

A simple and responsive web application that converts one currency into another using real-time exchange rates.

This project uses the **Frankfurter Exchange Rate API** to fetch live currency values and display accurate conversion instantly.

---

## 🚀 Features

* Real-time currency conversion
* 50+ supported international currencies
* Country flag display based on selected currency
* Automatic conversion on page load
* Input validation (prevents empty or zero values)
* Error handling for unsupported currencies
* Clean and responsive UI

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API
* Frankfurter Currency API

---

## 📡 API Used

Frankfurter API
Endpoint:
https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

The API returns exchange rate data in JSON format.

Example response:

```json
{
  "amount": 1,
  "base": "USD",
  "date": "2026-02-21",
  "rates": {
    "INR": 83.09
  }
}
```

---

## 📁 Project Structure

```
Currency-Converter/
│── index.html
│── style.css
│── app.js
│── codes.js        (country code + flag mapping)
│── README.md
```

---

## ⚙️ How to Run Locally

1. Download or clone the repository

```
git clone https://github.com/your-username/currency-converter.git
```

2. Open the folder

3. Run using Live Server (VS Code recommended)

OR

Simply open `index.html` in your browser.

---

## 🧠 How It Works

1. User enters amount
2. Selects "From" and "To" currency
3. Application calls the API using Fetch
4. Receives JSON response
5. Extracts rate from `rates` object
6. Displays converted value on screen

Formula used:

```
Converted Amount = Amount × Exchange Rate
```

---

## ❗ Error Handling

* If user enters 0 or empty → default value = 1
* If API does not support selected currency → alert shown
* Prevents page reload using `event.preventDefault()`

---

## 📸 Preview

Currency converter with:

* currency dropdowns
* flag icons
* conversion output
* exchange rate button

---

## 🔮 Future Improvements

* Swap currency button (⇄)
* Live typing conversion
* Dark mode
* Mobile app version (Flutter)
* Historical exchange rates chart

---

## 👨‍💻 Author

**Sachin Kumar**
B.Tech CSE Student

---

## 📜 License

This project is open source and free to use for educational purposes.
