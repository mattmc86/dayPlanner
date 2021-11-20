
$(document).ready(function () { 
//getting the value entered on timeblock and when save button is clickied
// adding to local storage
var saveItemElNine = document.querySelector('.saveNine');
var saveItemElTen = document.querySelector('.saveTen');
var saveItemElEleven = document.querySelector('.saveEleven');
var saveItemElTwelve = document.querySelector('.saveTwelve');
var saveItemElThirteen = document.querySelector('.saveThirteen');
var saveItemElFourteen = document.querySelector('.saveFourteen');
var saveItemElFifteen = document.querySelector('.saveFifteen');
var saveItemElSixteen = document.querySelector('.saveSixteen');
var saveItemElSeventeen = document.querySelector('.saveSeventeen');

// adding to local storage

saveItemElNine.addEventListener("click", function() {

    var addedItemNine = document.querySelector(".entryItemNine").value;
    console.log("added Item is " + addedItemNine)
    localStorage.setItem("addedItemNine", addedItemNine);
}); 

saveItemElTen.addEventListener("click", function() {

    var addedItemTen = document.querySelector(".entryItemTen").value;
    console.log("added Item is " + addedItemTen)
    localStorage.setItem("addedItemTen", addedItemTen);
}); 
saveItemElEleven.addEventListener("click", function() {

    var addedItemEleven = document.querySelector(".entryItemEleven").value;
    console.log("added Item is " + addedItemEleven)
    localStorage.setItem("addedItemEleven", addedItemEleven);
}); 
saveItemElTwelve.addEventListener("click", function() {

    var addedItemTwelve = document.querySelector(".entryItemTwelve").value;
    console.log("added Item is " + addedItemTwelve)
    localStorage.setItem("addedItemTwelve", addedItemTwelve);
}); 

saveItemElThirteen.addEventListener("click", function() {

    var addedItemThirteen = document.querySelector(".entryItemThirteen").value;
    console.log("added Item is " + addedItemThirteen)
    localStorage.setItem("addedItemThirteen", addedItemThirteen);
}); 

saveItemElFourteen.addEventListener("click", function() {

    var addedItemFourteen = document.querySelector(".entryItemFourteen").value;
    console.log("added Item is " + addedItemFourteen)
    localStorage.setItem("addedItemFourteen", addedItemFourteen);
}); 

saveItemElFifteen.addEventListener("click", function() {

    var addedItemFifteen = document.querySelector(".entryItemFifteen").value;
    console.log("added Item is " + addedItemFifteen)
    localStorage.setItem("addedItemFifteen", addedItemFifteen);
}); 

saveItemElSixteen.addEventListener("click", function() {

    var addedItemSixteen = document.querySelector(".entryItemSixteen").value;
    console.log("added Item is " + addedItemSixteen)
    localStorage.setItem("addedItemSixteen", addedItemSixteen);
}); 

saveItemElSeventeen.addEventListener("click", function() {

    var addedItemSeventeen = document.querySelector(".entryItemSeventeen").value;
    console.log("added Item is " + addedItemSeventeen)
    localStorage.setItem("addedItemSeventeen", addedItemSeventeen);
}); 
//to ensure the value entered is still displayed after refresh

$('#timeNine .entryItemNine').val(localStorage.getItem('addedItemNine'));
$('#timeTen .entryItemTen').val(localStorage.getItem('addedItemTen'));
$('#timeEleven .entryItemEleven').val(localStorage.getItem('addedItemEleven'));
$('#timeTwelve .entryItemTwelve').val(localStorage.getItem('addedItemTwelve'));
$('#timeThirteen .entryItem').val(localStorage.getItem('addedItemThirteen'));
$('#timeFourteen .entryItem').val(localStorage.getItem('addedItemFourteen'));
$('#timeFifteen .entryItem').val(localStorage.getItem('addedItemFifteen'));
$('#timeSixteen .entryItem').val(localStorage.getItem('addedItemSixteen'));
$('#timeSeventeen .entryItem').val(localStorage.getItem('addedItemSeventeen'));

// getting curent date and time

  function displayTime() {
    var today = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    $("#currentDay").text(today);
  }

setInterval(displayTime, 1000);

//adding the time for each timeblock
var nine = 9;
$('#timeNine').text(nine );
var ten = 10;
$('#timeTen').text(ten );
var eleven = 11;
$('#timeEleven').text(eleven);
var twelve = 12;
$('#timeTwelve').text(twelve);
var thirteen = 13;
$('#timeThirteen').text(thirteen);
var fourteen = 14;
$('#timeFourteen').text(fourteen);
var fifteen =  15;
$('#timeFifteen').text(fifteen);
var sixteen = 16;
$('#timeSixteen').text(sixteen);
var seventeen = 17;
$('#timeSeventeen').text(seventeen);


// conditional statements for each time block so if the colour
// is dependant on the current time

var currentTime =moment().format('HH');


if (currentTime>nine){
    $('.custom-colNine-6').css('background-color','grey');
}   else if (currentTime<nine){
    $('.custom-colNine-6').css('background-color','green');
}  else{
    $('.custom-colNine-6').css('background-color','red');
};


if (currentTime>ten){
    $('.custom-colTen-6').css('background-color','grey');
}   else if (currentTime<ten){
    $('.custom-colTen-6').css('background-color','green');
}  else{
    $('.custom-colTen-6').css('background-color','red');
};

if (currentTime>eleven){
    $('.custom-colEleven-6').css('background-color','grey');
}   else if (currentTime<eleven){
    $('.custom-colEleven-6').css('background-color','green');
}  else{
    $('.custom-colEleven-6').css('background-color','red');
};

if (currentTime>twelve){
    $('.custom-colTwelve-6').css('background-color','grey');
}   else if (currentTime<twelve){
    $('.custom-colTwelve-6').css('background-color','green');
}  else{
    $('.custom-colTwelve-6').css('background-color','red');
};
if (currentTime>thirteen){
    $('.custom-colThirteen-6').css('background-color','grey');
}   else if (currentTime<thirteen){
    $('.custom-colThirteen-6').css('background-color','green');
}  else{
    $('.custom-colThirteen-6').css('background-color','red');
};
if (currentTime>fourteen){
    $('.custom-colFourteen-6').css('background-color','grey');
}   else if (currentTime<fourteen){
    $('.custom-colFourteen-6').css('background-color','green');
}  else{
    $('.custom-colFourteen-6').css('background-color','red');
};
if (currentTime>fifteen){
    $('.custom-colFifteen-6').css('background-color','grey');
}   else if (currentTime<fifteen){
    $('.custom-colFifteen-6').css('background-color','green');
}  else{
    $('.custom-colFifteen-6').css('background-color','red');
};
if (currentTime>sixteen){
    $('.custom-colSixteen-6').css('background-color','grey');
}   else if (currentTime<sixteen){
    $('.custom-colSixteen-6').css('background-color','green');
}  else{
    $('.custom-colSixteen-6').css('background-color','red');
};
if (currentTime>seventeen){
    $('.custom-colSeventeen-6').css('background-color','grey');
}   else if (currentTime<seventeen){
    $('.custom-colSeventeen-6').css('background-color','green');
}  else{
    $('.custom-colSeventeen-6').css('background-color','red');
};

})