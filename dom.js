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

let qs2 = document.querySelector(".list-group-item:nth-child(2)");
qs2.style.backgroundColor = "lightgreen";

let qs3 = document.querySelector(".list-group-item:nth-child(3)");
 qs3.style.display = 'none';

let items = document.querySelectorAll('.list-group-item');
items[1].style.color = "green";

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'lightGrey';
}

