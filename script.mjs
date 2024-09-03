import { currency_list } from "./currencyArr.mjs";


// dropdown elements//

const btndropdown1=document.querySelector('.dropdown-button-1');                      
const btndropdown2=document.querySelector('.dropdown-button-2');  


const contentdropdown1=document.querySelector('.dropdown-content-1');
const contentdropdown2=document.querySelector('.dropdown-content-2');



const dropdownitem1  = document.querySelector('.dropdownitem1');
const dropdownitem2  = document.querySelector('.dropdownitem2');



const button = document.getElementsByTagName('button')
const input = document.getElementsByTagName('input')

let dropdownCtn1 = false 
let dropdownCtn2 = false 



//create a item function

function addDropdownContentItem(dropdownNumber, aName) {

    console.log("Function running");

    // Create a new 'a' element
    let newa = document.createElement("a");

    // Add value to the 'a' element
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


btndropdown1.addEventListener('click', function() {
     if (dropdownCtn1) {
        contentdropdown1.style.display = 'none';
        dropdownitem1.style.display = 'none'
        dropdownCtn1 = false
    } else {
        console.log("btn click")
        currency_list.forEach(currency => addDropdownContentItem(1, currency));
        contentdropdown1.style.display = 'flex';
        dropdownitem1.style.display = 'flex'
        dropdownCtn1 = true
    }
});

btndropdown2.addEventListener('click', function() {
    if (dropdownCtn2) {
        contentdropdown2.style.display = 'none';
        dropdownitem2.style.display = 'none'
        dropdownCtn2 = false
    } else {
        currency_list.map((curItem) => addDropdownContentItem(1, curItem));
        console.log("clicked")
        contentdropdown2.style.display = 'flex';
        dropdownitem2.style.display = 'flex'
        dropdownCtn2 = true
    }
});

contentdropdown1.addEventListener('click', function() {
     
});
contentdropdown2.addEventListener('click', function() {
     
});