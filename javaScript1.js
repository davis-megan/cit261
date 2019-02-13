/*eslint-env browser*/

function even() {

    var car1 = document.getElementById("one").value;

    var car2 = document.getElementById("two").value;

    var car3 = document.getElementById("three").value;

    var car4 = document.getElementById("four").value;

    var car5 = document.getElementById("five").value;

    var car6 = document.getElementById("six").value;

    var array = [car1, car2, car3, car4, car5, car6];

    var text = "";
    var i;

    if (car1 == '' || car2 == '' || car3 == '' || car4 == '' || car5 == '' || car6 == '') {
        
        alert('Please fill all fields');
        return false;
    
    } else {
        for (i = 1; i < array.length; i += 2) {

            text += array[i] + "<br>";

        }
    }
    document.getElementById("output").innerHTML = text;
}
