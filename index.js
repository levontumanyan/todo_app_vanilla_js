var ul = document.getElementById("list");

var createTodoObject = (function() {
    var nextId = 1;
  
    return function MyClass(todo_text) {
        this.todo_text = todo_text;;
        this.id = nextId++;
    }
})();
  


var getTextInput = (function() {
    var form_input_text = document.getElementById("form-input-text");

    return () => form_input_text.value;
})();


var addTextTodo = function() {
    let object_todo = new createTodoObject(getTextInput());
    var li = document.createElement("li");
    // console.log(object_todo.text);
    
    li.appendChild(document.createTextNode(object_todo.id));
    li.appendChild(document.createTextNode("     "));
    li.appendChild(document.createTextNode(object_todo.todo_text));
    
    ul.appendChild(li);
};

// var addTodoToPage = function() {
//     let object_todo = createTodoObject(getTextInput());

//     console.log(object_todo.text);
// };

let form_input_submit = document.getElementById("form-input-submit");
form_input_submit.addEventListener("click", addTextTodo);

let form_input_text = document.getElementById("form-input-text");
form_input_text.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
    form_input_submit.click();
    return false;
  }
});



