var checkbox = document.getElementById('add');
checkbox.addEventListener('change', function () {
    //console.log(checkbox.checked);
    if (checkbox.checked) {
        checkbox.insertAdjacentHTML('afterend', '<div class="opa"><br>Add another text <input type="text" name="check2" oninput="fun()" value="' + localStorage.info + '" ></div>')
    } else {
        var div = document.querySelector('.opa');
        div.remove();
    }
});
var btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    if (checkbox.checked) {
        var info1 = document.getElementsByName('first_field')[0].value
        var name1 = document.getElementsByTagName('input')[0].name
        var val1 = name1 + ' = ' + info1;
        var info2 = document.getElementsByName('check')[0].value
        var name2 = document.getElementsByTagName('input')[1].name
        var val2 = name2 + ' = ' + info2;
        var info3 = document.getElementsByName('check2')[0].value
        var name3 = document.getElementsByTagName('input')[2].name
        var val3 = name3 + ' = ' + info3;
        alert(val1 + "\n" + val2 + "\n" + val3)
    } else {
        var info1 = document.getElementsByName('first_field')[0].value
        var name1 = document.getElementsByTagName('input')[0].name
        var val1 = name1 + ' = ' + info1;
        alert(val1)
    }
});

function fun(event){
   var text = document.getElementsByName('check2')[0].value 
    localStorage.setItem('info', text)
    //alert(localStorage.info)
    localStorage.info = document.getElementsByName('check2')[0].value;
} 
