

function calculate(){
    let a = document.getElementById('sideA').value
    let b = document.getElementById('sideB').value
    let c = Math.sqrt(a**2 + b**2)
    document.getElementById('output').innerHTML = `The length hypoteneous of the rt angled triangle is ${c}`
}