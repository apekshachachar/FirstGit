var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItem);

function addItem(e) 
{
    e.preventDefault();

    //get input value and description value
    var newItem = document.getElementById('item').value;
    var dscp = document.getElementById('description').value;

    //create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    //console.log(li);

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create  del button el
    var del = document.createElement('button');

    //add classes to del butt
    del.className = 'btn btn-danger btn-sm float-right delete';

    //append text node
    del.appendChild(document.createTextNode('X'));

    //append button and description input to li
    li.appendChild(del);
    li.appendChild(document.createTextNode(' ' + dscp))

    //append li to list
    itemList.appendChild(li);

    //create edit button element
    var edit = document.createElement('button');
    edit.className = 'btn btn-info btn-sm float-right edit';
    edit.appendChild(document.createTextNode("EDIT"));
    li.appendChild(edit);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItem(e) {
    //convert to lower case
    var text = e.target.value.toLowerCase();

    //get list 
    var items = itemList.getElementsByTagName('li');

    //convert to an array
    Array.from(items).forEach(function (item) 
    {
        var itemName = item.firstChild.textContent;
        var descp = item.nextSibling.textContent;
        if ((itemName.toLowerCase().indexOf(text))!= -1  || (descp.toLowerCase().indexOf(text)) != -1)
        {
            item.style.display = 'block'
        }
        else 
        {
            item.style.display = 'none'
        }
    })
}