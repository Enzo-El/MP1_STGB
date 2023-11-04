const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

var modal = document.getElementById("buttonModal");
var btn = document.getElementById("checkoutBtn");
var span = document.getElementsByClassName("close2")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var amodal = document.getElementById("applyModal");
var abtn = document.getElementById("applyBtn");
var span = document.getElementsByClassName("close")[0];

abtn.onclick = function() {
    amodal.style.display = "block";
}
  
span.onclick = function() {
    amodal.style.display = "none";
}
  
window.onclick = function(event) {
    if (event.target == amodal) {
      amodal.style.display = "none";
    }
  }