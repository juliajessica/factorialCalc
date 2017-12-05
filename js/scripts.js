$(document).ready(function() {
  $("form#factorialForm").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("#factorialInput").val());
    var factorial = 1;
    for (i = 1; i <=number; i++) {
      factorial = (i * factorial);
    //  console.log(factorial);
    };
    alert(factorial);
  });;
});
