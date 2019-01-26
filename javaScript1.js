//var head = ['hat', 'afro', 'afroHat', 'cap', 'alien', 'afroAlien'];
//
//var body = ['clownUniform', 'tux', 'normie', 'fireman'];
//
//var feet = ['highHeels', 'clownShoes', 'hooves', 'sneakers'];

function dressHead() {
    var dress = document.getElementById('head').value;
    document.getElementById('img').innerHTML = dress;
}

function dressBody() {
    var dress = document.getElementById('body').value;
    document.getElementById('img').innerHTML = dress;
}

function dressFeet() {
    var dress = document.getElementById('feet').value;
    document.getElementById('img').innerHTML = dress;
}