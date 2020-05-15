// ul where future todos will be added
var ul = document.getElementById("list");

// IIFE function constructor to construct todo objects with a text attribute passed into
// the constructor and each todo object has id that will be incremented

var createTodoObject = (function() {
    var nextId = 1;
  
    return function MyClass(todo_text) {
        this.todo_text = todo_text;;
        this.id = nextId++;
    }
})();
  
// getTextInput IIFE will return a function which after invoking returns the value inside
// the input element inside the form

var getTextInput = (function() {
    var form_input_text = document.getElementById("form-input-text");

    return () => form_input_text.value;
})();


// the following will be the function that gets attached to the submit buttons
// addeventlistener

var addTextTodo = function() {
    let object_todo = new createTodoObject(getTextInput());
    var li = document.createElement("li");
    // console.log(object_todo.text);
    
    li.appendChild(document.createTextNode(object_todo.id));
    li.appendChild(document.createTextNode("     "));
    li.appendChild(document.createTextNode(object_todo.todo_text));
    
    ul.appendChild(li);
};

//adding eventlistener

let form_input_submit = document.getElementById("form-input-submit");
form_input_submit.addEventListener("click", addTextTodo);

// not sure about the lines after this. was trying to disable the by default
// reloading of the page once pressed enter inside the text box, and add todo

let form_input_text = document.getElementById("form-input-text");
form_input_text.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
    form_input_submit.click();
    return false;
  }
});



