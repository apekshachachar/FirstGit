//TASK 1:

var newDiv=document.createElement('div');
//add class
newDiv.className='hello'
//add id
newDiv.id='hello 1'
//add attr
newDiv.setAttribute('title', "hello div");
//console.log(newDiv)

//create textnode
var newDivText=document.createTextNode('Hello World');
//console.log(newDivText)

//add text to div
newDiv.appendChild(newDivText); //not inserted in DOM yet

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv, h1);


//TASK 2:

var li=document.createElement('li');
li.className='list-group-item';

li.appendChild(document.createTextNode('Hello World'));

var li1=document.getElementById('items');
li1.insertBefore(li,li1.childNodes[0]);







