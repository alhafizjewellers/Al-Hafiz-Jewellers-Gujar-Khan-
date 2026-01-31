function login(){
  let pass = document.getElementById("password").value;
  if(pass === "Hafiz3537@"){
    document.getElementById("panel").style.display="block";
  }else{
    alert("Wrong Password");
  }
}

function saveReceipt(){
  let receipts = JSON.parse(localStorage.getItem("receipts")) || {};

  receipts[code.value] = {
    customer: customer.value,
    product: product.value,
    weight: weight.value,
    price: price.value,
    date: date.value
  };

  localStorage.setItem("receipts", JSON.stringify(receipts));
  alert("Receipt Saved Successfully ✅");
}
