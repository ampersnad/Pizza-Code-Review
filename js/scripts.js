//Pricing logic ----------------------------------

var smallPrice = 8;
var medPrice = 12;
var lrgPrice = 15;

function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Order.prototype.calcCost = function(size, toppings) {
	return size + toppings;
}

//User interface logic --------------------------------------
$(document).ready(function() {
  $("form#foodOrder").submit(function(event) {

    event.preventDefault();
    
    //location.reload();
	
// Setting pricing for pizza size -----------------------------------
    var sizeSelect = $("input:radio[name=size]:checked").val();
    console.log("size", sizeSelect);
	if (sizeSelect === "1") {
		size = smallPrice;
	};
	if (sizeSelect === "2") {
		size = medPrice;
	};
	if (sizeSelect === "3") {
		size = lrgPrice;
	};
	console.log("sizeprice", size);

// Setting pricing for toppings --------------------------------------
	var toppingPrice = 0
	$("input:checkbox[name=toppings]:checked").each(function(){
			toppingPrice += 1;
		});
	var toppings = toppingPrice;
	
	
    console.log(toppingPrice);
    var newOrder = new Order(size, toppingPrice);
    console.log("order", newOrder);
    var price = newOrder.calcCost(size, toppings);
	console.log("price", price);
    $("#pizzaPrice").text(price);

  });
});