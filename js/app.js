// const button = document.getElementById('btn-demo');
// const input = document.getElementById('item');
// button.addEventListener('click', (e) => {
//  console.log(e.altKey);
// });

// input.addEventListener('keypress', (e) =>{
//     console.log(e.target.value);
// });

const form = document.getElementById("form");
const form2 = document.querySelector(".form-update");
const inputItem = document.getElementById("item");
const inputItem2 = document.getElementById("item2");
const itemLists = document.querySelector(".item-lists");
const inputSearch = document.getElementById('search')
let selectedItem ;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log('Form Submitted Successfully');

  const newItem = inputItem.value;
  console.log(newItem);

  if (newItem.length > 0) {
    //create and add classname to a new li element
    const li = document.createElement("li");
    li.className = "list-group-item";

    //create a new text node for the new li element
    const newText = document.createTextNode(newItem);

    li.appendChild(newText);

    const listActions = document.createElement("div");
    listActions.className = "list-actions";

    const btnDel = document.createElement("button");
    btnDel.className = "btn btn-danger";
    btnDel.appendChild(document.createTextNode("Delete"));

    const btnEdit = document.createElement('button');
    btnEdit.className = 'btn btn-edit';
    btnEdit.appendChild(document.createTextNode('edit'));

    listActions.appendChild(btnDel);
    listActions.appendChild(btnEdit);

    li.appendChild(listActions);

    itemLists.appendChild(li);

    console.log(li);

    inputItem.value = " ";
  } else {
    alert("Please, Add an Item");
  }
});

//remove item
itemLists.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    if (confirm("Item will be deleted")) {
      const li = e.target.parentElement.parentElement;
      itemLists.removeChild(li);
    }
  }
});

//Update item

itemLists.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-edit")) {
    form2.classList.remove("hide");
    form.classList.add("hide");

    selectedItem = e.target.parentElement.parentElement;
    inputItem2.value = selectedItem.firstChild.textContent;
  }
});
form2.addEventListener('submit',(e)=>{
  if(inputItem2.value.length > 0){
    e.preventDefault()
    selectedItem.firstChild.textContent = inputItem2.value;
    form2.classList.add('hide');
    form.classList.remove("hide");
  }else{  
    alert('put in an item please');
  }
});


inputSearch.addEventListener('input',(e)=>{
  const searchText = e.target.value.toLowerCase();
  const li = document.getElementsByTagName('li');
  const liArr = Array.from(li);
  
  liArr.forEach((li)=>{
    const currList = li.firstChild.textContent;
    if(currList.toLowerCase().indexOf(searchText) !== -1){
      console.log(currList)
      li.style.display = 'flex';
    }else{
      
      li.style.display = 'none'
    }
  })
})