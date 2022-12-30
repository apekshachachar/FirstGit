//Task 1 below delete button code and Task 2 below Task 1.

var form = document.getElementById('addForm');
//console.log(form);
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click' ,removeItem);


//add item
function addItem(e) {
    e.preventDefault();
   
    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    //console.log(li);

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create  del button el
    var del=document.createElement('button');

    //add classes to del butt
    del.className='btn btn-danger btn-sm float-right delete';

    //append text node
    del.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(del);
    
    //append li to list
    itemList.appendChild(li);



    //-------TASK 1-------------//


    //create edit button element
    var edit=document.createElement('button');
    edit.className='btn btn-info btn-sm float-right edit';
    edit.appendChild(document.createTextNode("Edit"));
    li.appendChild(edit);
}

//-------------TASK 2-----------------//


//remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
