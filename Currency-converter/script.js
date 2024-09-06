// Import the currency list
import { currency_list } from "./currencyArr.js";


const api_key = "c52a761244918d5d50709e55def81e9c"



// Dropdown elements
const btndropdown1 = document.querySelector('.dropdown-button-1'); 
const btndropdown2 = document.querySelector('.dropdown-button-2');

const contentdropdown1 = document.querySelector('.dropdown-content-1');
const contentdropdown2 = document.querySelector('.dropdown-content-2');

const bothdropdonwbtn = document.querySelector('.dropdown-button');

const arrow = document.querySelector(".arrow")
// Button and input elements
const resultButton = document.getElementsByTagName('button')[0];

const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');

let dropdownCtn1 = false;
let dropdownCtn2 = false;

// Create dropdown items dynamically
function addDropdownContentItem(dropdownNumber, aName) {
    console.log("Function running");

    // Create a new 'a' element
    let newa = document.createElement("a");
    newa.href = "#";
    newa.textContent = aName;

    // Set class based on dropdown number
    if (dropdownNumber === 1) {
        newa.className = 'dropdownitem1';
        document.querySelector('.dropdown-content-1').appendChild(newa); // Append to first dropdown container
    } else {
        newa.className = 'dropdownitem2';
        document.querySelector('.dropdown-content-2').appendChild(newa); // Append to second dropdown container
    }
}

// Dropdown 1 click handler
btndropdown1.addEventListener('click', function () {
    if (dropdownCtn1) {
        contentdropdown1.style.display = 'none';
        dropdownCtn1 = false;
    } else {
        // Add items dynamically if needed
        currency_list.forEach(currency => addDropdownContentItem(1, currency));
        contentdropdown1.style.display = 'flex'; // Show the dropdown
        dropdownCtn1 = true;
    }
});

// Dropdown 2 click handler
btndropdown2.addEventListener('click', function () {
    if (dropdownCtn2) {
        contentdropdown2.style.display = 'none';
        dropdownCtn2 = false;
    } else {
        currency_list.forEach(currency => addDropdownContentItem(2, currency));
        contentdropdown2.style.display = 'flex'; // Show the dropdown
        dropdownCtn2 = true;
    }
});

// Use event delegation to capture clicks on dynamically created items in dropdown 1
contentdropdown1.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('dropdownitem1')) {
        console.log('Dropdown 1 item clicked:', e.target.textContent); // Log the clicked item's text
        btndropdown1.innerText  = e.target.textContent; // Update the button text        
        contentdropdown1.style.display = 'none'; // Hide the dropdown after selection
        dropdownCtn1 = false;
    }
});

// Use event delegation to capture clicks on dynamically created items in dropdown 2
contentdropdown2.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('dropdownitem2')) {
        console.log('Dropdown 2 item clicked:', e.target.textContent); // Log the clicked item's text
        btndropdown2.innerText  = e.target.textContent; // Update the button text
        contentdropdown2.style.display = 'none'; // Hide the dropdown after selection
        dropdownCtn2 = false;
    }
});

resultButton.addEventListener('click', function (e) {
    e.preventDefault()

    const fromCurrency = btndropdown1.innerText;
    const toCurrency = btndropdown2.innerText;
    const amount = parseFloat(input1.value);

    if (!fromCurrency || !toCurrency || isNaN(amount)) {
        alert('Please ensure all fields are filled correctly.');
        return;
    }

    // Define the API URL with your API key
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const rates = data.rates;
            if (!rates[toCurrency]) {
                throw new Error(`Currency ${toCurrency} not found in exchange rates.`);
            }

            console.log(rates)
            console.log(toCurrency)

            const conversionRate = rates[toCurrency];
            const convertedAmount = amount * conversionRate;
            input2.value = convertedAmount.toFixed(2);
        })
        .catch(error => {
            console.error('There was an error fetching the exchange rates:', error);
            alert('Error fetching exchange rates. Please try again later.');
        });
    
});
