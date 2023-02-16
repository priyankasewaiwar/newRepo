//console.log(document);

var ulitems = document.getElementsByClassName("list-group-item");
ulitems[2].style.backgroundColor = "green";
for(var i=0; i<ulitems.length; i++){
    ulitems[i].style.fontWeight = "bold";
}

let inpTag = document.getElementsByTagName("li");
for(var i=0;i<inpTag.length; i++){
    inpTag[i].style.color = "blue";
}