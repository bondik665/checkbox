





 const elements = document.querySelectorAll('.order');
 const array = Array.from(elements);
 array.forEach(element => element.onclick = orderFunction)

function orderFunction(){
var speed = document.querySelector('.order[value="speed"]');
var quality = document.querySelector('.order[value="quality"]');
var cheap = document.querySelector('.order[value="cheap"]');
console.log(1)
console.log(this.value)

if(this.value == "speed" && quality.checked){
cheap.checked = false;
console.log(this.value)
return true;
}

if(this.value == "speed" && cheap.checked){
quality.checked = false;
return true;
}
if(this.value == "cheap" && speed.checked){
quality.checked = false;
return true;
}
if(this.value == "cheap" && quality.checked){
speed.checked = false;
return true;
}

if(this.value == "quality" && speed.checked){
cheap.checked = false;
return true;
}

if(this.value == "quality" && cheap.checked){
bistro.checked = false;
return true;
}
}