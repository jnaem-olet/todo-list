//disply today's date info
const today = new Date();
today.setHours(0,0,0,0);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const dateBox = document.querySelector(".today-date");
dateBox.textContent = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear()+" "+days[today.getDay()];

//function for counting
function updateCounter(){
            const taskList = document.getElementById("taskList");

            const tasks = taskList.querySelectorAll("li:not(.completed)");
            console.log(tasks.length);

            const taskCounter = document.getElementById("taskCounter");
            taskCounter.textContent = "Tasks = "+tasks.length;
        }

//adding task into the list
const addButton = document.getElementById("addTaskButton");
addButton.addEventListener("click", function(){
    console.log("clicked")
    const taskInput = document.getElementById("taskInput");
    
    if (taskInput.value.trim() !== ""){
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const dueDateInput = document.getElementById("dueDateInput");
        const dueDate = new Date(dueDateInput.value);
        dueDate.setHours(0,0,0,0);

        if(dueDateInput.value !==""){
            if(dueDate-today == 0){
                li.textContent = taskInput.value + "    D-DAY";
            }
            else if(dueDate-today > 0){
                li.textContent = taskInput.value + "    D-" + Math.ceil((dueDate-today)/(1000*60*60*24));
            }
            else{
            li.textContent = taskInput.value + "    D+" + Math.abs((Math.ceil((dueDate-today)/(1000*60*60*24))));}
        }

        else{
            li.textContent = taskInput.value;}

        li.addEventListener("click", function(){
            li.classList.toggle("completed")
            console.log("completed")

            updateCounter();
        })
        
        const taskList = document.getElementById("taskList");
        taskList.appendChild(li);

        updateCounter();
        taskInput.value = ""}
    
    else{alert("ENTER THE TASK!!");}
});


//dark mode
const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
});