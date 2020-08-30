/*To do App - 
Needs a way to submit items, add a item name press submit, a function to create a new table row with the name of the newly added item and the delete button.
Ability to delete items each item will have a delete button, that brings up a prompt to confirm then deletes whole row.
Search bar to search through items text hides items who's text do not match with search. 
 */

let form = document.getElementById('add-form');
form.addEventListener('submit', addItem);

let table = document.getElementById('table');
let tableBody = document.getElementById('t-body');
table.addEventListener('click', removeItem);

let searchBar = document.getElementById('search-bar');
searchBar.addEventListener('keyup', searchItems)

//Add items

function addItem(e){//e = event object
  e.preventDefault();//prevents the event from looking for a external file
  //get input value
  let newItem = document.getElementById('submit-input').value;
  //create new table-row
  let tr = document.createElement('tr');
  //add class
  tr.className = 'table-row-container';
  //Create new table-data and add class 
  let td = document.createElement('td');
  td.className = 'table-item';
  //Add remove button element
  let deleteButton = document.createElement('button');
  let tdButton = document.createElement('td');
  deleteButton.className = 'fa fa-trash';
  deleteButton.classList.add('btn-delete');
  tdButton.appendChild(deleteButton);
  td.appendChild(document.createTextNode(newItem));
  tr.appendChild(td);
  tr.appendChild(tdButton);
  tableBody.appendChild(tr);
}
//DELETE ITEM

function removeItem(e) {
  if(e.target.classList.contains('btn-delete')) {
    if(confirm('Are you sure you want to delete?')){
      let tr = e.target.parentElement.parentElement;
      tableBody.removeChild(tr);
    }
  }
}
//Seach through items
let itemRow = table.getElementsByClassName('table-row-container');

function searchItems(e) {
  //convert text to lowercase
  let text = e.target.value.toLowerCase();
  let items = table.getElementsByClassName('table-item');
  //convert to an array
  Array.from(items).forEach(function(item){//array. executes a function once for every array element.
    let itemName = item.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    }
    else {
      item.style.display = 'none';
    }
  });
}
