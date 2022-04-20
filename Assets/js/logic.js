function makeTimeblocks(hour, existingTodo = "") {
    //build some additional logic for if time is past present or future;
    var currentHour = new Date().getHours();
    var presentPastOrFuture = "future";
    if (currentHour > hour) presentPastOrFuture = "past";
    if (currentHour === hour) presentPastOrFuture = "present";
    //grabs the the saved todo from local storage
    var existingTodo = localStorage.getItem(hour);
    //stops existingTodo from being displaying 'null'
    if (existingTodo === null) {
        existingTodo = "";
    }
    $(".container").append($(`
    <div class="row time-block">
        <div class="hour col-1">${hour}:00</div>
        <textarea name="" id="${hour}" cols="30" rows="3" class="description col-9 ${presentPastOrFuture}">${existingTodo}</textarea>
        <button class="btn saveBtn col-2">Save</button>
    </div>`));
}

//for loop to create timeblocks
for (var i = 9; i < 18; i++) {
    makeTimeblocks(i);
}

//adds functionality to the save button
var saveBtn = document.querySelectorAll(".saveBtn")

// create an event listener for every .saveBtn using for loop
for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", saveToDo)
}

//saves todo to local storage
function saveToDo(event) {
    var toDoDescription = event.target.parentNode.children[1].value
    var toDoTime = event.target.parentNode.children[1].id
    localStorage.setItem(toDoTime, toDoDescription)
}
