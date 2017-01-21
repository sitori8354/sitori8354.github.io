
updateTotalTaskNumber();
function addTask(){
  console.log("002");
  var value = $("input#input").val();
  if(value!==""){
    $("#task-list").append("<li class='delete'><input class='js-task-checkbox' type='checkbox'><span class='js-content'>"+value+"</span>"+"<button id='delete-button' onclick='deleteTask();'>刪除</button></li>");
    $("#input").val("");
    updateTotalTaskNumber();
  }
}

function isEnterPressed(event){
  if (event.which === 13){
    addTask();
  }
}
$("button#add-button").on("click", addTask);
$("input#input").on("keypress", isEnterPressed);


 $("ul#task-list").on("click","button#delete-button",deleteTask);
function deleteTask(){
  console.log("003");
  console.log($(this).closest("li").text()+"YA");
  var $target = $(this).closest("li");
  $target.remove(); 
  updateTotalTaskNumber();
}


function updateTotalTaskNumber() {
  var total = $(".js-task-checkbox").length;
  $("#total-task-number").text(total);
}
