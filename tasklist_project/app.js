//Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

console.log("working");
// Load all event listeners
loadEventListeners();

//Function load all event listeners
function loadEventListeners(){
    //add task event
    form.addEventListener('submit',addTask);
    
    //Remove task event
    taskList.addEventListener('click',removeTask);

    //Clear tasks event 
    clearBtn.addEventListener('click',clearTasks);

    //Filter task event 
    filter.addEventListener('keyup',filterTasks)
}

//Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }

    //create li element
    const li = document.createElement('li');
    //add className
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add className
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li 
    li.appendChild(link);
    
    //Append the li to ul
    console.log(li);
    taskList.appendChild(li);

    //clear the input
    taskInput.value= '';



    e.preventDefault();
}

//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
        console.log(e.target);
    }
}

//Clear Tasks
function clearTasks(){
    // below is the one way to clear task
    // taskList.innerHTML = '';

    //another way which is faster(not much) then above
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

//Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            // console.log("foreach task:",task);
            // const item = task.firstChild.textContent;
            // console.log("item within foreach",item);
            // console.log(item.toLowerCase().indexOf(text));
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = "block";
            }else{
                task.style.display = "none";

            }
        }
    )

    // console.log(text);
}