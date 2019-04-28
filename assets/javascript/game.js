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


//I did not fugure out the way to get variable totscore from under the click event function

$("#diamond").on("click",function (){
    totscore=totscore+diamondvalue
    return totscore
})

$("#emerald").on("click", function() {
    totscore=totscore+emeraldvalue
    return totscore
})

$("#opal").on("click", function() {
    totscore=totscore+opalvalue
    return totscore
})

$("#ruby").on("click", function() {
    totscore=totscore+rubyvalue
    return totscore
})

if (totscore == randomNumber) {
    wins++
}

if (totscore < randomNumber) {
    losses++
}

})