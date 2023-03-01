const removeButton=document.querySelector(".remove");
const items=document.querySelector(".items");

removeButton.addEventListener("click", function() {
  items.innerHTML="";
});


function getInputValue() {
  const inputField=document.getElementById("inputID");
  const pHtmlElement=document.createElement("p");
  if (inputField.value===""){
    console.log("input polje je prazno");
  }
  else {
    pHtmlElement.innerText=inputField.value;
    items.appendChild(pHtmlElement);
    
    // Brisanje vrijednosti input polja
    inputField.value="";
    
  }
}
