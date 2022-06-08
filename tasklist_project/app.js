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
    //DOM load event 
    document.addEventListener('DOMContentLoaded',getTasks)
    //add task event
    form.addEventListener('submit',addTask);
    
    //Remove task event
    taskList.addEventListener('click',removeTask);

    //Clear tasks event 
    clearBtn.addEventListener('click',clearTasks);

    //Filter task event 
    filter.addEventListener('keyup',filterTasks)
}

//get Task from localStorage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        //create li element
        const li = document.createElement('li');
        //add className
        li.className = 'collection-item';
        //create text node and append to li
        li.appendChild(document.createTextNode(task));
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
    });
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

    //store in local storage
    storeTaskInLocalStorage(taskInput.value);

    //clear the input
    taskInput.value= '';



    e.preventDefault();
}

//store task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();

            //Remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
        console.log(e.target);
    }
}

//Remove from local storage
function removeTaskFromLocalStorage(taskItem){
    // console.log(taskItem);
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        if(taskItem.textContent === task){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
//Clear Tasks
function clearTasks(){
    // below is the one way to clear task
    // taskList.innerHTML = '';

    //another way which is faster(not much) then above
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    //Clear task from local storage
    clearTaskFromLocalStorage();
}

//function to clear tasks from local storage
function clearTaskFromLocalStorage(){
    localStorage.clear();
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