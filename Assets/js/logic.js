function makeTimeblocks(hour, existingTodo = ""){
    //build some additional logic for if time is past present or future;
    var currentHour = new Date().getHours();
    var presentPastOrFuture = "future";
    if(currentHour > hour) presentPastOrFuture = "past";
    if(currentHour === hour) presentPastOrFuture = "present";
    $(".container").append($(`
    <div class="row time-block">
        <div class="hour col-1">${hour}:00</div>
        <textarea name="" id="" cols="30" rows="3" class="description col-9 ${presentPastOrFuture}">${existingTodo}</textarea>
        <button class="btn saveBtn col-2">Save</button>
    </div>`));
    //free feel to do the non-jquery equiv.
}

for(var i = 9; i<18; i++){
    makeTimeblocks(i);
}

var saveBtn = document.querySelector(".saveBtn")
var toDoDescription = document.querySelector(".description")
var toDoHour = document.querySelector(".hour")

//Not working as intended as of now.
function saveToDo(){
    localStorage.setItem(toDoHour.textContent, toDoDescription.value);
}

saveBtn.addEventListener("click", saveToDo());


//when app first loads, need to grab all existing todos and show on the page
