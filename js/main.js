const inputFood = document.querySelector("#input-value");

const saveBtn = document.querySelector("#btn");

let foodContainer = document.getElementById("food-container")

const main = document.getElementById("main");

saveBtn.addEventListener('click', ()=>{

    if(inputFood.value == ''){
        // alert ('⚠ Please enter a valid item!');
        let alertMessage = document.createElement("div");
        alertMessage.innerText = '⚠ Please enter a valid item!';
        alertMessage.className = 'error';
        main.prepend(alertMessage);
        
        setTimeout(() => {
            alertMessage.remove()
            },3000)
        exit();
    }

    //  create Element in DOM
    const li  = document.createElement("li");
    const text = document.createTextNode(inputFood.value);
    li.className= "food-item"; 
    li.append(text);
    foodContainer.append(li);
    inputFood.value ='';


    const EditButton = document.createElement('button');
    EditButton.textContent = 'Edit';
    EditButton.className="edit-btn";
    li.appendChild(EditButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList="delete-btn";
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteItem);
    

    let successfullMessage = document.createElement("div");
    successfullMessage.innerText = '✅ Successfull! Food is updated!';
    successfullMessage.className = 'alert';
    main.prepend(successfullMessage);

    setTimeout(() => {
        successfullMessage.remove()
    },3000)
});


/*
get list of value using getElementByClassName

let allFoods =  [].map.call(foodItems, (food) => food.textContent);
*/
// const editBtn = document.getElementById("edit-btn");

function deleteItem(event){
    let exit = event.target.parentNode;
    exit.remove();
}
