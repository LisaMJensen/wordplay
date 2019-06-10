$(function(){
  var userInput;
  var array1;
  var array2 = [];

$("form").submit(function(event){
  event.preventDefault();
  userInput = $("input#words").val();
  array1 = userInput.split(" ");
  console.log(array1);
  array1.forEach(function(word) {
  if (word.length >2){
    array2.push(word);
}
});
  $("form")[0].reset();

  array2.reverse();
  alert(array2);
  array2=[];

});
});
