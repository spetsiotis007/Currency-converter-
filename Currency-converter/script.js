


// dropdown elements//

const btndropdown1=document.querySelector('.dropdown-button-1');                      
const btndropdown2=document.querySelector('.dropdown-button-2');  


const contentdropdown1=document.querySelector('.dropdown-content-1');
const contentdropdown2=document.querySelector('.dropdown-content-2');



const button = document.getElementsByTagName('button')

let dropdownCtn1 = false 
let dropdownCtn2 = false 



btndropdown1.addEventListener('click', function() {
     if (dropdownCtn1) {
        contentdropdown1.style.display = 'none';
    } else {
        contentdropdown1.style.display = 'block';
    }
});

btndropdown2.addEventListener('click', function() {
    if (dropdownCtn2) {
        contentdropdown2.style.display = 'none';
    } else {
        contentdropdown2.style.display = 'block';
    }
});

contentdropdown1.addEventListener('click', function() {
     
});
contentdropdown2.addEventListener('click', function() {
     
});