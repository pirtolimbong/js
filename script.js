function showDiv() {document.getElementById('slider').style.opacity = "1"; document.getElementById('konten').style.top = "0";document.querySelector("body").style.animation = "anim 9s ease infinite";}
  function tombol() {document.getElementById('tombWA').style.margin = "0";document.getElementById('tombWA').style.visibility = "visible";document.getElementById('tombWA').style.opacity = "1";}  

async function duar(){
await swals.fire('Makasih ><');duar2();
document.getElementById('bodyblur').style.opacity = "1";document.getElementById('bodyblur').style.visibility = "visible";
document.getElementById('ftnembak').style.opacity = "0";document.getElementById('ftnembak').style.height = "0";
document.getElementById('fotoloveu').style.opacity = "1";document.getElementById('fotoloveu').style.height = "200px";
document.getElementById('slider').style.display = "none";
document.getElementById('contTom').style.display = "none";
}
function duar2(){
if(a<finish.length){document.getElementById("sp2").innerHTML += finish.charAt(a);a++;setTimeout(duar2,100);}
if(a==finish.length){setTimeout(tombol,1000);var e1 = document.getElementById('photo');e1.classList.add("degdeg");}
}

function prtnyaan(){
document.getElementById('bodyblur').style.opacity = ".8";document.getElementById('bodyblur').style.visibility = "visible";
document.getElementById('ftnembak').style.opacity = "1";document.getElementById('ftnembak').style.height = "150px";
document.getElementById('slider').style.display = "none";
if(o<start.length){document.getElementById("kamumaugak").innerHTML += start.charAt(o);o++;setTimeout(prtnyaan,100);}
if(o==start.length){document.getElementById('contTom').style.margin = "0";}
}
