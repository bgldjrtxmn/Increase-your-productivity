let a = document.querySelector('.btn-round');
let b = document.querySelector('.round-buttons__wrapper-svg');

a.onclick = function hideBlock(){
    if (b.style.visibility == "hidden") { 
        b.style.visibility = "visible";
      }
      else {
       b.style.visibility = "hidden";
      }
}
