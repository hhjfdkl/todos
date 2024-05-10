//these three lines are our script - upon firing app these are executed by our program
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
showTask(); 

//basically with these first two functions, we're just storing data in the cache and pulling (inconsistent way of saving data)
function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML); //saves data from listContainer in browser
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data"); //pulls info for listContainer from browser stored as "data"
}

//this function is for our "add task" bar. 
function addTask()
{
    if(inputBox.value === "")
    {
        alert("You must write something!"); //this will pop up when user doesn't input a string
    } 
    else 
    {
        let li = document.createElement("li");  //defines "li" as a list element
        li.innerHTML = inputBox.value; //adds whatever was in the input box to the list - NOTE: Potential HTML injection here, so this isn't good code
        listContainer.appendChild(li); //appends the li element defined above as a child to our listContainer from line 3
        let span = document.createElement("span");  //defines "span" as a span element
        span.innerHTML = "\u00d7";  //this is unicode for multiply sign, added to our span as text
        li.appendChild(span);   //appends the span element as a child to li
    }
    inputBox.value = ""; //removes text inside the text box
    saveData(); //calls our save data function to store the updates
}



listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked");   //when we click the list item, it'll change the class
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();    //when we click the span, it'll delete the object
    }
    saveData(); //save
}, false);