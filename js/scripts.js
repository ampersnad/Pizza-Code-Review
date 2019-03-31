//Pricing logic ----------------------------------

var smallPrice = 8;
var medPrice = 12;
var lrgPrice = 15;
var cheese = 1;
var pepperoni = 1;
var sausage = 1;
var pineapple = 1;
var mushroom = 1;
var toppings = [cheese, pepperoni, sausage, pineapple, mushroom];

function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}


Order.prototype.calcCost = function(size, toppings) {
	
	

  // if ((this.time === "morning" || this.time ===  "matinee") && this.age !== "youth") {
    // return matPrice;
  // } else {
     // if (this.age === "youth" && this.movie === "3") {
       // ageRestrict = "You're not old enough to view this film. BUSTED."
     // } else if (this.age === "youth") {
       // return youthPrice;
     // } else {
       // return regPrice;
     // }
  // }
}


//User interface logic ------------
$(document).ready(function() {
  $("form#foodOrder").submit(function(event) {

    event.preventDefault();
    //$("#pizzaPrice").text("");
    

    // $(".priceOutput").empty();
    //location.reload();

    var size = $("input:radio[name=size]:checked").val();
    console.log(size);
    var toppingSelect = $("input:checkbox[name=toppings]:checked").val();
    console.log(toppingSelect);
    var newOrder = new Order(size, toppings);
    //console.log(newOrder);
    var price = newOrder.calcCost(size, toppings);
    $("#pizzaPrice").text(price);

    

  });
});