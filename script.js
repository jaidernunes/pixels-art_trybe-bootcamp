/* eslint-disable no-param-reassign */
function paintBox() {
  const color = document.getElementsByClassName('color');
  color[0].style.backgroundColor = 'black';
  color[1].style.backgroundColor = 'red';
  color[2].style.backgroundColor = 'green';
  color[3].style.backgroundColor = 'blue';
  color[0].addEventListener('click', clickPalette);
  color[1].addEventListener('click', clickPalette);
  color[2].addEventListener('click', clickPalette);
  color[3].addEventListener('click', clickPalette);
}
paintBox();

function clickPalette (event) {
    const color = document.getElementsByClassName('color');
    color[0].className = 'color';
    color[1].className = 'color';
    color[2].className = 'color';
    color[3].className = 'color';
    // const color = document.getElementsByClassName('color');
    // for (let i = 0; i < color.lenght; i += 0) {
    //     color[i].className = 'color';
    //     console.log(color[i])
    // } NAO SEI PQ NAO FUNCIONOU @_@
    event.target.className = 'color selected';
}

function applyColor (event) {
    let selectedColor = document.getElementsByClassName('selected')[0];
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
}

let pixel = document.getElementsByClassName('pixel');
for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', applyColor);
}