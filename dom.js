//console.log(document);

//var ulitems = document.getElementsByClassName("list-group-item");
//ulitems[2].style.backgroundColor = "green";
//for(var i=0; i<ulitems.length; i++){
  //  ulitems[i].style.fontWeight = "bold";
//}

// let inpTag = document.getElementsByTagName("li");
// for(var i=0;i<inpTag.length; i++){
//     inpTag[i].style.color = "blue";
// }

// let qs2 = document.querySelector(".list-group-item:nth-child(2)");
// qs2.style.backgroundColor = "lightgreen";

// let qs3 = document.querySelector(".list-group-item:nth-child(3)");
//  qs3.style.display = 'none';

let items = document.querySelectorAll('.list-group-item');
items[1].style.color = "green";

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'lightGrey';
}

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

itemList.addEventListener('click',deleteItem);

function addItem(e){
  e.preventDefault();
  
  var newItem = document.getElementById('item').value;

  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);

  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-sm float-right edit';

  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);

  
  itemList.appendChild(li);
}


function deleteItem(e){
  e.preventDefault();
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure ?')){
      var liRem = e.target.parentElement;
      itemList.removeChild(liRem);
    }
  }
} 




