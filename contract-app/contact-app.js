let contact = [];
console.log(contact);
let myForm = document.querySelector('#myForm');
myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    contact.push(
        {
            name: e.target.elements.aname.value,
            mobile: e.target.elements.aphone.value
        }
    );
    localStorage.setItem('contacts', JSON.stringify(contact));
    e.target.elements.aname.value = '';
    e.target.elements.aphone.value = '';
    
    console.log(contact);
});
