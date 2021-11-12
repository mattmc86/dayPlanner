
  // get value from input 
  // save in local storage
  // display after refresh
  // make sure it works for multiple entries


var saveItemEl = document.querySelector('.save');

saveItemEl.addEventListener("click", function() {
    var addedItem = document.querySelector(".entryItem").value;
    console.log("entry item is " + entryItem)
    console.log("added Item is " + addedItem)
  
  localStorage.setItem("addedItem", addedItem);


  });