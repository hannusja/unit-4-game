//* The random number shown at the start of the game should be between 19 - 120.
//* Each crystal should have a random hidden value between 1 - 12.

$(document).ready(function() {


var wins=0
var losses=0
var randomNumber = Math.floor(Math.random() * ((120-19)+1)+19)
var totscore=0
var diamondvalue = Math.floor(Math.random() * ((12-1)+1)+1)
var emeraldvalue = Math.floor(Math.random() * ((12-1)+1)+1)
var opalvalue = Math.floor(Math.random() * ((12-1)+1)+1)
var rubyvalue = Math.floor(Math.random() * ((12-1)+1)+1)

console.log (diamondvalue, emeraldvalue, opalvalue, rubyvalue)

$("#wins").append(wins)
$("#losses").append(losses)
$("#randomnumber").append(randomNumber)
$("#totscore").append(totscore)

$("#diamond").on("click", function em () {
    totscore=totscore+diamondvalue
   console.log (totscore)
})

$("#emerald").on("click", function() {
    totscore=totscore+emeraldvalue
})

$("#opal").on("click", function() {
    totscore=totscore+opalvalue
})

$("#ruby").on("click", function() {
    totscore=totscore+rubyvalue
})

console.log (totscore)





})