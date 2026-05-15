function changeSize() {
  let img = document.querySelector(".pizzaImg");
  let size = document.querySelector('input[name = "size"]:checked').value;

  if (size === "small") {
    img.height = 60;
  } else if (size === "medium") {
    img.height = 80;
  } else {
    img.height = 100;
  }
}

function orderTotal() {
  document.querySelector(".details").style.display = "block";

  let count = Number(document.querySelector(".pizzaCount").value);

  let size = document.querySelector('input[name = "size"]:checked').value;
  let sizePrice;

  if (size === "small") sizePrice = 10;
  else if (size === "medium") sizePrice = 12;
  else sizePrice = 14;

  let toppings = document.querySelectorAll(".topping");
  let toppingCount = 0;

  for (let t of toppings) {
    if (t.checked) toppingCount++;
  }

  let subtotal = (sizePrice + toppingCount * 1.5) * count;
  let tax = subtotal * 0.15;
  let total = subtotal + tax;

  document.querySelector(".subtotal").value = "$" + subtotal.toFixed(2);
  document.querySelector(".tax").value = "$" + tax.toFixed(2);
  document.querySelector(".total").value = "$" + total.toFixed(2);
}

function resetOrder() {
  document.querySelector(".name").value = "";
  document.querySelector(".pizzaCount").value = "";

  let radios = document.querySelectorAll('input[name="size"]');
  for (let r of radios) r.checked = false;

  let tops = document.querySelectorAll(".topping");
  for (let t of tops) t.checked = false;

  document.querySelector(".details").style.display = "none";
  document.querySelector(".pizzaImg").height = 80;
}
