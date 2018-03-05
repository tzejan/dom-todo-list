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

    todo_list.appendChild(new_task_item);
    console.log(tasks);
}

var toggle_done = function(e) {
    var list_item = e.target;
    if (list_item.classList.contains("done")) {
        list_item.classList.remove("done");
    } else {
        list_item.classList.add("done");
    }
};

add_task.addEventListener("click", function(e) {
    var new_task = document.getElementById("new_task");
    new_task_name = new_task.value;
    console.log(e);

    if (new_task_name.length === 0) {
        return;
    }
    tasks.push(new_task.value);
    console.log(new_task.value);
    add_task_list(new_task.value);
    new_task.value = "";
});

var new_task = document.getElementById("new_task");

new_task.addEventListener("keypress", function(event) {
    if (event.charCode === 13) {
        if (new_task.value.length === 0) {
            return;
        }
        var event = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true
        });
        add_task.dispatchEvent(event);
        console.log("dispatch event " + event);
    }
});

update_list();
