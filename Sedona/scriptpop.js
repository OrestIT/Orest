var buttonlink=document.querySelector(".button-serch-js");
var serchhouse=document.querySelector(".serch-house");
var intermap=document.querySelector(".inter-map");
var map=document.querySelector(".normmap");
var form=document.querySelector("form");
var counterchild=document.querySelector("[name=children-count]");
var counterold=document.querySelector("[name=old-count]");
var storage=localStorage.getItem("counterchild");
var serchstorage=document.querySelector(".button-serch");

buttonlink.addEventListener("click",function(evt){
	evt.preventDefault();
	serchhouse.classList.toggle("serch-house-active");

});

if(!intermap){
	map.classList.add("map-apply");

}

form.addEventListener("submit",function(evt){
	localStorage.setItem("counterchild",counterchild.value);

});