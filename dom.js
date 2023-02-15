//console.log(document);

var ulitems = document.getElementsByClassName("list-group-item");
ulitems[2].style.backgroundColor = "green";
for(var i=0; i<ulitems.length; i++){
    ulitems[i].style.fontWeight = "bold";
}