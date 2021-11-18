
$(document).ready(function () { 
//getting the value entered on timeblock and when save button is clickied
// adding to local storage
var saveItemEl = document.querySelector('.save');

saveItemEl.addEventListener("click", function() {
    var addedItem = document.querySelector(".entryItem").value;
    
    //var storeItem =localStorage.getItem("addedItem");
    
    //console.log("store item is " + storeItem)
    console.log("added Item is " + addedItem)
    //addedItem.appendChild(storeItem);
    localStorage.setItem("addedItem", addedItem);
}); 

// $('.save').on('click', function(){
//     var entry = $(this).siblings('.entryItem').val();
    
//     var time = $(this).parent().attr('id');

//     console.log("entry " , entry);
//     console.log("time " , time);

//     localStorage.setItem(entry, time)

// })

$('#timeNine .entryItem').val(localStorage.getItem('timeNine'));

// getting cuurent date and time

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