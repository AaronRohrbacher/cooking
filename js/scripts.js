var cups = function (liters){
  return liters*4.2267528377;
};

var input = parseFloat(prompt("Enter amount in Liters:"));
alert(cups(input)+ " cups");
