// -----Business Logic-----


// -----User Interface Logic-----
$(document).ready(function () {
  $("form#formOne").submit(function (event) {
    event.preventDefault();
    let input1 = $("input#input1").val().toUpperCase();
    let input2 = $("input#input2").val().toUpperCase();
    let input3 = $("input#input3").val().toUpperCase();
    let input4 = $("input#input4").val().toUpperCase();
    let input5 = $("input#input5").val().toUpperCase();
    let input6 = $("input#input6").val().toUpperCase();

    let groceryArray = [input1, input2, input3, input4, input5, input6];
    let sortedList = groceryArray.sort();
    sortedList.forEach(function (element) {
      $("<li>").html(element).appendTo(".grocerylist");
    })

    // });

  })
})














