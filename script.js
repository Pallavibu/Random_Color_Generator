const button = document.querySelector('button');
button.addEventListener('click', changeColor);

function changeColor(){
    const color = generateHexColor();
    document.body.style.backgroundColor = color;
}

function generateHexColor(){
    const randomColor = Math.floor(Math.random() * 16777215);

    return '#' + randomColor.toString(16).padStart(6, '0');
}

// padStart(6,0) - Here when ever the  HexNumber is generated then if it has less then the max length so many 0s are added that os the maximum length of the Hexdecimal number is 6.

// toString(16) - Here the number is converted to string and the maximum is 16 because in Hexa decimal number it starts from 0 to F.