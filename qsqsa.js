//QUERYSELECTOR - single item

// var header = document.querySelector('#main-header')
// header.style.borderBottom='solid 4px #ccc'

// var input=document.querySelector('input');
// input.value='Hello World' //grabs first input by default

// var submit=document.querySelector("input[type='submit']");
// submit.value ='SEND'

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

var sec_item = document.querySelector('.list-group-item:nth-child(2)');
sec_item.style.backgroundColor = 'green'

var third_item = document.querySelector('.list-group-item:nth-child(3)');
third_item.style.visibility='hidden'

//QUERYSELECTORALL -multiple items

var even1=document.querySelectorAll('li:nth-child(even)');
even1[0].style.color='green' //won't be visible because of above task

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length;i++)
{
    odd[i].style.backgroundColor = '#ccc'
}
