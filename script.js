/*To do App - 
Needs a way to submit items, add a item name press submit, a function to create a new table row with the name of the newly added item.
Ability to delete items each item will have a delete button, that brings up a prompt to confirm then deletes item.
Search bar to search through items. 
 */
let table = document.getElementById('table');

let form = document.getElementById('add-form');
form.addEventListener('submit', addItem);

function addItem(e){
  e.preventDefault();//prevents the event from looking for a external file
  
  //get input value
  let newItem = document.getElementById('submit-input');

  //create new table-row
  let tr = document.createElement('tr');
  //add class
  tr.className = 'table-row-container';
  //add text node with input value 
  let td = document.createElement('td');
  td.className = 'table-item';
  td.appendChild(document.createTextNode(newItem));
  tr.appendChild(td);
  table.appendChild(tr);
}


//REMOVE ITEM
//  const removeItemButton = document.getElementsByClassName('btn-delete');
//  removeItemButton = addEventListener('click', deleteItem);

//  function deleteItem(e) {

//  }