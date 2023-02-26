function SelectPlayer(name, button) {
    const cart = document.getElementById("Select");
  
 
    const li = document.createElement("li");
    li.classList.add("selected");
    li.innerHTML = `${name}`;
  
    const SelectLeng = document.querySelectorAll(".selected");
    if (SelectLeng.length < 5) {
      Select.appendChild(li);
    } else {
      alert("You can not order more than 5");
      return;
    }
  
    button.setAttribute("disabled", true);
  }
  
  function calculate() {
    const PerPlayer = document.getElementById("PerPlayer").value;
    const SelectLeng = document.querySelectorAll(".selected");
    const total = document.getElementById("total");
    total.innerHTML = `${parseFloat(PerPlayer) * SelectLeng.length}`;
  }
  
  function calculateTotal() {
    const Manager = document.getElementById("Manager").value || 0;
    const Coach = document.getElementById("Coach").value || 0;
    const total = document.getElementById("total").innerText || 0;
    const subtotal = document.getElementById("subtotal");
  
    subtotal.innerHTML = `${
      parseFloat(total) + parseFloat(Manager) + parseFloat(Coach)
    }`;
  }
  