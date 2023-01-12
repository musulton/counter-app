const counterEl = document.getElementById('counter')
let count = 0

function increase() {
  count += 1
  counterEl.innerHTML = count
}

function decrease(){
  count -= 1
  counterEl.innerText = count
}