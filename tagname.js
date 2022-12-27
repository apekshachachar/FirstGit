//GET ELEMENTS BY CLASSNAME
var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor='green'
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold'
}




//GET ELEMENTS BY TAG NAME

var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent="Hello 2"
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow'

for(var j=0; j<li.length;j++)
{
    li[j].style.backgroundColor='#f4f4f4'
}