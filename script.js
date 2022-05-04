var btns = document.querySelectorAll(".btn");
var cards = document.querySelectorAll(".card");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(e) {
    //Getting card number with Active Class
    var cardNumber = this.getAttribute("data");
    // console.log(cardNumber);

    if (parseInt(cardNumber) === 3) {
      cards.item(2).classList.remove("active");
      cards.item(0).classList.add("active");
    } else {
      cards.item(parseInt(cardNumber) - 1).classList.remove("active");
      cards.item(parseInt(cardNumber)).classList.add("active");
    }
  });
}
