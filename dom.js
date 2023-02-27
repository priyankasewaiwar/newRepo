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
var filter = document.getElementById('filter');
filter.addEventListener('keyup',filterItem);


form.addEventListener('submit', addItem);

itemList.addEventListener('click',deleteItem);

function addItem(e){
  e.preventDefault();
  
  var newName = document.getElementById('name').value;
  var newEmail = document.getElementById('email').value;
  var newPhone = document.getElementById('phone').value;

let myObj = {
  name : newName,
  email : newEmail,
  phone : newPhone
}

let myObj_String = JSON.stringify(myObj);

localStorage.setItem(newEmail,myObj_String);

  // localStorage.setItem("itemName",newItem);
  // localStorage.setItem("itemDesc",newDesc);

  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newName));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(document.createTextNode(newEmail));
  li.appendChild(document.createTextNode(" "));  
  li.appendChild(document.createTextNode(newPhone));

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
  
      var textVal = liRem.childNodes[2].textContent;
      localStorage.removeItem(textVal);
      itemList.removeChild(liRem);
      //var textVal = e.target.childNodes[1].textContent;
      //localStorage.removeItem(textVal);
    }
  }
} 
function filterItem(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var name = item.firstChild.textContent;
    var email = item.childNodes[2].textContent;
    var phone = item.childNodes[4].textContent;
    name = name + email + phone;
    if(name.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';

    }else {
      item.style.display ='none';

    }
  });
  }

  






