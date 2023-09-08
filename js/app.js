script.js
function filterName() {
    var input, filter, h2, myContact, i, x, textValue;

    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    myContact = document.getElementById("contact");
    h2 = myContact.getElementsByClassName("my_contact_cont");

    for (i = 0; i < h2.length; i++) {
        x = h2[i].getElementsByTagName("h2")[0];
        textValue = x.textValue || x.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            h2[i].style.display = "";
        } else {
            h2[i].style.display = "none";
        }
        
    }
}