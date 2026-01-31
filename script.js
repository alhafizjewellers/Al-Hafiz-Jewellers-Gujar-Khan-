function verifyCode(){
  let code = document.getElementById("codeInput").value;
  let data = JSON.parse(localStorage.getItem("receipts")) || {};
  let r = data[code];
  let result = document.getElementById("result");

  if(r){
    result.innerHTML = `
      <p><b>Customer:</b> ${r.customer}</p>
      <p><b>Product:</b> ${r.product}</p>
      <p><b>Weight:</b> ${r.weight}</p>
      <p><b>Price:</b> ${r.price}</p>
      <p><b>Date:</b> ${r.date}</p>
    `;
  }else{
    result.innerHTML = "❌ Invalid Code";
  }
}