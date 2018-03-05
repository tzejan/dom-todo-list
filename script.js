var tasks = ["buy milk", "eat dinner", "nail javascript"];

var todo_list = document.getElementById("todo-list");

var add_task = document.getElementById("add_task");

function update_list() {
    for (task of tasks) {
        add_task_list(task);
    }
}

function add_task_list(task_name) {
    var new_task_item = document.createElement("li");

    new_task_item.textContent = task_name;
    new_task_item.addEventListener("click", toggle_done);
    new_task_item.classList.add("animated");
    new_task_item.classList.add("bounce");

    todo_list.appendChild(new_task_item);
    console.log(tasks);
}

function toggle_done(event) {
    var list_item = event.target;
    if (list_item.classList.contains("done")) {
        list_item.classList.remove("done");
    } else {
        list_item.classList.add("done");
    }
};

add_task.addEventListener("click", function(event) {
    var new_task = document.getElementById("new_task");
    new_task_name = new_task.value;
    console.log(event);

    if (new_task_name.length === 0) {
        return;
    }
    tasks.push(new_task.value);
    console.log(new_task.value);
    add_task_list(new_task.value);
    new_task.value = "";
});

var new_task = document.getElementById("new_task");

new_task.addEventListener("keypress", function(mouseEvent) {
    if (mouseEvent.charCode === 13) {
        if (new_task.value.length === 0) {
            return;
        }
        var mouseEvent = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true
        });
        add_task.dispatchEvent(mouseEvent);
        console.log("dispatch event " + mouseEvent);
    }
});

update_list();
